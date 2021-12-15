import React,{useEffect} from 'react'

const Covid = () => 
{
    const  getCovidvalue= async() =>
    {
        try{

           const res=await fetch("https://data.covid19india.org/data.json");
           const ActualData=await res.json();
           console.log(ActualData.statewise[0]);

           

        }
        catch(err)
        {
         console.log(err);
        }
    };
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

