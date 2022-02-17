import axios from 'axios';
import React from 'react';
import {Button} from 'react-bootstrap';


export default class Search extends React.Component{
constructor(props){
    super(props);
    this.state = {
query:'',
result:[],
    }
}
render(){
    return(

        <>
        <input placeholder = "search the bible" onChange ={this.handleChange} /
        
        >
        <Button onClick = {()=>{
            this.sendApi()
            }}>
            Search
        </Button >
        </>
    )
}
handleChange = (e)=>{
    this.setState({query: e.target.value})
}
async sendApi(){
   await axios.get(`http://localhost:3001/search/${this.state.query}`).then((res)=>{
       this.setState({result:res.data})
       console.log(this.state.result)
       this.setState({query:" "})
    }
       )
   .catch(err=>console.error(err))
}

}