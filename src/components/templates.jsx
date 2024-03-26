import EmailTemplate from "./emailtemplate";

function Templates({props})
{
    return (
        <div className='p-5 sm:pl-5 sm:pr-10 py-20'>
        <div className="border border-grey shadow-md rounded-3xl">
            <div className='px-5 py-5'>
                <div className='text-2xl font-bold' style={{color : '#00684A'}}>Templates</div>
            </div>
            <hr/>
            <div className='px-5 py-5'>
                <div>
                    <EmailTemplate/>
                </div>
                <div>
                    <EmailTemplate/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Templates;