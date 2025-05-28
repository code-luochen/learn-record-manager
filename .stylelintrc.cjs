module.exports = {
	// 从标准配置中继承规则
	extends: ['stylelint-config-standard'],

	// 规则配置
	rules: {
		'no-descending-specificity': null,
		'plugin/declaration-block-no-ignored-properties': true,
		'function-name-case': null,
	},
	plugins: ['stylelint-declaration-block-no-ignored-properties'],

	// 忽略检查的文件或文件夹
	ignoreFiles: [
		'node_modules/**/*',
		'build/**/*',
		'dist/**/*',
		'src/**/*.less',
	],
}
