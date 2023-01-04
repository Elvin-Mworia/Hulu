import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move"
export default function Results({results}){
    return(
        <>
        <FlipMove className="px-2 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:fles=x flex-wrap justify-center">
            {
                results.map((result)=>(
                    <Thumbnail key={result.id} result={result}/>

                )
                    
                )
            }

        </FlipMove>
        </>
    )
}