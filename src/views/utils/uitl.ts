import { IRouterObject } from '@/routers/interface'

// 找到匹配的路由
export const searchRouter = (pathname: string, router: IRouterObject[]) => {
	let result = {}

	for (let item of router) {
		if (item.path === pathname) return item
		if (item.children) {
			const res = searchRouter(pathname, item.children)
			if (Object.keys(res).length) result = res
		}
	}
	return result
}
