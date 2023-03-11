import { UserContext } from "./Utils/UserContex";
import { Children, useContext } from "react";
import { Navigate } from "react-router-dom";
function ProtectRoute({children}){
    const {user} = useContext(UserContext)

    if(user === false){
        return <Navigate to="/login"/>
    }
    return children
}

export default ProtectRoute