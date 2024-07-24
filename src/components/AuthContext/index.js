import React, { createContext,useState, useContext, useEffect }  from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get('jwt_token'));
    

    const login = (token) => {
        Cookies.set('jwt_token', token)
        setIsAuthenticated(true)
    }
    const logout = () => {
        Cookies.remove('jwt_token');
        setIsAuthenticated(false);

    }
    
    useEffect(() => {
        const token = Cookies.get('jwt_token')
        setIsAuthenticated(!!token);

    },[]);

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);