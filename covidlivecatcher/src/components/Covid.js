import React,{useEffect}from 'react'

const Covid = () => 
{
    const  getCovidvalue= async()=>
    {
        try{

           const res=await fetch('https://data.covid19india.org/');
           console.log(res);

        }
        catch(err)
        {
         console.log(err);
        }
    }
    useEffect(()=>
        
        
        {
         getCovidvalue();   
        },[]);

    
    return (
        <div>
     
            <h1>🔴LIVE</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        </div>
    )
}

export default Covid;

