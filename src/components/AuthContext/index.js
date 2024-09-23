import React, { createContext,useState, useContext, useEffect }  from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get('jwt_token'));
    const [accountUser, setAccountUser] = useState('')

    const login = (data) => {
        Cookies.set('jwt_token', data.token)
        setIsAuthenticated(true)
        setAccountUser(data.username)
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
        <AuthContext.Provider value={{isAuthenticated, login, logout,accountUser}}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);