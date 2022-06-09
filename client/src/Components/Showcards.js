import React from 'react'
import Cards from './Cards'
function Showcards({Img, loading}) {
    if(loading){
        return (
            <h1>Loading.....</h1>
        )
    }
    else
    {
        return (
            <>
                 {Img.map(data => (
                        <Cards url={data.URL} name={data.Name} detail={data.Detail}/>
                        
                 ))}
            </>
        )
    }
    
}

export default Showcards
