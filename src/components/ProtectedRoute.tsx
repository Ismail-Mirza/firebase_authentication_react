import React from 'react'
import { useUserContext } from '../context/userAuthContext';
import {Navigate} from 'react-router-dom'


interface ProtectedRouteProps {
    children: React.ReactNode
}


const ProtectedRoute = ({children}:ProtectedRouteProps) => {
    const { currentUser } = useUserContext();
    

  console.log("Check user in Private: ", currentUser);
  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute