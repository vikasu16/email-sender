function EmailTemplate({props})
{
    return (
        <div className="p-3 my-2 border rounded-2xl hover:shadow-md" style={ {backgroundColor: '#F9FBFA'}}>
            <div className="flex justify-between">
                <div>this is the subject</div>
                <button className="border px-3 text-white rounded  hover:shadow-md" style={{backgroundColor : 'rgb(0, 104, 74)'}} >View</button>
            </div>
        </div>
    )
}

export default EmailTemplate;