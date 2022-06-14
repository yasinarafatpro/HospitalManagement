
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HospitalList from './HospitalList';

export const Home: React.FC = () => {

    const [value,setValue]=useState(0);

    const navigate = useNavigate()

    const handleRegister = () => {
        navigate('/register')
    }

   const  handleSingin = () => {
        navigate('/signin')
    }
    const goList=()=>{
        navigate('/hospitallist')
    }
    const increment=()=>{
        let a=value+1;
        setValue(a)
    }
    const decrement=()=>{
        let b=value-1;
        setValue(b)
    }
    const reset=()=>{
        setValue(0);
    }
    return (
        <>
        <HospitalList/>
            <div className='Home'>
                {/* <div className='body'>
                    <Button variant='contained' onClick={handleRegister} style={{ margin: "20px" }} >Create Account</Button>
                    <Button variant='contained' onClick={handleSingin} style={{ margin: "20px" }}>Singin</Button>
                    <Button variant='contained' onClick={goList}>View Hospitals</Button>
                </div> */}
                {/* <div>
                    
                    <Button variant='contained' onClick={decrement} size='small'>-</Button>
                    {value}
                    <Button variant='contained' onClick={increment} size='small'>+</Button><br/><br/>
                    <Button variant='contained' onClick={reset}>reset</Button>
                </div> */}
             </div>
            
        </>
    )
}
