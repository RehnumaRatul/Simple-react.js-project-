import React, { useState } from 'react'

export default function AddList({setList, setShowModal}) {

     const [title, setTitle] = useState("")
     const [date, setDate] = useState("")

     const handleSubmit = (e) =>{ 
         e.preventDefault()

         const submittedList = {
             title: title,
             startDate: date,
             id: Date.now()


         } 
        
         console.log(submittedList)
         setList(prevState => [...prevState, submittedList])
         setShowModal(false) 
     }

  return (
    <form onSubmit={handleSubmit} >
        <label>
            <span>which programming language do you love?</span>
            <input onChange={e => setTitle(e.target.value)} type="text" placeholder='Your title'/>
        </label>
        <label>
            <span>when you learn this things?</span>
            <input onChange={e => setDate(e.target.value)} type="date"/>
        </label>
        <button>Submit</button>
    </form>
  )
}
