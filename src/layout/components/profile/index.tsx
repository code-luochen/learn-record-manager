import { Avatar, Dropdown, Menu, Modal } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile: React.FC = () => {
	const navigate = useNavigate()

	// 退出登录
	const onHandleLogout = () => {
		Modal.confirm({
			title: '温馨提示 🧡',
			// icon: <ExclamationCircleOutlined />,
			content: '是否确认退出登录？',
			okText: '确认',
			cancelText: '取消',
			onOk: () => {
				// setToken('')
				// message.success('退出登录成功！')
				// navigate('/login')
			},
		})
	}
	const menu = (
		<Menu
			items={[
				{
					key: '1',
					label: <span className="dropdown-item">首页</span>,
					onClick: () => navigate('/home'),
				},
				{
					key: '2',
					label: <span className="dropdown-item">个人信息</span>,
					// onClick: () => infoRef.current!.showModal({ name: 11 }),
				},
				{
					key: '3',
					label: <span className="dropdown-item">修改密码</span>,
					// onClick: () => passRef.current!.showModal({ name: 11 }),
				},
				{
					type: 'divider',
				},
				{
					key: '4',
					label: <span className="dropdown-item">退出登录</span>,
					onClick: onHandleLogout,
				},
			]}
		></Menu>
	)
	return (
		<main>
			<Dropdown
				overlay={menu}
				placement="bottom"
				arrow
				trigger={['click']}
			>
				<Avatar size="large" src={''} />
			</Dropdown>
		</main>
	)
}

export default Profile
