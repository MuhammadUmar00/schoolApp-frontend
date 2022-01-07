const localIpv4 = "192.168.2.103";

const LOCAL_DEV_PORT = 7000;

const isDevelopmentEnv = true;
// process.env.NODE_ENV === 'development'

export const BASE_URL = `${isDevelopmentEnv ? `http://${localIpv4}:${LOCAL_DEV_PORT}/education.com/backend/api/v1` : `https://pb-pages.herokuapp.com/api/v1`}`;