export const API_BASE_URL = "https://roomio.heuristix.net/api/v1";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const LOGIN = getApiUrl('/auth/login');
export const SIGNUP = getApiUrl('/auth/signup');