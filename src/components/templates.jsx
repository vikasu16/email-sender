import { useEffect, useState } from "react";
import EmailTemplate from "./emailtemplate";
import { useEmailTemplate } from "../hooks/emailtemplate";
import Loader from "./loader";

function Templates(props)
{
    const {loading, templates, fetchData} = useEmailTemplate(props.tempstate, props.userid)
    const [currentdate, setCurrentdate] = useState(new Date());

    const search = () => {
        fetchData(currentdate, props.userid);
    }

    return (
        <div className='p-5 sm:pl-5 sm:pr-10 py-20'>
        <div className="border border-grey shadow-md rounded-3xl">
            <div className='px-5 py-5'>
                <div className='text-2xl font-bold' style={{color : '#00684A'}}>Templates</div>
            </div>
            <hr/>
            <div className='px-5 py-5'>
                <div className="flex gap-5">
                    <input onChange={e => {setCurrentdate(new Date(e.target.value))}} type="date" className='w-full h-9 border border-gray-500 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent' placeholder='Subject'></input>
                    <button className="border px-3 text-white rounded hover:shadow-md bg-green-700" onClick={search}>Search</button>
                </div>
            </div>
            <hr/>
            <div className='px-5 py-5'>
                { loading 
                ? <Loader/>
                : templates.template.map((values, index) => {
                  return (<EmailTemplate key={index} subject={values.subject} content = {values.content} />)
                })}
            </div>
        </div>
        </div>
    )
}

export default Templates;