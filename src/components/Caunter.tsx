import {useState} from 'react';

export const Caunter = () =>{
    const [count, setCount] = useState(0);
    
    const incriment = () => {setCount(count+1)};
    const decriment = () => {setCount(count-1)};
    return (
        <div>
        <div>
            {count}
        </div>
        <div className="grid grid-cols-2">
        <button onClick={incriment} className=" mr-4 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">UP</button>
        <button onClick={decriment} className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">DOUN</button>
        </div>
        </div>
    );
}

