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
	callApi()
  setPhoto()
},[]) 

async function setPhoto(){
   await axios.get("https://picsum.photos/500").then((res)=>{
placeImage(res.config.url)
  }).catch(err=>console.err(err))

}
    return(
        <div >
        <div style={{display:'grid', placeItems:'center'}}> <h2>Welcome To Your Verse</h2>
      <h3>Your Bible Study Needs Here</h3>    
       <Verse/>
       </div>
      
 
      <hr/>
{verses.map((el)=>{

    return(
      <div key = {el.id}>

        <h2>Your Verse</h2>
        <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
              {el.book.name} {el.chapterId}:{el.verseId}
          </Card.Title>
          <Card.Text>
            <Verse/>
          </Card.Text>
          <CommentBox/>
        </Card.Body>
      </Card>
</div>


    )
})}


      
        </div>
    )


}