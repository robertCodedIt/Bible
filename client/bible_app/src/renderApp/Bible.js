import BibleHeader from "../layout/BibleHeader";





const hitApi = ()=>{
    console.log('prop passed down')
}
// this functional component will render the app
export default function Bible() {
  return (
    <>
      <div className="App">
        <BibleHeader sendIt = {()=>{hitApi()}}/>
      </div>
    </>
  );
}
