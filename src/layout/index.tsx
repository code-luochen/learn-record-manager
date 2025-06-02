import { Card, Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.less'
import LayoutMenu from '@/layout/components/menu'
import { Content } from 'antd/es/layout/layout'
import { appStore } from '@/store'
import { observer } from 'mobx-react'
import LayoutHeader from './components/layoutHeader'

const LayoutIndex: React.FC = () => {
	const { initState } = appStore
	return (
		<main className={styles.container}>
			<Layout>
				<Sider
					width={220}
					trigger={null}
					collapsible
					collapsed={initState.collapsed}
					theme="dark"
				>
					<LayoutMenu />
				</Sider>
				<Layout>
					<LayoutHeader />
					<Content className={styles.content}>
						<Card className={styles.card}>
							<Outlet />
						</Card>
					</Content>
				</Layout>
			</Layout>
		</main>
	)
}

export default observer(LayoutIndex)
