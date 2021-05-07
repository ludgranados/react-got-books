import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import instance from '../api/apiConfig';

const HomePage = () => {
    const [ books, setBooks ] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };
    
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

        <input
         type='text'
         className='form-control my-2'
         id='book-search'
         placeholder='Search for a certain book of the series...'
         value={searchTerm}
         onChange={handleChange}
        />

        <hr/>
      <div className='row col-12'>
        {books &&
          books.map((book, i) => {
            const cleanedDate = new Date(book.released).toDateString();
            const authors = book.authors.join(", ");

            return (
              <div className='card col-2' key={i}>

                <h2>Book Name: {book.name}</h2>
                <h3>Book # {i + 1}</h3>

                <div className="details">
                  <p>Authors: {authors}</p>
                  <p>Pages: {book.numberOfPages} pages</p>
                  <p>Country: {book.country}</p>
                  <p>Date: {cleanedDate}</p>
                </div>
              </div>
            );
          })}
      </div>


    </div>
    
    );
  };
  
  export default HomePage;