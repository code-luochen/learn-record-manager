import CommonTable from '@components/commonTable'
import React from 'react'

const Category = () => {
	const COLUMN = [
		{
			title: '分类名称',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: '分类描述',
			dataIndex: 'description',
			key: 'description',
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

export default Category
