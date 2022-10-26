import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


const AddToysProducts = (props) => {
    console.log("render");
    const [product, setproduct] = useState("");
    const [price, setprice] = useState("");
    const [quantity, setquantity] = useState("");
    const [total, settotal] = useState("");
    const [data, setData] = useState([]);

    const addinput = () => {
        if (price === "") {
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
        console.log(data)
        data.splice(index, 1)
        setData([...data])
        console.log(data)
    }
    const sumbitdata = () => {
        toast.success("submitted successfully",{autoClose:false});
        setData([]);
        console.log("render");
        const records1 =JSON.parse(localStorage.getItem("toyproductsdetails"));
        if(records1!==null)
        {
            console.log(records1);
            localStorage.setItem("toyproductsdetails", JSON.stringify([...records1,...data]))
        }
        else{
        localStorage.setItem("toyproductsdetails", JSON.stringify(data))
        }
        setData([]);
        window.location.reload();

    }
    const handleprice=(e)=>
    {
        const getvalue=e.target.value;
        setproduct(e.target.value)
        console.log(getvalue)
        if(getvalue==='teddy')
        {
           const price1 = 600
            setprice(price1)
        }
        if(getvalue==='remotecar')
        {
            const price1= 1000
            setprice(price1)
        }
        if(getvalue==='ball')
        {
            const price1= 50
            setprice(price1)
        }
       
    }
    return (
        <>
        <div className='maincontainer'>
            {props.value?
            <div className='toycontainer' id='toycontainer'>
                <div className='addinputs1' id="addinputs1">
                    <select value={product} onChange={(e) => {handleprice(e)}}>
                        <option value="">----product----</option>
                        <option>teddy</option>
                        <option>remotecar</option>
                        <option>ball</option>
                    </select>
                    <input type="text" placeholder='price' value={price} disabled/>
                    <input type="text" placeholder='Quantity' value={quantity} onChange={(e) => { setquantity(e.target.value) }} />
                    <input type="text" placeholder='Total price' value={price*quantity} onChange={(e) => { settotal(e.target.value) }} disabled/>
                    <button id='add' onClick={addinput}>+</button>
                </div>
                <div className='productshown1' id="productshown1">

                    {data.map((values, i) => {
                        return (
                            <>
                                <form>
                                    <input type="text" value={values.product} />
                                    <input type="text" value={values.price} />
                                    <input type="text" value={values.quantity} />
                                    <input type="text" value={values.total} />
                                    <input type="button" onClick={() => removeinput(i)} value="-" />
                                    <br />
                                </form>
                            </>
                        )
                    }
                    )}
                </div>
                <div>
                    <button id='sumbit' className='sumbit' onClick={sumbitdata}>SUBMIT</button>
                </div>
            </div>
            :''}
            </div>
        </>
    )
}

export default AddToysProducts
