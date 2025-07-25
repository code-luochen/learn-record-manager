import { useState, useImperativeHandle, Ref } from 'react'
import { Modal, message } from 'antd'

interface Props {
	passRef: Ref<{ showModal: (params: any) => void }>
}

const PasswordModal = (props: Props) => {
	const [isModalVisible, setIsModalVisible] = useState(false)

	useImperativeHandle(props.passRef, () => ({
		showModal,
	}))

	const showModal = (params: { name: number }) => {
		console.log(params)
		setIsModalVisible(true)
	}

	const handleOk = () => {
		setIsModalVisible(false)
		message.success('修改密码成功 🎉🎉🎉')
	}

	const handleCancel = () => {
		setIsModalVisible(false)
	}
	return (
		<Modal
			title="修改密码"
			open={isModalVisible}
			onOk={handleOk}
			onCancel={handleCancel}
			destroyOnHidden={true}
		>
			<p>Some Password...</p>
			<p>Some Password...</p>
			<p>Some Password...</p>
		</Modal>
	)
}
export default PasswordModal
