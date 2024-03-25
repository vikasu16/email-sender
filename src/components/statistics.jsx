function Statistics({props})
{
    return (
        <div className='p-5 sm:px-20 pt-10 pb-0' 
        style={{fontFamily: '"Euclid Circular A", "Helvetica Neue", Helvetica, Arial, sans-serif'}}>
            <div className="flex justify-between px-10">
            <div className="p-5">
                <div className="font-bold text-4xl" style={{color : '#00684A'}}>Hi Vikas</div>
                <div>Are you ready to start?</div>
            </div>
            <div className="flex">
                <div className="border rounded p-3 mx-2 hover:shadow-md" style={ {backgroundColor: '#F9FBFA'}}>
                    <div>Total number of mail sent today</div>
                    <div style={{color : '#00684A'}} className="text-5xl flex justify-end">100</div>
                </div>
                <div className="border rounded p-3 mx-2 hover:shadow-md" style={ {backgroundColor: '#F9FBFA'}}>
                    <div>Total template used</div>
                    <div style={{color : '#00684A'}} className="text-5xl flex justify-end ">6</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Statistics;