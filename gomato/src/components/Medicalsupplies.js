import React, { useEffect, useState } from 'react'
import Header from "../components/Header"
const Medicalsupplies = () => {
  const [title, setTitle] = useState('Medical Supplies - GoMoto')
  useEffect(() => {
    document.title = title
  }, [title])
  return (
    <div>
        <Header/>
    </div>
  )
}

export default Medicalsupplies
