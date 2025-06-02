import { Table } from 'antd'
import React, { useEffect } from 'react'
import { useRequest, useSetState } from 'ahooks'

export interface ICommonTableProps {
	columns: any[]
	paginationConfig?: Record<string, any>
	params: Record<string, any>
	requestReq: (params: Record<string, any>) => Promise<any>
}

const CommonTable: React.FC<ICommonTableProps> = ({
	columns,
	paginationConfig,
	requestReq,
	params,
}) => {
	// 定义查询参数
	const [queryParams, setQueryParams] = useSetState<typeof params>(params)

	// 获取数据查询
	const request = useRequest(params => requestReq(params), {
		manual: true,
	})

	// 劫持请求参数
	useEffect(() => {
		setQueryParams(params)
	}, [params])

	useEffect(() => {
		request.run(queryParams)
	}, [queryParams])

	return (
		<main>
			<Table
				loading={request?.loading}
				columns={columns ?? []}
				dataSource={request?.data ?? []}
				pagination={{
					total: request?.data?.total ?? 90,
					showQuickJumper: true,
					showSizeChanger: true,
					pageSizeOptions: ['10', '20', '30', '40', '50'],
					position: ['bottomCenter'],
					onChange: (page, pageSize) => {
						setQueryParams({
							page,
							pageSize,
						})
					},
					...paginationConfig,
				}}
			/>
		</main>
	)
}

export default CommonTable
