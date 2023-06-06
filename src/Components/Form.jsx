import {useFormik} from 'formik';
import submit from '../Assets/Icon_Submit.svg'
import '../Styles/Form.css'
import { useState } from 'react';
function Form(){
    const [showAddress,setShowAddress] = useState(false)
    const [addNumber, setAddNumber] = useState(true)

    const data = useFormik({
        initialValues:{
            name:'',
            email:'',
            phone1:'',
            phone2:'',
            message:'',
            address1:'',
            address2:'',
            city:'',
            region:'',
            postcode:'',
            country:'',
        }
    }
    )

    return(
        <form onSubmit={data.handleSubmit}>
                <div className='row'>
                    <div className='column'>
                        <label id="name">Full name</label>
                        <input className='input-2' id="name" type="text" name="name" onChange={data.handleChange} value={data.values.name}/>
                    </div>
                    <div className='column'>
                        <label id="email">Email address</label>
                        <input className='input-2' id="email" type="email" name="email" onChange={data.handleChange} value={data.values.email}/>
                    </div>
                </div>

                <div className='column'>
                <label id="phone1">Phone number 01 <i>- optional</i></label>
                <input id="phone1" type="number" name="phone1" onChange={data.handleChange} value={data.values.phone1}/>
                </div>

                <div className='column'>
                <label id="phone2" hidden={addNumber} >Phone number 02 <i>- optional</i></label>
                <input id="phone2" hidden={addNumber} type="number" name="phone2" onChange={data.handleChange} value={data.values.phone2}/>
                </div> 

                <button id='phone' disabled={!addNumber} onClick={()=>setAddNumber(false)}>Add new phone number</button>
                    
                <div className='column'>
                    <div className='row'>
                    <label id="message">Message</label>
                    <p id='message-max'>Maximum text length is 500 characters</p>
                    </div>
                    <textarea id="message" name="message" rows='8' onChange={data.handleChange} value={data.values.message}/>
                </div>

                    <div>
                        <div id='address-toggle'>
                        <button onClick={()=>setShowAddress(!showAddress)} id={showAddress?'address-open':'address-closed'}></button>
                        <p>Add address details</p>
                        </div>
                    </div>

                 <div className={!showAddress?'Address-row':'row'}>
                     <div className='column'>
                        <label id="address1">Address line 1</label>
                        <input className='input-2' id="address1" type="text" name="address1" onChange={data.handleChange} value={data.values.address1}/>
                    </div>
                    <div className='column'>
                        <label id="address2">Address line 2</label>
                        <input className='input-2' id="address2" type="text" name="address2" onChange={data.handleChange} value={data.values.address2}/>
                    </div>
                </div>

                <div className={!showAddress?'Address-row':'row'}>
                    <div className='column'>
                        <label id="city">City</label>
                        <input className='input-4' id="city" type="text" name="city" onChange={data.handleChange} value={data.values.city}/>
                    </div>
                    <div className='column'>
                        <label id="region">State/County</label>
                        <input className='input-4' id="region" type="text" name="region" onChange={data.handleChange} value={data.values.region}/>
                    </div>
                    <div className='column'>
                        <label id="postcode">Postcode</label>
                        <input className='input-4' id="postcode" type="text" name="postcode" onChange={data.handleChange} value={data.values.postcode}/>
                    </div>
                    <div className='column'>
                        <label id="country">Country</label>
                        <input className='input-4' id="country" type="text" name="country" onChange={data.handleChange} value={data.values.country}/>
                    </div>
                </div>

                <button id='submit'>
                    <img src={submit} />
                    <p>Submit</p>
                </button>
        </form>
    )
}

export default Form