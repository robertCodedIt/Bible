import React from 'react';
import axios from 'axios'
export default class Verse extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            searchTerm:'Forgiveness',
            bookName:"",
            chapter:0,
            verseNumber:0,
            verse:''
        }

    }
apiTry = async(term)=>{
    try{
         await axios.get(`http://localhost:3001/search/${term}`)
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
            <h6>{this.state.bookName} {this.state.chapter}:{this.state.verseNumber}</h6></>
        )
    }


}