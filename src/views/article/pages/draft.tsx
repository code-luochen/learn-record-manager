import CommonTable from '@components/commonTable'
import React from 'react'

const Draft = () => {
	const COLUMN = [
		{
			title: '文章标题',
			dataIndex: 'title',
			key: 'title',
		},
		{
			title: '文章创建时间',
			dataIndex: 'publishTime',
			key: 'publishTime',
		},
		{
			title: '操作',
			key: 'action',
			render: () => {
				return (
					<div>
						<button>编辑</button>
						<button>删除</button>
					</div>
				)
			},
		},
	]

	return (
		<main>
			<CommonTable columns={COLUMN} params={{}} />
		</main>
	)
}

export default Draft
