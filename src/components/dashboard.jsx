import Statistics from "./statistics";
import Sender from "./sender";
import Nav from "./nav";
import Templates from "./templates";

function Dashboard({props})
{
    return (
        <>
            <Nav/>
            <div className="flex">
                <div className="w-full md:w-3/5">
                <Statistics/>
                <Sender/>
                </div>
                <div className="w-full md:w-2/5 ">
                <Templates/>
                </div>
            </div>
        </>
    )
}

export default Dashboard;