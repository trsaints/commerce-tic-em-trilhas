import reactHooks from '@eslint/js'
import globals from 'globals'
import reactRefresh from 'react-refresh'

export default [
	{
		ignores        : ['dist'],
		extends        : [
			'plugin:@eslint/js/recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:@typescript-eslint/recommended-type-checked',
			'plugin:@typescript-eslint/stylistic-type-checked',
			'plugin:react/recommended',
			'plugin:react/jsx-runtime',
			'plugin:react-hooks/recommended'
		],
		files          : ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			project: ['tsconfig.json', 'tsconfig.node.json'],
			globals    : globals.browser
		},
		plugins        : {
			'react-hooks'  : reactHooks,
			'react-refresh': reactRefresh
		},
		rules          : {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true }
			]
		}
	}
]