import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import Verse from '../components/Verse'
export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Connect and Contribute!</span>
        </div>

        <div>
          <a href='https://www.facebook.com/Open-Bible-Forum-101589152466769' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
        
          <a href='https://github.com/robertCodedIt/Bible' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>OPn Bible Forum
              </h6>
              <p>
         <Verse/>
              </p>
            </div>

            

           

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> Memphis, TN 38104, US
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                maint@openbibleforum.org
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 1 901 223 8843
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 1 901 223 8921
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://github.com/robertCodedIt/Bible'>
         Open Bible Forum
        </a>
      </div>
    </MDBFooter>
  );
}