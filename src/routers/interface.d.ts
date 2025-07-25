export interface IMeta {
	title?: string
	icon?: string
	hidden?: boolean
	noAuth?: boolean
	key: string
}

export interface IRouterObject {
	path?: string
	element?: React.ReactNode
	meta?: IMeta
	children?: IRouterObject[]
}
