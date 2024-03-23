import TextEditor from './editor'


const sender = () => {
    return <>
         <div className='px-20 py-10'>
            <div className="border border-grey shadow-md rounded-3xl">
                <div className='px-10 py-5'>
                    <div className='text-2xl'>Create Mail</div>
                </div>
                <hr/>
                <div className='px-10 py-5'>
                    <div>
                        <div className='text-base' >Recipients</div>
                        <input className='w-full h-9 border border-gray-500 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent' placeholder='Recipients'></input>
                    </div>
                </div>
                <hr/>
                <div style={ {backgroundColor: '#F9FBFA'}} className='p-10'>
                    <div>
                        <div className='text-base' >Subject</div>
                        <input className='w-full h-9 border border-gray-500 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent' placeholder='Subject'></input>
                    </div>
                    <br/>
                    <div>
                        <div className='text-base' >Body</div>
                        <TextEditor/>
                    </div>
                    <div className='text-white pt-5 '>
                    <button style={{backgroundColor : 'rgb(0, 104, 74)'}} className='py-2 px-6 border rounded-2xl'>
                        Send Mail
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default sender;