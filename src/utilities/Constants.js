const API_BASE_URL_DEVELOPMENT = 'https://localhost:7186';

const ENDPOINTS = {
    GET_ALL_EMPLOYEE: 'Employee',
}

const development = {
    API_URL_GET_ALL_USERS: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_ALL_EMPLOYEE}`,
}

const Constants = development;

export default Constants;