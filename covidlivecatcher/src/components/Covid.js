import React,{useEffect} from 'react';
import './covid.css';

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
        //  getCovidvalue();   
        },[]);

    
    return (
        <div className='mainbody' >
     
            <h1>🔴LIVE</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
       

        <ul>
            <li>
            <div className ="card">
              <div className="card__main">
                 <div className='class__inner'>
                     <p className="card_inner"><span>OUR</span> COUNTRY</p>
                     <p className='card__total'>INDIA</p>


                </div>

              </div>
          </div>
</li>
<li>
            <div className ="card">
              <div className="card__main">
                 <div className='class__inner'>
                     <p className="card_inner"><span>OUR</span> COUNTRY</p>
                     <p className='card__total'>INDIA</p>


                </div>

              </div>
          </div>
</li>
<li>
            <div className ="card">
              <div className="card__main">
                 <div className='class__inner'>
                     <p className="card_inner"><span>OUR</span> COUNTRY</p>
                     <p className='card__total'>INDIA</p>


                </div>

              </div>
          </div>
</li>
v
<li>
            <div className ="card">
              <div className="card__main">
                 <div className='class__inner'>
                     <p className="card_inner"><span>OUR</span> COUNTRY</p>
                     <p className='card__total'>INDIA</p>


                </div>

              </div>
          </div>
</li>
<li>
            <div className ="card">
              <div className="card__main">
                 <div className='class__inner'>
                     <p className="card_inner"><span>OUR</span> COUNTRY</p>
                     <p className='card__total'>INDIA</p>


                </div>

              </div>
          </div>
</li>
<li>
            <div className ="card">
              <div className="card__main">
                 <div className='class__inner'>
                     <p className="card_inner"><span>OUR</span> COUNTRY</p>
                     <p className='card__total'>INDIA</p>


                </div>

              </div>
          </div>
</li>
        </ul>
        </div>
    )
};

export default Covid;

