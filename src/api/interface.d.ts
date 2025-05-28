// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
	data?: T
}
