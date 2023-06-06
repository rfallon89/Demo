import submit from '../Assets/Icon_Submit.svg'
import '../Styles/Form.css'
import { useState } from 'react';
function Form(){
    const [showAddress,setShowAddress] = useState(false)
    const [addNumber, setAddNumber] = useState(true)
    const [data, setData] = useState({
        FullName:'',
        EmailAddress:'',
        PhoneNumbers:['',''],
        Message:'',
        bIncludeAddressDetails:false,
        AddressLine1:'',
        AddressLine2:'',
        CityTown:'',
        StateCounty:'',
        Postcode:'',
        Country:'',
    })
    const [validate, setValidate] = useState({
        name:true,
        email:true,
        phone1:true,
        phone2:true,
        message:true,
        AddressLine1:true,
        AddressLine2:true,
        CityTown:true,
        StateCounty:true,
        Postcode:true,
        Country:true,
    })
    const validateName =()=>{
        if(!data.FullName.length){
            setValidate({...validate,name:false})
        }
        else{
            setValidate({...validate,name:true})
        }
    }

    const validateEmail = () =>{
        let input = data.EmailAddress 
        if(input.length || !input.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)){
            setValidate({...validate,email:false})
        }
        else{
            setValidate({...validate,email:true})
        }
    }

    const validatePhone = () => {
        data.PhoneNumbers.forEach((number,index)=>{
            if(number.length<10 && number.length>20){
                setValidate({validate,[`phone${index+1}`]:false})
            }
        })
    }

    const validateMessage = () => {
        if(!data.Message){
            setValidate({...validate,message:false})
        }
    }

    const validateAddress = ({target}) =>{
        if(!data[`${target.id}`].length){
            setValidate({...validate,[`${target.id}`]:false})
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('here')
    }

    return(
        <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='column'>
                        <label id="name">Full name</label>
                        <input className='input-2' id="name" type="text" onChange={({target:{value}})=>setData({...data,FullName:value})} onBlur={validateName} value={data.FullName}/>
                        <p className={validate.name?'hide':'show'}>*Required</p>
                    </div>
                    <div className='column'>
                        <label id="email">Email address</label>
                        <input className='input-2' id="email" type="email" onChange={({target:{value}})=>setData({...data,EmailAddress:value})} onBlur={validateEmail} value={data.EmailAddress}/>
                        <p className={validate.email?'hide':'show'}>*Invalid email address</p>
                    </div>
                </div>

                <div className='column'>
                <label id="phone1">Phone number 01 <i>- optional</i></label>
                <input id="phone1" type="tel" onChange={({target:{value}})=>{
                    const change = {...data}
                    change.PhoneNumbers[0] = value
                    setData(change)
                }} onBlur={validatePhone} value={data.PhoneNumbers[0]}/>
                <p className={validate.phone1?'hide':'show'}>*Invalid number</p>
                </div>

                <div className='column'>
                <label id="phone2" hidden={addNumber} >Phone number 02 <i>- optional</i></label>
                <input id="phone2" hidden={addNumber} type="tel" name="phone2"onChange={({target:{value}})=>{
                    const change = {...data}
                    change.PhoneNumbers[1] = value
                    setData(change)
                }} onBlur={validatePhone} value={data.PhoneNumbers[1]}/>
                  <p className={validate.phone2?'hide':'show'}>*Invalid number</p>
                </div> 

                <button id='phone' disabled={!addNumber} onClick={()=>setAddNumber(false)}>Add new phone number</button>
                    
                <div className='column'>
                    <div className='row'>
                    <label id="message">Message</label>
                    <p id='message-max'>Maximum text length is 500 characters</p>
                    </div>
                    <textarea id="message" name="message" maxLength='500'rows='8' onChange={({target:{value}})=>setData({...data,Message:value})} onBlur={validateMessage} value={data.Message}/>
                    <p className={validate.message?'hide':'show'}>*required</p>
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
                        <input className='input-2' id="AddressLine1" type="text" onChange={({target:{value}})=>setData({...data,AddressLine1:value})} onBlur={validateAddress} value={data.AddressLine1}/>
                        <p className={validate.AddressLine1?'hide':'show'}>*required</p>
                    </div>
                    <div className='column'>
                        <label id="address2">Address line 2</label>
                        <input className='input-2' id="AddressLine2" type="text" onChange={({target:{value}})=>setData({...data,AddressLine2:value})} onBlur={validateAddress} value={data.AddressLine2}/>
                        <p className={validate.AddressLine2?'hide':'show'}>*required</p>
                    </div>
                </div>

                <div className={!showAddress?'Address-row':'row'}>
                    <div className='column'>
                        <label id="city">City</label>
                        <input className='input-4' id="CityTown" type="text" onChange={({target:{value}})=>setData({...data,CityTown:value})} onBlur={validateAddress} value={data.CityTown}/>
                        <p className={validate.CityTown?'hide':'show'}>*required</p>
                    </div>
                    <div className='column'>
                        <label id="region">State/County</label>
                        <input className='input-4' id="StateCounty" type="text" onChange={({target:{value}})=>setData({...data,StateCounty:value})} onBlur={validateAddress} value={data.StateCounty}/>
                        <p className={validate.StateCounty?'hide':'show'}>*required</p>
                    </div>
                    <div className='column'>
                        <label id="postcode">Postcode</label>
                        <input className='input-4' id="Postcode" type="text" onChange={({target:{value}})=>setData({...data,Postcode:value})} onBlur={validateAddress} value={data.Postcode}/>
                        <p className={validate.Postcode?'hide':'show'}>*required</p>
                    </div>
                    <div className='column'>
                        <label id="country">Country</label>
                        <input className='input-4' id="Country" type="text" name="country" onChange={({target:{value}})=>setData({...data,Country:value})} onBlur={validateAddress} value={data.Country}/>
                        <p className={validate.Country?'hide':'show'}>*required</p>
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