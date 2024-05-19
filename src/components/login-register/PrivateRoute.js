import { useSelector } from "react-redux"
import { selectUser } from "../redux-store/user/User.selector";
import { Navigate, Outlet } from "react-router-dom"
import Login from "./Login"
import { useEffect } from "react";


export default function PrivateRoute() {

    const user = useSelector(selectUser);

    useEffect(() => {
        console.log(user);
    }, [user])



    if (user) {
        return (
            user ? <Outlet /> : <Navigate to='/contul-meu' />
        )
    } else {
        return <Login />
    }

}


