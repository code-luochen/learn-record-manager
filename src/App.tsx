import { ConfigProvider } from 'antd'
import './App.css'
import Router from './routers/index'
import { HashRouter } from 'react-router-dom'
import zhCN from 'antd/lib/locale/zh_CN'

function App() {
	return (
		<HashRouter>
			<ConfigProvider locale={zhCN}>
				<Router />
			</ConfigProvider>
		</HashRouter>
	)
}

export default App
