import React, {useState} from 'react';
import {
  MDBInput,
  MDBBtn,

  MDBValidation,
  
} from 'mdb-react-ui-kit';

export default function CommentBox() {

  const [name,setName] = useState('')
  const [comment,setComment] = useState('')

  const handleSubmit = (event)=>{
    event.preventDefault()
    alert(`${name} submitted a comment successfully`)
setName('')
setComment('')
  }
  const handleCommentChange = (e)=>{
    setComment(e.target.value)
    
  }
  const handleNameChange = (e)=>{
    setName(e.target.value)
    
  }
  return (
    <MDBValidation isValidated>
      <div className='mb-3 pb-1'>
        <MDBInput
          label='Comment'
          value = {comment}
          id='validationTextarea'
          onChange = {
            handleCommentChange
          }
          textarea
          placeholder='comment if you like'
          required
          validation=''
          invalid
        />
      </div>
      <div><MDBInput
        type="textarea"
        onChange = {
          handleNameChange
        }
        label="Please Leave Your Name"
        rows="1"
        value = {name}
        icon="user"
        required
    
      
       /></div>
 

   
      <div>
        <MDBBtn type='submit' onClick = {
handleSubmit
        }>
          Comment
        </MDBBtn>
      </div>
    </MDBValidation>
  );
}