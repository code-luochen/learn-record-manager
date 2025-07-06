import React from 'react'
import { appStore } from '@/store'
import CommonTable from '@components/commonTable'
import ArticleSearch from '../components/articleSearch'

const MyArticle = () => {
	const state = appStore.getState()
	console.log('🚀 ~ This is a result of console.log ~ ✨: state==?', state)

	const COLUMN = [
		{
			title: '文章标题',
			dataIndex: 'title',
			key: 'title',
		},
		{
			title: '文章内容',
			dataIndex: 'content',
			key: 'content',
		},
		{
			title: '文章标签',
			dataIndex: 'tags',
			key: 'tags',
		},
		{
			title: '文章分类',
			dataIndex: 'category',
			key: 'category',
		},
		{
			title: '文章发布时间',
			dataIndex: 'publishTime',
			key: 'publishTime',
		},
		{
			title: '文章更新时间',
			dataIndex: 'updateTime',
			key: 'updateTime',
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
			<ArticleSearch />
			<CommonTable columns={COLUMN} params={{}} />
		</main>
	)
}

export default MyArticle
