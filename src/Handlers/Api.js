import axios from 'axios';
import { 
  BASE_URL, 
  GET_INDIVIDUAL_URL,
  UPDATE_INDIVIDUAL_URL,
  REFRESH_TOKEN,
  SIGN_UP_URL, 
  LOGIN_URL_URL, 
  LOGOUT_URL,
  GET_USER_URL,
  GET_SENSOR_DATA_URL,
  GET_PATIENTS_URL ,
  GET_SINGLE_PATIENT_URL
//   GET_ORGANIZATIONS_SUMMARY,
//   GET_ORGANIZATION,
//   UPDATE_ORGANIZATION,
} from './ApiConfig.js';

// Handler for API error
const handleApiError = (error) => {
  if (error.response && error.response.data) {
    console.error('API Error:', error.response.data);
    throw error.response.data;
  } else {
    console.error('API Error:', error.message);
    throw error;
  }
};

// Configure Axios
const api = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor to include the access token in headers
api.interceptors.request.use(
  async (config) => { // Cast config to any to bypass the type issues
    try {
      const token = await localStorage.getItem('accessToken');
      console.log(token);

      // Explicitly check if the token is neither null nor undefined
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error retrieving access token:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle refresh token logic
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config; // Cast to any to allow _retry property

    // Ensure originalRequest is defined before accessing its properties
    if (originalRequest && error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = await localStorage.getItem('refreshToken');

        // Explicitly check if the refresh token is neither null nor undefined
        if (refreshToken) {
          const response = await api.post(REFRESH_TOKEN, { refresh: refreshToken });

          if (response.status === 200) {
            // Store the new access token
            await localStorage.setItem('accessToken', response.data.access);

            // Update the Authorization header with the new access token
            if (originalRequest.headers) {
              originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`;
            }

            // Retry the original request with the new access token
            return api(originalRequest);
          }
          else {
            // If the refresh token is invalid or the response status is not 200
            await localStorage.removeItem('accessToken');
            await localStorage.removeItem('refreshToken');
          }
        }

        // If the refresh token is invalid or the response status is not 200
        await localStorage.removeItem('accessToken');
        await localStorage.removeItem('refreshToken');
        // Optionally, you might want to redirect to login page or handle logout here
        return Promise.reject(error); // Reject with the original error
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);

        // Remove invalid tokens
        await localStorage.removeItem('accessToken');
        await localStorage.removeItem('refreshToken');
        
        // Optionally, you might want to redirect to login page or handle logout here
        return Promise.reject(refreshError); // Reject with the refresh error
      }
    }

    return Promise.reject(error); // Reject with the original error if it's not a 401 or retry logic already failed
  }
);



// User Authentication Handlers
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(LOGIN_URL_URL, { email, password });
    const { access, refresh ,user} = response.data;
    await localStorage.setItem('accessToken', access);
    await localStorage.setItem('refreshToken', refresh);
    await localStorage.setItem('username', user.username );

    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const signUpUser = async (
  email,
  password1,
  password2,
  user_type,
  first_name, // Backend might expect "first_name"
  last_name,  // Backend might expect "last_name"
  location,
  gender,
  contact_number) => {
  try {
    const response = await axios.post(SIGN_UP_URL, {
        email,
        password1,
        password2,
        user_type,
        first_name, // Backend might expect "first_name"
        last_name,  // Backend might expect "last_name"
        location,
        gender,
        contact_number});
    const { access, refresh ,user} = response.data;
    await localStorage.setItem('accessToken', access);
    await localStorage.setItem('refreshToken', refresh);
    await localStorage.setItem('username', user.username );
    return response.data;
  } catch (error) {
    handleApiError(error );
  }
};
export const getUserDetails = async () => {
  try {
    const response = await api.get(GET_USER_URL);    
    return response.data;
  } catch (error) {
    handleApiError(error );
  }
};
export const getIndividual = async () => {
  try {
    const response = await api.get(GET_INDIVIDUAL_URL);    
    return response.data;
  } catch (error) {
    handleApiError(error );
  }
};
export const UpdateIndividual = async (formData) => {
  try {
    const response = await api.patch(UPDATE_INDIVIDUAL_URL,{formData});    
    return response.data;
  } catch (error) {
    handleApiError(error );
  }
};
export const logoutUser = async () => {
  try {
    const authToken = await localStorage.getItem('accessToken');
    if (!authToken) throw new Error('No auth token found');
    const response = await api.post(LOGOUT_URL);
    return response.data;
  } catch (error) {
    handleApiError(error );
  }
  finally {
    await localStorage.removeItem('accessToken');
    await localStorage.removeItem('refreshToken');
  }
};
export const GET_SENSOR_DATA = async () => {
  try {
    const response = await api.get(GET_SENSOR_DATA_URL);    
    return response.data;
  } catch (error) {
    handleApiError(error );
  }
};

export const GET_PATIENTS_DATA = async () => {
  try {
    const response = await api.get(GET_PATIENTS_URL);    
    return response.data;
  } catch (error) {
    handleApiError(error );
  }
};
export const GET_SINGLE_PATIENTS_DATA = async (id) => {
  try {
    const response = await api.get(GET_SINGLE_PATIENT_URL.replace('{id}',id.toString()));    
    return response.data;
  } catch (error) {
    handleApiError(error );
  }
};