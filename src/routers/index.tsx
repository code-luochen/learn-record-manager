import { Navigate, useRoutes } from 'react-router-dom'
import { IRouterObject } from './interface.d'
import Login from '@/views/login'

// 导入所有的路由模块
const metaRouters: any = import.meta.glob('./modules/*.tsx', { eager: true })

// 将路由模块都转换成路由队形
const routerArray: IRouterObject[] = []

Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach(key => {
		routerArray.push(...metaRouters[item][key])
	})
})

export const routers: IRouterObject[] = [
	{
		path: '/',
		element: <Navigate to="/home" />,
	},
	{
		path: '/login',
		element: <Login />,
		meta: {
			noAuth: true,
			title: '登录页',
			key: 'login',
		},
	},
	...routerArray,
	{
		path: '*',
		element: <div>404</div>,
	},
]

const Router = () => {
	const router = useRoutes(routers)
	return router
}

export default Router
