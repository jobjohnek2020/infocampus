import { createContext, useState , useContext } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({children})=>{

    const [user,setUser] = useState({
        "name" : "Jobin John"
    });

    return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>;
}

export const useUser = ()=> useContext(UserContext);