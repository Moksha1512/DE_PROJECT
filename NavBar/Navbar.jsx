import React from 'react';
import Logo from './../Svg/Logo'
import Search from './../Svg/Search'


function Navbar({setQuery,setIsClicked}) {
  const [type,setType] = React.useState('0')
  const Typing = (e) => setType(e.target.value)

  return (
    <div style={{marginLeft:"75px",marginRight:"75px"}}>
        <div className="d-flex justify-content-between align-items-center">
          <div
            style={{
              cursor:'pointer'
            }}
          >
            <Logo />
          </div>
          <div 
            className='d-flex justify-content-between align-items-center' 
            style={{width:'50%'}} 
            onClick={() => {setQuery(type);setIsClicked(e => e+1)}}
          >
            <input
              type='text'
              className={`form-control`}
              placeholder='Search'
              style={{
                marginRight: '10px',
              }}
              onChange={Typing}
            />
            <div 
                style={{
                  cursor:'pointer'
                }}
            >
                <Search />
            </div>
          </div>
          <div>
        </div>
      </div>  
    
    </div>
  );
}

export default Navbar;
