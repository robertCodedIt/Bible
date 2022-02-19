import React from 'react';
import {
  MDBInput,
  MDBBtn,

  MDBValidation,
  
} from 'mdb-react-ui-kit';

export default function CommentBox() {
  return (
    <MDBValidation isValidated>
      <div className='mb-3 pb-1'>
        <MDBInput
          label='Comment'
          id='validationTextarea'
          textarea
          placeholder='comment if you like'
          required
          validation=''
          invalid
        />
      </div>
      <div><MDBInput
        type="textarea"
        label="Please Leave Your Name"
        rows="1"
        icon="user"
        required
    
      
       /></div>
 

   
      <div>
        <MDBBtn type='submit' disabled>
          Comment
        </MDBBtn>
      </div>
    </MDBValidation>
  );
}