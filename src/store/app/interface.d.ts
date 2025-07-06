export interface IAppState {
	token: string
	collapsed: boolean
	theme: 'dark' | 'light'
	themeColor: string
	avatar?: string
	user?: Record<string, any>
}
