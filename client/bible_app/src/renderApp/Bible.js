import  {Card,
  // Button
}  from 'react-bootstrap';
import {useState,useEffect} from 'react';
import axios from 'axios';
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
        <div className = 'App'>

{verses.map((el)=>{

    return(
        <Card key = {el.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Your Verse - 
              {el.book.name} {el.chapterId}:{el.verseId}
          </Card.Title>
          <Card.Text>
            <div>{el.verse}</div> 
          </Card.Text>
          
        </Card.Body>
      </Card>



    )
})}


      
        </div>
    )


}