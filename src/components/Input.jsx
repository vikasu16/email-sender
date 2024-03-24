function Input({props})
{
    return (
        <div>
            <div className='text-base' >{props.type}</div>
            <input className='w-full h-9 border border-gray-500 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent' placeholder={props.type}></input>
        </div>
    )
}

export default Input;