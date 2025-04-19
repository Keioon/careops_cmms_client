// const API_BASE_URL_DEVELOPMENT = 'https://localhost:7186';
const API_BASE_URL_DEVELOPMENT = 'http://37.233.98.57:5000';

// const API_BASE_URL_PRODUCTION = 'http://37.233.98.57:5000';

const ENDPOINTS = {
    GET_ALL_EMPLOYEE: 'Employee',
    EMPLOYEE_LOGIN: 'Employee/Login',
}

const development = {
    API_URL_GET_ALL_USERS: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_ALL_EMPLOYEE}`,
    API_URL_EMPLOYEE_LOGIN: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.EMPLOYEE_LOGIN}`,

    SigningKey: 'Lgwkwc9R8gWtXx7wBxi9B3WwQK8n8SGa',
}

const Constants = development;

export default Constants;