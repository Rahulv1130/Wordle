import { useRef } from "react"



export default function Box( {arr,i} ) {

    const ref = useRef(null);

    return(
        <div className="flex pb-1.5 justify-center text-white font-bold text-4xl text-center">
            {/* <div ref={ref} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{arr[i][0]}</div>
            <div className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{arr[i][1]}</div>
            <div className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{arr[i][2]}</div>
            <div className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{arr[i][3]}</div>
            <div className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{arr[i][4]}</div> */}

<           div ref={ref} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{arr[0]}</div>
            <div className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{arr[1]}</div>
            <div className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{arr[2]}</div>
            <div className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{arr[3]}</div>
            <div className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{arr[4]}</div>
        </div>
    )
}