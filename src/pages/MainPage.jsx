import { useState , useRef} from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const word = "MANGO";

export default function MainPage(){

    const ref00 = useRef(null);
    const ref01 = useRef(null);
    const ref02 = useRef(null);
    const ref03 = useRef(null);
    const ref04 = useRef(null);
    const ref10 = useRef(null);
    const ref11 = useRef(null);
    const ref12 = useRef(null);
    const ref13 = useRef(null);
    const ref14 = useRef(null);
    const ref20 = useRef(null);
    const ref21 = useRef(null);
    const ref22 = useRef(null);
    const ref23 = useRef(null);
    const ref24 = useRef(null);
    const ref30 = useRef(null);
    const ref31 = useRef(null);
    const ref32 = useRef(null);
    const ref33 = useRef(null);
    const ref34 = useRef(null);
    const ref40 = useRef(null);
    const ref41 = useRef(null);
    const ref42 = useRef(null);
    const ref43 = useRef(null);
    const ref44 = useRef(null);
    const ref50 = useRef(null);
    const ref51 = useRef(null);
    const ref52 = useRef(null);
    const ref53 = useRef(null);
    const ref54 = useRef(null);


    const [arr,setArr] = useState([]);
    const [count,setCount] = useState(0);
    const navigate = useNavigate();

    function submitHandler(){

        if(count == 0){
            ref00.current.value = arr[0];
            ref01.current.value = arr[1];
            ref02.current.value = arr[2];
            ref03.current.value = arr[3];
            ref04.current.value = arr[4];

            if(word.includes(arr[0])){
                if(word[0] === arr[0]){
                    ref00.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref00.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref00.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[1])){
                if(word[1] === arr[1]){
                    ref01.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref01.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref01.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[2])){
                if(word[2] === arr[2]){
                    ref02.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref02.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref02.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[3])){
                if(word[3] === arr[3]){
                    ref03.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref03.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref03.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[4])){
                if(word[4] === arr[4]){
                    ref04.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref04.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref04.current.style.backgroundColor = "#3A3A3C"
            }

            setArr([]);
            setCount(count+1);

        }
         
        else if(count == 1){
            ref10.current.value = arr[0];
            ref11.current.value = arr[1];
            ref12.current.value = arr[2];
            ref13.current.value = arr[3];
            ref14.current.value = arr[4];

            if(word.includes(arr[0])){
                if(word[0] === arr[0]){
                    ref10.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref10.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref10.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[1])){
                if(word[1] === arr[1]){
                    ref11.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref11.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref11.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[2])){
                if(word[2] === arr[2]){
                    ref12.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref12.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref12.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[3])){
                if(word[3] === arr[3]){
                    ref13.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref13.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref13.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[4])){
                if(word[4] === arr[4]){
                    ref14.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref14.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref14.current.style.backgroundColor = "#3A3A3C"
            }

            setArr([]);
            setCount(count+1);
        }

        else if(count == 2){
            ref20.current.value = arr[0];
            ref21.current.value = arr[1];
            ref22.current.value = arr[2];
            ref23.current.value = arr[3];
            ref24.current.value = arr[4];

            if(word.includes(arr[0])){
                if(word[0] === arr[0]){
                    ref20.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref20.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref20.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[1])){
                if(word[1] === arr[1]){
                    ref21.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref21.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref21.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[2])){
                if(word[2] === arr[2]){
                    ref22.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref22.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref22.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[3])){
                if(word[3] === arr[3]){
                    ref23.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref23.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref23.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[4])){
                if(word[4] === arr[4]){
                    ref24.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref24.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref24.current.style.backgroundColor = "#3A3A3C"
            }

            setArr([]);
            setCount(count+1);
        }

        else if(count == 3){
            ref30.current.value = arr[0];
            ref31.current.value = arr[1];
            ref32.current.value = arr[2];
            ref33.current.value = arr[3];
            ref34.current.value = arr[4];

            if(word.includes(arr[0])){
                if(word[0] === arr[0]){
                    ref30.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref30.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref30.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[1])){
                if(word[1] === arr[1]){
                    ref31.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref31.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref31.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[2])){
                if(word[2] === arr[2]){
                    ref32.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref32.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref32.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[3])){
                if(word[3] === arr[3]){
                    ref33.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref33.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref33.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[4])){
                if(word[4] === arr[4]){
                    ref34.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref34.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref34.current.style.backgroundColor = "#3A3A3C"
            }

            setArr([]);
            setCount(count+1);
        }

        else if(count == 4){
            ref40.current.value = arr[0];
            ref41.current.value = arr[1];
            ref42.current.value = arr[2];
            ref43.current.value = arr[3];
            ref44.current.value = arr[4];

            if(word.includes(arr[0])){
                if(word[0] === arr[0]){
                    ref40.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref40.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref40.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[1])){
                if(word[1] === arr[1]){
                    ref41.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref41.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref41.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[2])){
                if(word[2] === arr[2]){
                    ref42.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref42.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref42.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[3])){
                if(word[3] === arr[3]){
                    ref43.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref43.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref43.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[4])){
                if(word[4] === arr[4]){
                    ref44.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref44.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref44.current.style.backgroundColor = "#3A3A3C"
            }

            setArr([]);
            setCount(count+1);
        }

        else if(count == 5){
            ref50.current.value = arr[0];
            ref51.current.value = arr[1];
            ref52.current.value = arr[2];
            ref53.current.value = arr[3];
            ref54.current.value = arr[4];

            if(word.includes(arr[0])){
                if(word[0] === arr[0]){
                    ref50.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref50.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref50.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[1])){
                if(word[1] === arr[1]){
                    ref51.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref51.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref51.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[2])){
                if(word[2] === arr[2]){
                    ref52.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref52.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref52.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[3])){
                if(word[3] === arr[3]){
                    ref53.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref53.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref53.current.style.backgroundColor = "#3A3A3C"
            }

            if(word.includes(arr[4])){
                if(word[4] === arr[4]){
                    ref54.current.style.backgroundColor = "#538d4e"
                }
                else{
                    ref54.current.style.backgroundColor = "#b59f3b"
                }
            }
            else{
                ref54.current.style.backgroundColor = "#3A3A3C"
            }

            setArr([]);
            setCount(count+1);
        }

        if(word[0] === arr[0] && word[1] === arr[1] && word[2] === arr[2] && word[3] === arr[3] && word[4] === arr[4] ){
            navigate("/won")
        }
    }
    

    return(
        <div className=" lg:h-full h-screen bg-black">
            
            
            <div className="">
                <Header></Header>
            </div>
            
            
            
            
            <div className="py-12">                             { /* Boxes */ }
                <div>   
                    <div className="flex pb-1.5 justify-center text-white font-bold text-4xl text-center">
                        <div ref={ref00} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ count == 0 ? arr[0] : ref00.current.value }</div>
                        <div ref={ref01} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ count == 0 ? arr[1] : ref01.current.value }</div>
                        <div ref={ref02} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ count == 0 ? arr[2] : ref02.current.value }</div>
                        <div ref={ref03} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ count == 0 ? arr[3] : ref03.current.value }</div>
                        <div ref={ref04} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ count == 0 ? arr[4] : ref04.current.value }</div>
                    </div>

                    <div className="flex pb-1.5 justify-center text-white font-bold text-4xl text-center">
                        <div ref={ref10} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 1) ? arr[0] : (count > 1) ? ref10.current.value : null }</div>
                        <div ref={ref11} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 1) ? arr[1] : (count > 1) ? ref11.current.value : null }</div>
                        <div ref={ref12} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 1) ? arr[2] : (count > 1) ? ref12.current.value : null }</div>
                        <div ref={ref13} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 1) ? arr[3] : (count > 1) ? ref13.current.value : null }</div>
                        <div ref={ref14} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 1) ? arr[4] : (count > 1) ? ref14.current.value : null }</div>
                    </div>

                    <div className="flex pb-1.5 justify-center text-white font-bold text-4xl text-center">
                        <div ref={ref20} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 2) ? arr[0] : (count > 2 ) ? ref20.current.value : null }</div>
                        <div ref={ref21} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 2) ? arr[1] : (count > 2 ) ? ref21.current.value : null }</div>
                        <div ref={ref22} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 2) ? arr[2] : (count > 2 ) ? ref22.current.value : null }</div>
                        <div ref={ref23} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 2) ? arr[3] : (count > 2 ) ? ref23.current.value : null }</div>
                        <div ref={ref24} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 2) ? arr[4] : (count > 2 ) ? ref24.current.value : null }</div>
                    </div>

                    <div className="flex pb-1.5 justify-center text-white font-bold text-4xl text-center">
                        <div ref={ref30} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 3) ? arr[0] : (count > 3 ) ? ref30.current.value : null }</div>
                        <div ref={ref31} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 3) ? arr[1] : (count > 3 ) ? ref31.current.value : null }</div>
                        <div ref={ref32} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 3) ? arr[2] : (count > 3 ) ? ref32.current.value : null }</div>
                        <div ref={ref33} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 3) ? arr[3] : (count > 3 ) ? ref33.current.value : null }</div>
                        <div ref={ref34} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 3) ? arr[4] : (count > 3 ) ? ref34.current.value : null }</div>
                    </div>

                    <div className="flex pb-1.5 justify-center text-white font-bold text-4xl text-center">
                        <div ref={ref40} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 4) ? arr[0] : (count > 4 ) ? ref40.current.value : null }</div>
                        <div ref={ref41} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 4) ? arr[1] : (count > 4 ) ? ref41.current.value : null }</div>
                        <div ref={ref42} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 4) ? arr[2] : (count > 4 ) ? ref42.current.value : null }</div>
                        <div ref={ref43} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 4) ? arr[3] : (count > 4 ) ? ref43.current.value : null }</div>
                        <div ref={ref44} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 4) ? arr[4] : (count > 4 ) ? ref44.current.value : null }</div>
                    </div>

                    <div className="flex pb-1.5 justify-center text-white font-bold text-4xl text-center">
                        <div ref={ref40} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 5) ? arr[0] : (count > 5 ) ? ref50.current.value : null }</div>
                        <div ref={ref41} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 5) ? arr[1] : (count > 5 ) ? ref51.current.value : null }</div>
                        <div ref={ref42} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 5) ? arr[2] : (count > 5 ) ? ref52.current.value : null }</div>
                        <div ref={ref43} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 5) ? arr[3] : (count > 5 ) ? ref53.current.value : null }</div>
                        <div ref={ref44} className="border-2 w-16 h-16 ml-1.5 border-box p-3" >{ (count == 5) ? arr[4] : (count > 5 ) ? ref54.current.value : null }</div>
                    </div>
                </div>
            </div>
            
            
            
            
            
            <div className="bg-black ">                                 { /* Keyboard  */ }
                <div className="">
                    <div className="flex pb-1.5 justify-center">
                        <button onClick={() => setArr([...arr,'Q'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md">Q</button>
                        <button onClick={() => setArr([...arr,'W'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">W</button>
                        <button onClick={() => setArr([...arr,'E'])} className="ml-1 bg-key py-3 px-2.5 text-2xl font-bold text-white rounded-md ">E</button>
                        <button onClick={() => setArr([...arr,'R'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">R</button>
                        <button onClick={() => setArr([...arr,'T'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">T</button>
                        <button onClick={() => setArr([...arr,'Y'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">Y</button>
                        <button onClick={() => setArr([...arr,'U'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">U</button>
                        <button onClick={() => setArr([...arr,'I'])} className="ml-1 bg-key py-3 px-3 text-2xl font-bold text-white rounded-md ">I</button>
                        <button onClick={() => setArr([...arr,'O'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">O</button>
                        <button onClick={() => setArr([...arr,'P'])} className="mx-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">P</button>
                    </div>
                    
                    <div className="flex pb-1.5 justify-center">
                        <button onClick={() => setArr([...arr,'A'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">A</button>
                        <button onClick={() => setArr([...arr,'S'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">S</button>
                        <button onClick={() => setArr([...arr,'D'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">D</button>
                        <button onClick={() => setArr([...arr,'F'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">F</button>
                        <button onClick={() => setArr([...arr,'G'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">G</button>
                        <button onClick={() => setArr([...arr,'H'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">H</button>
                        <button onClick={() => setArr([...arr,'J'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">J</button>
                        <button onClick={() => setArr([...arr,'K'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">K</button>
                        <button onClick={() => setArr([...arr,'L'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">L</button>
                    </div>

                    <div className="flex justify-center">
                        <button onClick={submitHandler} className="ml-2 bg-key py-3 px-2 text-xs  font-bold text-white rounded-md ">ENTER</button>
                        <button onClick={() => setArr([...arr,'Z'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">Z</button>
                        <button onClick={() => setArr([...arr,'X'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">X</button>
                        <button onClick={() => setArr([...arr,'C'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">C</button>
                        <button onClick={() => setArr([...arr,'V'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">V</button>
                        <button onClick={() => setArr([...arr,'B'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">B</button>
                        <button onClick={() => setArr([...arr,'N'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">N</button>
                        <button onClick={() => setArr([...arr,'M'])} className="ml-1 bg-key py-3 px-2 text-2xl font-bold text-white rounded-md ">M</button>
                        <button onClick={() => setArr([...arr].slice(0,arr.length-1))} className="ml-1 bg-key py-3 px-2 text-xs mr-2 font-bold text-white rounded-md ">DEL</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

