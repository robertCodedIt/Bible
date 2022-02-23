import axios from 'axios';
import React from 'react';
import {Button} from 'react-bootstrap';
import SearchModal from './SearchModal';


export default class Search extends React.Component{
constructor(){
    super();
    this.state = {
query:'',
result:[],
pressed:false
    }
}

render(){
    

    return(

        <>
        <input style = {{margin:'12px'}} value = {this.state.query}placeholder = "search the bible" onChange ={this.handleChange} />
        
        <Button style = {{margin:'12px',width:'auto'}} onClick = {()=>{
            this.sendApi()
            this.setState({pressed:true})
            this.state.query.length?this.setState({query:''}):alert('query has no length')
            }}>
            Search
        </Button  >
        {this.state.pressed?<SearchModal q = {this.state.query} res = {this.state.result} open = {this.state.pressed}/>:''}
        </>
    )
}
handleChange = (e)=>{
    this.setState({query: e.target.value});
}
async sendApi(){
   await axios.get(`http://localhost:3001/search/${this.state.query}`).then((res)=>{
       this.setState({result:res.data})
       console.log(this.state.result)
       
    //    this.props.results = this.state.result;
    }
       )
   .catch(err=>alert(err))
  
}

}