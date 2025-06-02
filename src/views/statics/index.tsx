import { Tabs } from 'antd'
import Pie from './components/pie'
import Curve from './components/curve'
import BookSum from './images/book-sum.png'
import AddPerson from './images/add_person.png'
import AddTeam from './images/add_team.png'
import Today from './images/today.png'
import BookSum1 from './images/book_sum.png'
import styles from './index.module.less'
import classNames from 'classnames'

const Statics = () => {
	return (
		<main className={styles.container}>
			<article className={styles.dataVisualize}>
				<header className={styles.title}>数据可视化</header>
				<section className={styles.item}>
					{/* 左侧区域 */}
					<section className={styles.left}>
						<span className={styles.left_title}>访问总数</span>
						<div className={styles.img_box}>
							<img src={BookSum} alt="" />
						</div>
						<span className={styles.left_number}>848.132w</span>
					</section>

					<section className={styles.middle}>
						<section
							className={classNames(
								styles.traffic_box,
								styles.traffic_1,
							)}
						>
							<section className={styles.traffic_img}>
								<img src={AddPerson} alt="" />
							</section>
							<span className={styles.item_value}>2222</span>
							<span className={styles.traffic_name}>
								Gitee 访问量
							</span>
						</section>

						<section
							className={classNames(
								styles.traffic_box,
								styles.traffic_2,
							)}
						>
							<section className={styles.traffic_img}>
								<img src={AddTeam} alt="" />
							</section>
							<span className={styles.item_value}>2222</span>
							<span className={styles.traffic_name}>
								Gitee 访问量
							</span>
						</section>

						<section
							className={classNames(
								styles.traffic_box,
								styles.traffic_3,
							)}
						>
							<section className={styles.traffic_img}>
								<img src={Today} alt="" />
							</section>
							<span className={styles.item_value}>2222</span>
							<span className={styles.traffic_name}>
								Gitee 访问量
							</span>
						</section>

						<section
							className={classNames(
								styles.traffic_box,
								styles.traffic_4,
							)}
						>
							<section className={styles.traffic_img}>
								<img src={BookSum1} alt="" />
							</section>
							<span className={styles.item_value}>2222</span>
							<span className={styles.traffic_name}>
								Gitee 访问量
							</span>
						</section>
					</section>
					{/* 右侧区域 */}
					<section className={styles.right}>
						<section className={styles.echarts_title}>
							Gitee / GitHub 访问量占比
						</section>
						<section className={styles.book_echarts}>
							<Pie />
						</section>
					</section>
				</section>
			</article>
		</main>
	)
}

export default Statics
