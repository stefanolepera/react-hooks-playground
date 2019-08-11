import axios from 'axios';

const fetchData = async (userId) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    return response;
};

export default fetchData;