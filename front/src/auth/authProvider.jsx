import {useContext, createContext, useState, useEffect} from 'react'

const AuthContext= createContext(
    {
        isAuthenticated: false,
    }
)

const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated]=useState(false)

  return (
    
  <AuthContext.Provider value={{isAuthenticated}}>
    {children}
  </AuthContext.Provider>
  )
}

export default AuthProvider

// Hook que permite acceder a funciones de useContext en cualquier componente, solo hay que llamarlo

export const useAuth =()=> useContext(AuthContext);