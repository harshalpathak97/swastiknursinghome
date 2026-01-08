const API_URL = import.meta.env.VITE_API_URL || '/api';

const getAuthToken = () => {
  return localStorage.getItem('token');
};

const apiRequest = async (endpoint, options = {}) => {
  const token = getAuthToken();
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  if (options.body && typeof options.body === 'object') {
    config.body = JSON.stringify(options.body);
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Request failed');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const authAPI = {
  register: (userData) => apiRequest('/auth/register', {
    method: 'POST',
    body: userData,
  }),

  login: (email, password) => apiRequest('/auth/login', {
    method: 'POST',
    body: { email, password },
  }),

  verify: () => apiRequest('/auth/verify', {
    method: 'GET',
  }),
};

export const appointmentAPI = {
  create: (appointmentData) => apiRequest('/appointments/create', {
    method: 'POST',
    body: appointmentData,
  }),

  list: () => apiRequest('/appointments/list', {
    method: 'GET',
  }),

  get: (id) => apiRequest(`/appointments/${id}`, {
    method: 'GET',
  }),

  update: (id, updateData) => apiRequest(`/appointments/${id}`, {
    method: 'PUT',
    body: updateData,
  }),

  cancel: (id) => apiRequest(`/appointments/${id}`, {
    method: 'DELETE',
  }),
};

export const userAPI = {
  getProfile: () => apiRequest('/users/profile', {
    method: 'GET',
  }),

  updateProfile: (userData) => apiRequest('/users/profile', {
    method: 'PUT',
    body: userData,
  }),
};

export const paymentAPI = {
  createOrder: (appointmentId, amount) => apiRequest('/payment/create-order', {
    method: 'POST',
    body: { appointmentId, amount },
  }),

  verify: (orderId, paymentId, signature) => apiRequest('/payment/verify', {
    method: 'POST',
    body: { orderId, paymentId, signature },
  }),
};






