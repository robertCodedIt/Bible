import  {Card,
  // Button
}  from 'react-bootstrap';
import Verse from '../components/Verse.js'
import {useState,useEffect} from 'react';
import axios from 'axios';
import CommentBox from '../components/CommentBox';
// import {useState} from 'react'
export default function Bible(props){
const [verses,setVerses] = useState([]);
const [image,placeImage] = useState('')


const callApi = async()=>{
    await axios.get(`http://localhost:3001/search/christ`)
    .then((response)=>{setVerses(response.data)
       console.log(verses)})
    .catch(err=>console.log(err))
}
useEffect(()=>{
  try{
    	callApi();
  setPhoto();
  }catch(err){
    console.error(err)
  }

},[]) 

async function setPhoto(){
   await axios.get("https://picsum.photos/500").then((res)=>{
placeImage(res.config.url)
  }).catch(err=>console.err(err))

}
    return(
        <div >
        <div style={{display:'grid', placeItems:'center'}}> <h2>Welcome To The Open Bible Forum</h2>
      <h4>Read And Discuss the Word</h4>    
       <Verse/>
       </div>
      
 
      <hr/>
      <div style = {{display:'flex', flex:1,justifyContent: 'center'}}>
      <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
     For You
          </Card.Title>
          <Card.Text>
            <Verse/>
          </Card.Text>
          <CommentBox/>
        </Card.Body>
      </Card>
</div>

      
        </div>
    )


}