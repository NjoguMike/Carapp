import React, { useState } from 'react'

function Form() {

const [ clientData , setClientData ] = useState({
  clientName: "",
  clientEmail: "",
  clientPhoneNumber: "",
  clientMessage: "",
})

function handleForm(event){
  const key = event.target.id
  const value = event.target.value

  setClientData({
    ...clientData,
    [key]: value
  })
  console.log(clientData)
}

  return (
    <div className="FormApp" style={{margin:"20px", display:"flex", flexDirection:"column"}}>
      <form>
        <label htmlFor='clientName'>username :</label>
          <input id='clientName' placeholder ="username" value={clientData.clientName} onChange={handleForm}/>
        <label htmlFor='clientEmail'>Email :</label>
          <input id='clientEmail' placeholder ="Email" value={clientData.clientEmail} onChange={handleForm}/>
        <label htmlFor='clientPhoneNumber'>Phone Number :</label>
          <input id='clientPhoneNumber' placeholder ="Phone Number" value={clientData.clientPhoneNumber} onChange={handleForm}/>
        <label htmlFor='clientMessage'>Message :</label>
          <input id='clientMessage' placeholder ="Message" value={clientData.clientMessage} onChange={handleForm}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
