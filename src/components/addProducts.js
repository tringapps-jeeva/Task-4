import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Productbuton from './productbuton';
  
const AddPhoneProducts = (props) => {
    console.log("render");
    const [product, setproduct] = useState("");
    const [price, setprice] = useState("");
    const [quantity, setquantity] = useState("");
    const [total, settotal] = useState("");
    const [data, setData] = useState([]);
    const addinput = () => {
        if (product === "" || price === "") {
            alert('add fields')
        }
        else {
            const newdata = { product: product, price: price, quantity: quantity, total: (price * quantity) }
            setData([...data, newdata])
            setproduct("");
            setprice("")
            setquantity("")
            settotal("")
        }
    }
    const removeinput = (index) => {
        data.splice(index, 1)
        setData([...data])
    }

    const sumbitdata = (e) => {
        toast.success("submited succesfully!",{autoClose:false});
        const records1 =JSON.parse(localStorage.getItem("productdetails"));
        if(records1!==null)
        {
            console.log(records1);
            localStorage.setItem("productdetails", JSON.stringify([...records1,...data]))
        }
        else
        {
            localStorage.setItem("productdetails", JSON.stringify(data))
        }
        console.log(records1);
        setData([]);
        window.location.reload();
    }
    
    const handleprice=(e)=>
    {
        const getvalue=e.target.value;
        setproduct(e.target.value)
        if(getvalue==='oppo')
        {
           const price1 = 20000
            setprice(price1)
        }
        if(getvalue==='realme')
        {
            const price1= 10000
            setprice(price1)
        }
        if(getvalue==='samsung')
        {
            const price1= 50
            setprice(price1)
        }
       
    }
    
    return (
        <>
            <div className='maincontainer'>
                {props.value?
                <div className='mobileconntainer' id='mobilecontainer'>
                    <div className='addinputs' id="addinputs">
                        <select value={product} onChange={(e) => {handleprice(e)}}>
                            <option value="">----product----</option>
                            <option>oppo</option>
                            <option>realme</option>
                            <option>samsung</option>
                        </select>
                        <input type="text" placeholder='price' value={price} disabled />
                        <input type="text" placeholder='Quantity' value={quantity} onChange={(e) => { setquantity(e.target.value) }} />
                        <input type="text" placeholder='Total price' value={price*quantity} onChange={(e) => { settotal(e.target.value) }} disabled/>
                        <button id='add' onClick={addinput}>+</button>
                    </div>
                    <div className='productshown' id="productshown">

                        {data.map((values, i) => {
                            return (
                                    <form key={i} >
                                        <input type="text" value={values.product} />
                                        <input type="text" value={values.price} />
                                        <input type="text" value={values.quantity} />
                                        <input type="text" value={values.total} />
                                        <input type="button" onClick={() => removeinput(i)} value="-" />
                                        <br />
                                    </form>
                            )
                        }
                        )}
                    </div>
                    <div>
                        <button id='sumbit' className='sumbit' onClick={sumbitdata} onSubmit={(e)=>{e.preventDefault()}}>SUBMIT</button>
                    </div>
                </div>
                : ''}
            </div>
            <ToastContainer />
        </>
    )
}

export default AddPhoneProducts
