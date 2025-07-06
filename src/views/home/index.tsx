import welcome from '@/assets/images/welcome01.png'
import styles from './index.module.less'
import React from 'react'

const Home: React.FC = () => {
	return (
		<main className={styles.home}>
			<img src={welcome} alt="welcome" />
		</main>
	)
}

export default Home
