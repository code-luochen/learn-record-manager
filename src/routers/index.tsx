import { Navigate, useRoutes } from 'react-router-dom'
import { IRouterObject } from './interface.d'

// 导入所有的路由模块
const metaRouters: any = import.meta.glob('./modules/*.tsx', { eager: true })

// 将路由模块都转换成路由队形
const routerArray: IRouterObject[] = []

Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach(key => {
		routerArray.push(...metaRouters[item][key])
	})
})

const routers = [
	{
		path: '/',
		element: <Navigate to="/home" />,
	},
	{
		path: '/login',
		// element: <Login />,
		meta: {
			requiresAuth: false,
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
