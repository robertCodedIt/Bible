
import React from 'react';
import ForumComment from './ForumComment'
export default function Forum() {
  return (
      <>

    <header style = {{marginBottom:'1rem'}}>
      

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
    <div style={{display:'flex',flex:1}}>
      <ForumComment title = "Joshua"/>
      <ForumComment title = "Maria"/>
      <ForumComment title = "Robert"/>
      <ForumComment title = "TJ"/>
      <ForumComment title = "Anon User"/>
 
      
      </div>

    {/* <ForumContent/> */}
    </>
  );
}