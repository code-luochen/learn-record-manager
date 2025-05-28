import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import { ResultData } from './interface'

const config = {
	baseURL: 'http://localhost:3309',
	// 设置超时时间（10s）
	timeout: 10000,
	// 跨域时候允许携带凭证
	withCredentials: true,
}

class RequestHttp {
	service: AxiosInstance

	constructor(config: AxiosRequestConfig) {
		this.service = axios.create(config)

		this.service.interceptors.request.use(
			(config: any) => {
				// 自定义header，可添加项目token
				config.headers = {
					...config.headers,
				}
				return config
			},
			(error: AxiosError) => {
				return Promise.reject(error)
			},
		)

		this.service.interceptors.response.use(
			response => {
				const { data } = response
				return data
			},
			(error: AxiosError) => {
				return Promise.reject(error)
			},
		)
	}

	// 常用方法封装
	get<T>(
		url: string,
		params?: object,
		_options = {},
	): Promise<ResultData<T>> {
		return this.service.get(url, { params, ..._options })
	}

	post<T>(
		url: string,
		params?: object,
		_options = {},
	): Promise<ResultData<T>> {
		return this.service.post(url, params, _options)
	}
}

export default new RequestHttp(config)
