import React from 'react'
import Card from './card';
import { useState } from 'react';
import AddPhoneProducts from './addProducts';
import AddToysProducts from './addToysProducts';
import Addgiftproducts from './giftproducts'


const Productbuton = ({ mobile, gift, toys }) => {
  const [Mobileconntainer, setmobilecontainer] = useState(false)
  const [toycontainer, settoycontainer] = useState(false)
  const [giftcontainer, setgiftcontainer] = useState(false)


  const displaymobile = () => {
    setmobilecontainer(true)
    settoycontainer(false)
    setgiftcontainer(false)
  }
  const displaytoy = () => {
    settoycontainer(true)
    setgiftcontainer(false)
    setmobilecontainer(false)
  }
  const displaygift = () => {
    setgiftcontainer(true)
    setmobilecontainer(false)
    settoycontainer(false)
  }

  return (
    <>
      <div className='buttoncontainer'>
        <div className='productsbutton'>
          <table>
            <thead>
              <tr>
                <th><button className='mobile btn' onClick={displaymobile}>MOBILE</button></th>
                <th><button className='toy btn' onClick={displaytoy}>TOYS</button></th>
                <th><button className='gift btn' onClick={displaygift}>GIFTS</button></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {
                    mobile !== null ? mobile.map((ele, index) => (
                      <Card key={index} product={ele.product} quantity={ele.quantity} price={ele.price} total={ele.total} />
                    )) : null
                  }
                </td>

                <td>
                  {
                    toys !== null ? toys.map((ele, index) => (
                      <Card key={index} product={ele.product} quantity={ele.quantity} price={ele.price} total={ele.total} />
                    )) : null
                  }
                </td>
                <td>
                  {
                    gift !== null ? gift.map((ele, index) => (
                      <Card key={index} product={ele.product} quantity={ele.quantity} price={ele.price} total={ele.total} />
                    )) : null
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <AddPhoneProducts value={Mobileconntainer} />
      <AddToysProducts value={toycontainer} />
      <Addgiftproducts value={giftcontainer}/>
    </>
  )
}

export default Productbuton     
