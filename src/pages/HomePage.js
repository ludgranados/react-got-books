import { useState, useEffect } from 'react';
import axios from 'axios';
// import instance from '../api/apiConfig';

const HomePage = () => {

    const [ books, setBooks ] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            // const response = await axios.get(instance);
            const response = await axios.get("https://www.anapioficeandfire.com/api/books");
            console.log(response.data);
            setBooks(response.data);
        };
        fetchData();
    }, [setBooks]);

    return (
      <div className='row text-center'>
        <div className='col'>
        Game of Thrones Book Series
        </div>
      </div>
    );
  };
  
  export default HomePage;