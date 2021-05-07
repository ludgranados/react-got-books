

const BookCard = ({books, handleChange, searchTerm}) => {

    return (
      <div className=''>
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
              <div className='card mx-1 col-2' key={i}>

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
  }
  
  export default BookCard;