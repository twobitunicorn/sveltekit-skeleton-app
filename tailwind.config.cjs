const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',

	theme: {
		extend: {}
	},
	content: [
		// Keep any existing values present and append the following:
		'./node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}'
	],

	plugins: [
		// Keep any existing plugins present and append the following:
		require('@brainandbones/skeleton/tailwind/theme.cjs'),
		require('@brainandbones/skeleton/tailwind/typography.cjs')
	]
};

module.exports = config;
