

export default function Keyboard({arr,setArr}) {



    return(
        <div className="">
            <div className="flex pb-1.5 justify-center">
                <button onClick={() => { setArr(arr.push('Q')) }} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md">Q</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">W</button>
                <button className="ml-1 bg-key py-3 px-2.5 text-2xl font-bold text-white rounded-md ">E</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">R</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">T</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">Y</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">U</button>
                <button className="ml-1 bg-key py-3 px-3 text-2xl font-bold text-white rounded-md ">I</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">O</button>
                <button className="mx-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">P</button>
            </div>
            
            <div className="flex pb-1.5 justify-center">
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">A</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">S</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">D</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">F</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">G</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">H</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">J</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">K</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">L</button>
            </div>

            <div className="flex justify-center">
                <button className="ml-2 bg-key py-3 px-2 text-xs  font-bold text-white rounded-md ">ENTER</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">Z</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">X</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">C</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">V</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">B</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">N</button>
                <button className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">M</button>
                <button className="ml-1 bg-key py-3 px-2 text-xs mr-2 font-bold text-white rounded-md ">DEL</button>
            </div>
        </div>
    )
}