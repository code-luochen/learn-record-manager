import React from 'react'
import styles from './index.module.less'
import { Header } from 'antd/es/layout/layout'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { appStore } from '@/store'
import { observer } from 'mobx-react'
import Profile from '../profile'

const LayoutHeader: React.FC = () => {
	const { initState, setInitState } = appStore

	return (
		<Header className={styles.container}>
			<section className={styles.collapsed}>
				<section
					className={styles.collapsed_btn}
					onClick={() =>
						setInitState({ collapsed: !initState?.collapsed })
					}
				>
					{initState?.collapsed ?
						<MenuUnfoldOutlined />
					:	<MenuFoldOutlined />}
				</section>
			</section>
			<Profile />
		</Header>
	)
}

export default observer(LayoutHeader)
