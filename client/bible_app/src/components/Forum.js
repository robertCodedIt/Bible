
import React from 'react';
// import ForumContent from './ForumContent'
// import {
//   MDBNavbar,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarToggler,
//   MDBNavbarLink,
//   MDBContainer,
//   MDBIcon
// } from 'mdb-react-ui-kit';

export default function Forum() {
  return (
      <>

    <header>
      

      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3' style={{margin:'1rem'}}>Welcome to the Forum</h1>
              <h5 className='mb-4' >See what others think!</h5>
              
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* <ForumContent/> */}
    </>
  );
}