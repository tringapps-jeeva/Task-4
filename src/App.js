import { useState } from 'react';
import './App.css';
import  Productbutton from './components/productbuton'

function App() {
  const localtoys = JSON.parse(localStorage.getItem("toyproductsdetails"));
  const localmobile = JSON.parse(localStorage.getItem("productdetails"));
  const localgift = JSON.parse(localStorage.getItem("giftproductsdetails"));
  const [toys,settoys]=useState(localtoys)
  const [mobile,setmobile]=useState(localmobile)
  const [gift,setgift]=useState(localgift)
  return(
    <>
    <Productbutton toys={toys} mobile={mobile} gift = {gift} />
    </>
  );
}
export default App;


