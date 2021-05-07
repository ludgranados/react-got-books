import React, { useEffect } from 'react';
import axios from 'axios';
// import instance from '../api/apiConfig';
import BookCard from '../components/BookCard';

const HomePage = () => {
    const [ books, setBooks ] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    // const handlesubmit = e => {
    //     e.preventDefault();
    //     console.log(handleSubmit);

    // };
    
    useEffect(() => {
        const fetchData = async () => {
            // const response = await axios.get(instance);
            const response = await axios.get("https://www.anapioficeandfire.com/api/books");
            console.log(response.data);
            setBooks(response.data);
            searchTerm === '' ? setBooks(response.data) : setBooks(fb);

        };
        fetchData();
        console.log(searchTerm);

        const fb = books.filter(b => {
            return (
                b.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            );
        });
    }, [searchTerm]);

    return (
      <div className='container my-4'>
          
        <h1 style={{textShadow: '1px 1px white'}}>Game of Thrones Book Series list!!</h1>
        <button 
        className='btn btn-block btn-dark' 
        // onClick={handleSubmit}
        >
        Search
        </button>

       <BookCard books={books} searchTerm={searchTerm} handleChange={handleChange}  />


    </div>
    
    );
  };
  
  export default HomePage;