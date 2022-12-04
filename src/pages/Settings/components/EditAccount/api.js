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
            `https://pacific-peak-54505.herokuapp.com/users/edit/${userId}`,
                  (user), {
                 headers,
              });
        

        if (data.status_code && data.status_code === 400) {
            
             throw new Error("Unable to update user")
        }

      return data;
    } catch (error) {
       
       return     error?.response?.data?.detail ||
                'server error, please try again later'
     
    }
}


export default updateUser;