import md5 from 'js-md5'
import React, { useState } from 'react'
import { Button, Form, Input, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import IconFont from '@components/inconfont'
import { login, logined } from '@/api/modules/login'
import { appStore } from '@/store'

const LoginForm: React.FC = () => {
	const navigate = useNavigate()
	const [form] = Form.useForm()
	const [loading, setLoading] = useState<boolean>(false)
	const { setInitState } = appStore

	// 登录
	const onFinish = async (loginForm: Login.ReqLoginForm) => {
		try {
			setLoading(true)
			loginForm.password = md5(loginForm.password)
			const { data, code } = await login(loginForm)
			if (code === 200) {
				setInitState({ token: data?.access_token || '' })
				const user = await logined()
				setInitState({ user: user?.data })
			}
			message.success('登录成功！')
			navigate('/home')
		} finally {
			setLoading(false)
		}
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Form
			form={form}
			name="basic"
			labelCol={{ span: 5 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			size="large"
			autoComplete="off"
		>
			<Form.Item
				name="username"
				rules={[{ required: true, message: '请输入用户名' }]}
			>
				<Input
					placeholder="用户名：admin / user"
					prefix={<IconFont type="icon-yonghu" />}
				/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[{ required: true, message: '请输入密码' }]}
			>
				<Input.Password
					autoComplete="new-password"
					placeholder="密码：123456"
					prefix={<IconFont type="icon-mima" />}
				/>
			</Form.Item>
			<Form.Item className="login-btn">
				<Button
					onClick={() => {
						form.resetFields()
					}}
					icon={<IconFont type="icon-zhongzhi-" />}
				>
					重置
				</Button>
				<Button
					type="primary"
					htmlType="submit"
					loading={loading}
					icon={<IconFont type="icon-yonghu" />}
				>
					登录
				</Button>
			</Form.Item>
		</Form>
	)
}

export default LoginForm
