import React, { useEffect, useState } from 'react'

const Medicalsupplies = () => {
  const [title, setTitle] = useState('Medical Supplies - GoMoto')
  useEffect(() => {
    document.title = title
  }, [title])
  return (
    <div>
        
    </div>
  )
}

export default Medicalsupplies
