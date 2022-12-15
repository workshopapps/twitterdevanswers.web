/* eslint-disable no-else-return */
import axios from 'axios';

const updateUser = async (userId, user) =>{
  const token =  localStorage.getItem('token');

  const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization':`Bearer ${token}`
  }
  try {
    const { data } = await axios.patch(
      ` https://api.devask.hng.tech/users/edit/${userId}`,
      (user),
      {
        headers,
      }
    );

    if (data.status_code && data.status_code === 400) {
      throw new Error('Unable to update user');
    }
    // Check the response data to ensure the user was successfully updated
    if (data.success && data.success === true) {
      return data;
    }  else{
      throw new Error('Unable to update user');
    }
  } catch (error) {
    // Return the error message from the API, if available
    return error?.response?.data?.detail || 'server error, please try again later';
  }
};

export default updateUser;
