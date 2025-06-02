import welcome from '@/assets/images/welcome01.png'
import styles from './index.module.less'

const Home = () => {
	return (
		<main className={styles.home}>
			<img src={welcome} alt="welcome" />
		</main>
	)
}

export default Home
