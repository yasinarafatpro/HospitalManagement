import React from 'react'
import { useLocation } from 'react-router-dom'


const Auth = () => {

    const {state}=useLocation()
    
    return (
        <div>
            <p>Authonticate Page</p>
            
        </div>
    )
}

export default Auth
