
const Navbar = () => {

  return (
      <div>
    <div 
        style={{
        color: 'white',
        fontFamily: 'fantasy', 
        fontSize: '160%',
        textShadow: '1px 1px black', 
        marginBottom: '1%',
        marginTop: '1%',
        marginLeft: '3%'}}>
        Winter is coming !!
        </div>
    <nav className='navbar navbar-expand-md navbar-dark bg-dark text-center' style={{opacity: '.7'}}>  

        <div className='navbar-nav' style={{marginTop: '5%'}}>
          <h1 style={{marginLeft: '90%', color: 'white', fontSize: '50px', fontFamily: 'fantasy'}}>
          Game
          </h1>
          <h1 style={{marginLeft: '40%', color: 'white', fontSize: '50px', fontFamily: 'fantasy'}}>
          of
          </h1>
          <h1 style={{marginLeft: '40%', color: 'white', fontSize: '50px', fontFamily: 'fantasy'}}>
          Thrones 
          </h1>
        </div>

    </nav>
    </div>

  );
};

export default Navbar;