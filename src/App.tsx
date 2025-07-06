import { ConfigProvider } from 'antd'
import './App.css'
import Router from './routers/index'
import { HashRouter } from 'react-router-dom'
import zhCN from 'antd/lib/locale/zh_CN'
import AuthRoute from './routers/utils/authRoute'

function App() {
	return (
		<HashRouter>
			<ConfigProvider locale={zhCN}>
				<AuthRoute>
					<Router />
				</AuthRoute>
			</ConfigProvider>
		</HashRouter>
	)
}

export default App
