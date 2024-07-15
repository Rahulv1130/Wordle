import { useNavigate } from "react-router-dom"


export default function WinPage(){

    const navigate = useNavigate();

    return(
        <div className="bg-black h-screen flex justify-center place-items-center">
            <div>
                <div className="font-extrabold text-5xl text-center text-white animate-bounce">
                    Congratulations you won the game :)
                </div>
                <div className="text-white font-bold text-4xl text-center py-20">
                    The Word was :- 
                </div>
            </div>
        </div>
    )
}