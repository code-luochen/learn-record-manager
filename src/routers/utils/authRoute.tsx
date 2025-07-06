import { appStore } from '@/store'
import { searchRouter } from '@/views/utils/uitl'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { routers } from '..'

const AuthRoute: React.FC<{ children: React.ReactNode }> = props => {
	// 判断是否有权限
	const token = appStore.getState().token
	const { pathname } = useLocation()

	// 找到的路由
	const router = searchRouter(pathname, routers)

	if (router?.meta?.noAuth) {
		return props.children
	}

	if (!token) {
		return <Navigate to="/login" replace />
	}

	return props.children
}
export default AuthRoute
