import { lazy } from 'react'
import LayoutIndex from '../../layout'
import { IRouterObject } from '../interface.d'
import LazyLoad from '../utils/lazyLoad'

// 首页模块
const homeRouteArray: IRouterObject[] = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: '/static',
				element: LazyLoad(lazy(() => import('@/views/statics'))),
			},
		],
	},
]

export default homeRouteArray
