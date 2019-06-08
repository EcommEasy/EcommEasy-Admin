// config used by dashboard client side only
module.exports = {
	// dashboard UI language
	language: process.env.LANGUAGE || 'en',
	apiBaseUrl: process.env.API_BASE_URL || 'http://165.22.79.116:3001/api/v1',
	assetsBaseURL: process.env.ASSETS_BASE_URL || 'http://165.22.79.116:3001',
	apiWebSocketUrl: process.env.API_WEB_SOCKET_URL || 'ws://165.22.79.116:3001',
	developerMode: process.env.DEVELOPER_MODE || true
};
