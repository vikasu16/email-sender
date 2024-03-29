import Statistics from "./statistics";
import Sender from "./sender";
import Nav from "./nav";
import Templates from "./templates";
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard({props})
{
    const [statis, setStatis] = useState(true);
    
    return (
        <>
            <Nav/>
            <div className="flex">
                <div className="w-full md:w-3/5">
                    <Statistics statis = {statis}/>
                    <Sender statis = {statis} setStatis = {setStatis} />
                </div>
                <div className="w-full md:w-2/5 ">
                    <Templates/>
                </div>
            </div>
        </>
    )
}

export default Dashboard;