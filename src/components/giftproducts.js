import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Addgiftproducts = (props) => {
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
        console.log(data)
        data.splice(index, 1)
        setData([...data])
        console.log(data)
    }
    const sumbitdata = () => {
    toast.success("successfully submitted",{autoClose:false});
     const records1 =JSON.parse(localStorage.getItem("giftproductsdetails"));
        if(records1!==null)
        {
            console.log(records1);
            localStorage.setItem("giftproductsdetails", JSON.stringify([...records1,...data]))
        }
        else{
        localStorage.setItem("giftproductsdetails", JSON.stringify(data))
        }
        setData([]);
        window.location.reload();

    }
    
    const handleprice = (e) => {
        const getvalue = e.target.value;
        setproduct(e.target.value)
        console.log(getvalue)
        if (getvalue === 'keychain') {
            const price1 = 20
            setprice(price1)
        }
        if (getvalue === 'lamp') {
            const price1 = 100
            setprice(price1)
        }
        if (getvalue === 'wallclock') {
            const price1 = 500
            setprice(price1)
        }

    }

    return (
        <>
            <div className='maincontainer'>
                {props.value?
                <div className='giftcontainer' id='giftcontainer'>
                    <div className='addinputs2' id="addinputs2">
                        <select value={product} onChange={(e) => { handleprice(e) }}>
                            <option value="">----product----</option>
                            <option>keychain</option>
                            <option>lamp</option>
                            <option>wallclock</option>
                        </select>
                        <input type="text" placeholder='price' value={price} onChange={(e) => { setprice(e.target.value) }} disabled/>
                        <input type="text" placeholder='Quantity' value={quantity} onChange={(e) => { setquantity(e.target.value) }} />
                        <input type="text" placeholder='Total price' value={price * quantity} onChange={(e) => { settotal(e.target.value) }} disabled />
                        <button id='add' onClick={addinput}>+</button>
                    </div>
                    <div className='productshown2' id="productshown2">

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

export default Addgiftproducts
