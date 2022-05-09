module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.json'
	],
	swDest: 'client/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};