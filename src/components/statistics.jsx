import { useStatistics } from "../hooks/emailStatistics";

function Statistics(props)
{
   const {loading , mailDetails } = useStatistics(props.statis);
    
    return (
        <div className='p-2 sm:pl-10 sm:pr-5 pt-20 pb-0' style={{fontFamily: '"Euclid Circular A", "Helvetica Neue", Helvetica, Arial, sans-serif'}}>
            <div className="flex flex-col lg:flex-row justify-between px-5">
            <div className="p-5">
                <div className="font-bold text-4xl" style={{color : '#00684A'}}>Hi Vikas</div>
                <div>Are you ready to start?</div>
            </div>
            <div className="flex">
                <div className="border rounded-2xl p-3 mx-2 hover:shadow-md" style={ {backgroundColor: '#F9FBFA'}}>
                    <div className="text-sm pb-3">Total number of mail sent today</div>
                    <div style={{color : '#00684A'}} className="text-5xl flex justify-end">
                        {loading ? <div>Loading...</div> :  mailDetails.totalMails}
                    </div>
                </div>
                <div className="border rounded-2xl p-3 mx-2 hover:shadow-md" style={ {backgroundColor: '#F9FBFA'}}>
                    <div className="text-sm pb-3">Total template used</div>
                    <div style={{color : '#00684A'}} className="text-5xl flex justify-end ">
                        {loading ? <div>Loading...</div> : mailDetails.totalTemplates}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Statistics;