import React from 'react'
import Header from './components/header'
import styles from './index.module.less'
import Menu from './components/menu'

const LayoutMenu: React.FC = () => {
	return (
		<main className={styles.container}>
			<Header />
			<Menu />
		</main>
	)
}

export default LayoutMenu
