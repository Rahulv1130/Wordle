
import Box from "./Box";


export default function Boxes({arr}){

    return(
        <div>   
            <Box arr={arr} i={0}></Box>
            {/* <Box arr={arr} i={1}></Box>
            <Box arr={arr} i={2}></Box>
            <Box arr={arr} i={3}></Box>
            <Box arr={arr} i={4}></Box> */}
        </div>
    )
}