const APP_ENV = import.meta.env.VITE_APP_ENVIRONMENT || 'local';
let APP_HOST;

switch (APP_ENV) {
    case 'local':
        APP_HOST = import.meta.env.VITE_APP_HOST_LOCAL || 'http://localhost:3000';
        break;
    case 'prod':
        APP_HOST = import.meta.env.VITE_APP_HOST_PROD || 'https://medvault-mt5q.onrender.com';
        break;
    default:
        APP_HOST = import.meta.env.VITE_APP_HOST_DEFAULT || 'https://medvault-mt5q.onrender.com';
        break;
}

console.log('APP_ENV:', APP_ENV);
console.log('APP_HOST:', APP_HOST);

export default APP_HOST;