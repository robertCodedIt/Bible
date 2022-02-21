import React from 'react';
import axios from 'axios'
import { Api_url } from './key/api_url';


export default class Verse extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            
            searchTerm:'faith',
            bookName:"",
            chapter:0,
            verseNumber:0,
            verse:''
        }

    }
   

apiTry = async(term)=>{
    try{
        // const url = process.env.REACT_APP_SERVER
       // TODO find out how to set the url string in react .env
       //
         await axios.get(`${Api_url}/search/${term}`)
         .then(res=>{this.setState({
             verseNumber:res.data[0].verseId,
             verse:res.data[0].verse,
             chapter:res.data[0].chapterId,
             bookName:res.data[0].book.name,

            })
         let verse = this.state.verse;
         var temp = document.createElement("div");
         temp.innerHTML = verse;
         var sanitized = temp.textContent || temp.innerText;
         this.setState({verse:sanitized})})
         ;
    }catch(err){console.log(err);}
   
}
   componentDidMount() {
this.apiTry(this.state.searchTerm)
    }

    render(){
        return(
            <>{this.state.verse}
            <span
            // block display
            style = {{display:'block',fontWeight:'bold'}}
            id = "verseSpan">{this.state.bookName} {this.state.chapter}:{this.state.verseNumber}</span>
            </>
        )
    }


}