import Statistics from "./statistics";
import Sender from "./sender";
import Nav from "./nav";
import Templates from "./templates";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";

function Dashboard(props)
{
    const { id } = useParams()
    const [statis, setStatis] = useState(true);
    const [tempstate, setTempstate] = useState(true);
    
    const accessToken = localStorage.getItem("_userkey");
    let auth = { token: false };

    if (accessToken !== null && accessToken !== undefined) {
        auth.token = true;
    }

    return auth.token 
    ?  (
        <>
            <Nav/>
            <div className="flex">
                <div className="w-full md:w-3/5">
                    <Statistics statis = {statis}/>
                    <Sender statis = {statis} setStatis = {setStatis} tempstate = {tempstate} setTempstate = {setTempstate}/>
                </div>
                <div className="w-full md:w-2/5 ">
                    <Templates tempstate = {tempstate}/>
                </div>
            </div>
        </>
        )
    :   <Navigate to="/"/>
    
}

export default Dashboard;