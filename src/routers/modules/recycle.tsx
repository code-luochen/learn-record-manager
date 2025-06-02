import { lazy } from 'react'
import LayoutIndex from '../../layout'
import LazyLoad from '../utils/lazyLoad'

const RecycleRoute = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: '/recycle',
				element: LazyLoad(lazy(() => import('@/views/recycle'))),
			},
		],
	},
]

export default RecycleRoute
