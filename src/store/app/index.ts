// 全局状态管理

import { makeAutoObservable } from 'mobx'
import { IAppState } from './interface'

class AppStore {
	constructor() {
		makeAutoObservable(this)
	}

	initState: IAppState = {
		token: '',
		collapsed: false,
		theme: 'dark',
		themeColor: '#1890ff',
	}

	// 更新初始化数据
	setInitState = (data: any) => {
		this.initState = {
			...this.initState,
			...data,
		}
	}
}

const appStore = new AppStore()
export default appStore
