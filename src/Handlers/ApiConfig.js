const BASE_URL = 'http://192.168.89.200';

export const GET_INDIVIDUAL_URL = `${BASE_URL}/individuals/`;
export const UPDATE_INDIVIDUAL_URL = `${BASE_URL}/individuals/pk/`;


export const SIGN_UP_URL = `${BASE_URL}/register/`;
export const REFRESH_TOKEN = `${BASE_URL}/token/refresh/`;
export const LOGIN_URL_URL = `${BASE_URL}/login/`;
export const LOGOUT_URL = `${BASE_URL}/logout/`;
export const GET_USER_URL = `${BASE_URL}/users/pk/`;
// sensoexport const GET_USER_URL = `${BASE_URL}/users/pk/`;
export const  GET_SENSOR_DATA_URL = `${BASE_URL}/sensordata/`;
export const  GET_PATIENTS_URL = `${BASE_URL}/Patients/`;
export const  GET_SINGLE_PATIENT_URL = `${BASE_URL}/sensordata/?patient_id={id}`;



// Products APIs
// export const GET_ORGANIZATIONS_SUMMARY = `${BASE_URL}/organizations/summary/`;
// export const GET_ORGANIZATION = `${BASE_URL}/organizations/`;
// export const UPDATE_ORGANIZATION = `${BASE_URL}/organizations/pk/`;


export{BASE_URL}