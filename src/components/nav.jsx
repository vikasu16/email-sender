import { useNavigate } from "react-router-dom";

function Nav({props})
{
    const navigator = useNavigate();
    const logout = () => {
        localStorage.removeItem("_userkey");
        localStorage.removeItem("_userMail");
        localStorage.removeItem("_userkeyTime");
        localStorage.removeItem('_userName');
        navigator('/');
    }
    return (
        <div>
            <nav className="bg-green-700 px-3 py-2 flex justify-center border-b shadow-md w-full fixed top-0 z-50">
                <div className="max-w-screen-xl flex justify-between w-full">
                    <a className="font-bold text-2xl text-white" href="/">Email Sender</a>
                    <div className="flex items-center">
                        <button className="bg-white h-9 border rounded px-2" onClick={logout}>Log out</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;