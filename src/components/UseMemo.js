import React, {useMemo, useState } from 'react'

const UseMemo = ({count}) => {

    const [result, setResult] = useState(100000000);
    useMemo(()=>{
        setResult(count**2)
    }, [count]);
    
  return (
    <div>
        <h1>Expensive calculation</h1>
        <p>{result}</p>
    </div>
  )
}

export default UseMemo