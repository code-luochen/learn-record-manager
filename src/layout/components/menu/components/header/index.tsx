import React from 'react'
import logoImage from '@/assets/images/logo.png'
import styles from './index.module.less'
import { observer } from 'mobx-react'
import { appStore } from '@/store'
import classNames from 'classnames'

const Header: React.FC = () => {
	const { initState } = appStore
	return (
		<main
			className={classNames(
				{ [styles.collapsed_container]: initState.collapsed },
				styles.container,
			)}
		>
			<section className={styles.logo_box}>
				<img className={styles.logo} src={logoImage} alt="logo" />
			</section>

			{!initState.collapsed && (
				<section className={styles.title_box}>
					<h1 className={styles.title}>React + Mobx + Vite</h1>
				</section>
			)}
		</main>
	)
}

export default observer(Header)
