import React, { Suspense } from 'react'
import { Spin } from 'antd'

const LazyLoad = (
	Component: React.LazyExoticComponent<any>,
): React.ReactNode => {
	return (
		<Suspense
			fallback={
				<Spin
					size="large"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100%',
					}}
				/>
			}
		>
			<Component />
		</Suspense>
	)
}

export default LazyLoad
