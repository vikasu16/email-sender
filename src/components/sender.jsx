import { useState, useEffect } from 'react';
import TextEditor from './editor'


const sender = () => {
    const [check, setCheck] = useState(false);

    useEffect(() => {
        const link = document.querySelector('a.jodit-status-bar-link');
        if (link) {
          link.innerHTML = "";
        }
      }, []); 

    return <>
         <div className='p-5 sm:pl-10 sm:pr-5 py-10'>
            <div className="border border-grey shadow-md rounded-3xl">
                <div className='px-10 py-5'>
                    <div className='text-2xl font-bold' style={{color : '#00684A'}}>Create Mail</div>
                </div>
                <hr/>
                <div className='px-10 py-5'>
                    <div className='flex justify-between'>
                    <div className='text-lg pt-2 font-bold' style={{fontFamily: '"Euclid Circular A", "Helvetica Neue", Helvetica, Arial, sans-serif'}}>Select Type</div>
                    <div className='flex justify-end'>
                    <label className="inline-flex items-center cursor-pointer">
                        <span className="m-3 text-sm font-medium text-gray-900 dark:text-gray-300">{check ? 'Select file' : 'Enter recipients'}</span>
                        <input type="checkbox" checked={check} onChange={(e) => setCheck(e.target.checked)} className="sr-only peer"/>
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-700"></div>
                    </label>
                    </div>
                    </div>
                    {check ? 
                    <div className='pb-1'>
                        <div className='text-base pb-1'>Upload file</div>
                        <div className='flex justify-between'>
                        <input type="file"/>
                        <button style={{backgroundColor : 'rgb(0, 104, 74)', color:'white'}} className='py-1 px-6 border rounded-2xl hover:ring-2 hover:ring-green-300'>
                            Upload  
                        </button>
                        </div>
                    </div>
                    :
                    <div>
                        <div className='text-base pb-1'>Recipients</div>
                        <input className='w-full h-9 border border-gray-500 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent' placeholder='Recipients'></input>
                    </div>
                    }
                </div>
                <hr/>
                <div style={ {backgroundColor: '#F9FBFA'}} className='p-10'>
                    <div>
                        <div className='text-base pb-1' >Subject</div>
                        <input className='w-full h-9 border border-gray-500 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent' placeholder='Subject'></input>
                    </div>
                    <br/>
                    <div>
                        <div className='text-base pb-1' >Add Message</div>
                        <TextEditor/>
                    </div>
                    <div className='text-white pt-5 '>
                    <button style={{backgroundColor : 'rgb(0, 104, 74)'}} className='py-2 px-6 border rounded-2xl hover:ring-2 hover:ring-green-300'>
                        Send Mail
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default sender;