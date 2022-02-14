import axios from 'axios';
import { useState } from 'react'
export default function Books (){
const [oldTestamentBooks,setOldTestamentBooks] = useState([])
const [newTestamentBooks,setNewTestamentBooks] = useState([])
const getBooks = async()=>{
    const res = await axios.get('http://localhost:3001')
    setOldTestamentBooks(res.data.map((el)=>{
    if(el.testament === 'OT'){
       return <h6 key = {el.id}>{el.name}</h6>
    }
  }))
    setNewTestamentBooks(res.data.map((el)=>{
    if(el.testament === 'NT'){
       return <h6 key = {el.id}>{el.name}</h6>
    }
  }))
}
if(oldTestamentBooks.length === 0 || newTestamentBooks.length === 0){
    getBooks()
}

    return(
    <>
    
        <div><h1>Old Testament</h1>
        {oldTestamentBooks}
        </div>
        <div><h1>New Testament</h1>
        {newTestamentBooks}
        </div>
    
    </>)
}