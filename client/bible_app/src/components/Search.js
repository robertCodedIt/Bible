import axios from 'axios';
import React from 'react';
import {Button} from 'react-bootstrap';


export default class Search extends React.Component{
constructor(){
    super();
    this.state = {
query:'',
result:[],
    }
}

render(){
    

    return(

        <>
        <input style = {{margin:'12px'}} placeholder = "search the bible" onChange ={this.handleChange} />
        
        
        <Button style = {{margin:'12px',width:'auto'}} onClick = {()=>{
            this.sendApi()
            }}>
            Search
        </Button  >
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
       
       console.log(this.props)
    //    this.props.results = this.state.result;
    }
       )
   .catch(err=>console.error(err))
  
}

}