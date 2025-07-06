import React from 'react'
import { Button, Form, Input } from 'antd'

const ArticleSearch = () => {
	const [form] = Form.useForm()
	return (
		<Form
			// {...formItemLayout}
			form={form}
			variant="filled"
			style={{ maxWidth: 600 }}
			initialValues={{ variant: 'filled' }}
		>
			<Form.Item
				label="Input"
				name="Input"
				rules={[{ required: true, message: 'Please input!' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 6, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}

export default ArticleSearch
