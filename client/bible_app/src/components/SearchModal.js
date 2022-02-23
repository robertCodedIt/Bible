import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  // MDBPopover,
  // MDBPopoverHeader,
  // MDBPopoverBody,
  MDBTooltip
} from 'mdb-react-ui-kit';

export default function SearchModal(props) {
  const [popoverModal, setPopoverModal] = useState(false);

  const toggleShow = () => setPopoverModal(!popoverModal);
 console.log(props)
  return (
   
    <>
      <MDBBtn onClick={toggleShow}>See Results</MDBBtn>

      <MDBModal tabIndex='-1' show={popoverModal} setShow={setPopoverModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle> <h5>Results from your search</h5></MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={()=>{
                toggleShow();
              }}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              

              {props.res.map((el)=>{
              let verse = el.verse;
              let temp = document.createElement('div');
              temp.innerHTML = verse
              let sanitized = temp.textContent || temp.innerText;

              return(
              <p key = {el.id}><MDBTooltip tag='a' wrapperProps={{ href: '#!' }} title={sanitized}>
                  {el.book.name} {el.chapterId}:{el.verseId}
                </MDBTooltip>{' '}</p>)
              })}
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}