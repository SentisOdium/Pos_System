"use client";
import React, { useEffect, useState } from 'react'
function page() {
  const [message , setMessage] = useState("...Loading");

  useEffect(()=>{
    fetch("http://localhost:5000/api/home").then(
      response => response.json()
    ).then(
      data => {
        setMessage(data.message);
      }
    )
  }, [])
  return (
    <div>
      {message}
    </div>
  )
}

export default page
