import { useState } from 'react';

function EmailTemplate(props)
{
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
        document.body.style.overflow = 'hidden'; 
      };
    
      const handleClosePopup = () => {
        setShowPopup(false);
        document.body.style.overflow = 'auto'; 
      };

    return (
        <div className="p-3 my-2 border rounded-2xl hover:shadow-md" style={ {backgroundColor: '#F9FBFA'}}>
            <div className="flex justify-between">
                <div>this is the subject</div>
                <button onClick={handleButtonClick} className="border px-3 text-white rounded  hover:shadow-md" style={{backgroundColor : 'rgb(0, 104, 74)'}} >View</button>
                {showPopup && <Popup subject="abc" content="anything" onClose={handleClosePopup} />}
            </div>
        </div>
    )
}

const Popup = (props) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="bg-white p-8 rounded shadow-lg">
          <h2 className="text-lg font-bold mb-4">{props.subject}</h2>
          <p>{props.content}</p>
          <button className="mt-4 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={props.onClose}>Close</button>
        </div>
      </div>
    );
};

export default EmailTemplate;