import axios from 'axios';

const fetchData = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
    
    return response;
};

export default fetchData;