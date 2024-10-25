import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import react from 'eslint-plugin-react'

export default [
	{
		ignores      : ['dist'],
		extends      : [
			'plugin:@eslint/js/recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:@typescript-eslint/recommended-type-checked',
			'plugin:@typescript-eslint/stylistic-type-checked',
			'plugin:react/recommended',
			'plugin:react/jsx-runtime',
			'plugin:react-hooks/recommended',
			'plugin:tailwind/recommended'
		],
		files        : ['**/*.{ts,tsx}'],
		parser       : '@typescript-eslint/parser',
		parserOptions: {
			ecmaVersion    : 'latest',
			sourceType     : 'module',
			project        : ['tsconfig.json', 'tsconfig.node.json'],
			globals        : globals.browser,
			tsconfigRootDir: __dirname
		},
		plugins      : {
			'react-hooks'       : reactHooks,
			'react-refresh'     : reactRefresh,
			'@typescript-eslint': typescriptEslint,
			'react'             : react
		},
		rules        : {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true }
			],
			'@typescript-eslint/no-unsafe-call'   : 'off',
			'@typescript-eslint/no-unsafe-assignment'   : 'off'
		},
		settings: {
			react: {
				version: 'detect'
			}
		}
	}
]