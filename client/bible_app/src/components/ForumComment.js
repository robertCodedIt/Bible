import React from 'react';
import { MDBCard,MDBIcon, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter } from 'mdb-react-ui-kit';
// import axios from 'axios'
// import {Api_url} from './key/Api_url'
import Verse from './Verse'
export default class ForumComment extends React.Component  {
    constructor(props) {
      super(props)
    
      this.state = {
         upvote:0,
         downvote:0,
         likes:0,
         scripture:''
      }
    }

    render(){
      // this.hitApi()
  return (
    <MDBCard style ={{margin:'1rem',width:'20%'}} alignment='left'>
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{this.props.title}</MDBCardTitle>
        <MDBCardText><Verse/></MDBCardText>

      </MDBCardBody>
      <MDBCardFooter style = {{display:'flex',flex:1}}>
        {/* <h6>2 Days Ago</h6> */}
        <div style = {{margin:'1rem'}}>
          <div><MDBIcon style={{cursor:'pointer'}} far icon="heart" onClick = {()=>{
            alert('you liked this')
        }} />
        <MDBIcon style={{cursor:'pointer'}} onClick = {()=>{
            alert('you commented on this')
        }} far icon="comment" /></div>
      <div><MDBIcon style={{cursor:'pointer'}} onClick = {()=>{
            alert('you upvoted this')
        }}  fas icon="angle-up" /></div>
      <div><MDBIcon style={{cursor:'pointer'}} onClick = {()=>{
            alert('you downvoted this')
        }}fas icon="angle-down" />

</div></div>
        

      </MDBCardFooter>
    </MDBCard>
  )}
}