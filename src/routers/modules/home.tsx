import Home from '@/views/home'
import LayoutIndex from '../../layout'
import { IRouterObject } from '../interface.d'

// 首页模块
const homeRouteArray: IRouterObject[] = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: '/home',
				element: <Home />,
			},
		],
	},
]

export default homeRouteArray
