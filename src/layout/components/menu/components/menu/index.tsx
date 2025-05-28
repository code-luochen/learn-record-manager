import React, { useMemo } from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import IconFont from '@components/inconfont'

const MenuLayout: React.FC = () => {
	const navigator = useNavigate()

	const MenuList = useMemo(() => {
		return [
			{
				key: '/home',
				label: '首页',
				icon: <IconFont type="icon-home" />,
			},
			{
				key: '/static',
				label: '数据统计',
				icon: <IconFont type="icon-tongjijisuan" />,
			},
			{
				key: 'management',
				label: '文章管理',
				icon: <IconFont type="icon-wenzhangguanli" />,
				children: [
					{
						key: '/my_article',
						label: '我的文章',
						icon: <IconFont type="icon-wodewenzhang" />,
					},
					{
						key: '/category',
						label: '分类管理',
						icon: <IconFont type="icon-fenleiguanli" />,
					},
					{
						key: '/draft',
						label: '草稿箱',
						icon: <IconFont type="icon-caogaoxiang" />,
					},
				],
			},
			{
				key: '/recycle',
				label: '回收站',
				icon: <IconFont type="icon-huishouzhan" />,
			},
		]
	}, [])

	const onHandelMenu = (e: any) => {
		const { key } = e
		navigator(key)
	}

	return (
		<main>
			<Menu
				defaultSelectedKeys={['/home']}
				mode="inline"
				theme="dark"
				// inlineCollapsed={collapsed}
				items={MenuList}
				onClick={onHandelMenu}
			/>
		</main>
	)
}

export default MenuLayout
