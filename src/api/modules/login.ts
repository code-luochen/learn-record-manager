import http from '@/api'

interface LoginResponse {
	code: number
	data: {
		access_token: string
	}
}

// 登录
export const login = (params: any): Promise<LoginResponse> => {
	return http.post('/api/users/login', params) as any
}

// 根据 token 去获取用户信息
export const logined = () => {
	return http.get('/api/users/logined')
}

// 注册
export const register = (params: any) => {
	return http.post('/api/users/create', params)
}
