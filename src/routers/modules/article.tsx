import { lazy } from 'react'
import LayoutIndex from '../../layout'
import LazyLoad from '../utils/lazyLoad'
import { IRouterObject } from '../interface.d'

const articleRouteArray: IRouterObject[] = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: '/my_article',
				element: LazyLoad(
					lazy(() => import('@/views/article/pages/my_article')),
				),
			},
			{
				path: '/category',
				element: LazyLoad(
					lazy(() => import('@/views/article/pages/category')),
				),
			},
			{
				path: '/draft',
				element: LazyLoad(
					lazy(() => import('@/views/article/pages/draft')),
				),
			},
		],
	},
]

export default articleRouteArray
