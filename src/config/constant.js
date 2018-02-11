export const APP_NAME = process.env.npm_package_name || 'no name'
export const APP_VERSION = process.env.npm_package_version || 'x.x.x'
export const ENVIRONMENT = process.env.NODE_ENV || 'development'
export const PORT = (ENVIRONMENT !== 'test') ? process.env.API_PORT : ''
