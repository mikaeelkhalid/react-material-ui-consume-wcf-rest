import axios from 'axios';
// import axiosApi from '../middleware/Axios';
// const apiUrl = 'http://localhost:5000/customers';

const wcfURL = 'http://localhost:58629/CustomerService.svc';

// export const getCustomers = async () => {
//   return await axios.get(`${apiUrl}`);
// };

// export const getCustomerById = async (id: any) => {
//   return await axios.get(`${apiUrl}/${id}`);
// };

// export const deleteCustomer = async (id: any) => {
//   return await axios.delete(`${apiUrl}/${id}`);
// };

// export const editCustomer = async (id: any, customer: any) => {
//   return await axios.put(`${apiUrl}/${id}`, customer);
// };

export const getCustomers = async () => {
  return await axios.get(`${wcfURL}/GetAllCustomer`);
};

export const getCustomerById = async (id: any) => {
  return await axios.get(`${wcfURL}/GetCustomerById/${id}`);
};

export const deleteCustomer = async (id: any) => {
  return await axios.delete(`${wcfURL}/DeleteCustomer/${id}`);
};

export const editCustomer = async (customer: any) => {
  return await axios.put(`${wcfURL}/UpdateCustomer`, customer);
};
