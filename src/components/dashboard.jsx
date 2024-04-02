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

    if (accessToken !== null) {
        const timestampValue = localStorage.getItem("_userkeyTime");
        if(timestampValue !== null)
        {
            const dateParse = new Date(timestampValue);
            const currentDate = new Date();
            const differenceMs = currentDate - dateParse;
            const hours = Math.floor((differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            auth.token = hours >= 1 ? false : true;
        }
    }

    return auth.token 
    ?  (
        <>
            <Nav/>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-3/5">
                    <Statistics statis = {statis} userid = {id}/>
                    <Sender statis = {statis} setStatis = {setStatis} tempstate = {tempstate} setTempstate = {setTempstate} userid = {id}/>
                </div>
                <div className="w-full lg:w-2/5 ">
                    <Templates tempstate = {tempstate} userid = {id}/>
                </div>
            </div>
        </>
        )
    :   <Navigate to="/"/>
    
}

export default Dashboard;