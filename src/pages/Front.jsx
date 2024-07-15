import { useNavigate } from "react-router-dom"


export default function Front(){

    const navigate = useNavigate();

    return(
        <div className="h-screen bg-wblack flex justify-center place-items-center bg-black">
            <div className="pt-2">
                <div className="text-white font-extrabold text-3xl text-center p-5">
                    Hii Ishu    &hearts;
                </div>
                <div className="text-white text-center font-bold text-2xl">
                    Welcome to Our Wordle...!!
                </div>
                <div className="text-white font-semibold text-2xl text-center p-5">
                    <button onClick={() => {navigate("/game")} } className="hover:bg-slate-800 border-2 p-4 rounded-full">Play the Game</button>
                </div>
            </div>
        </div>
    )
}