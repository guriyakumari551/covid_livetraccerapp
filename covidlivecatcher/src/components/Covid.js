import React,{useEffect,useState} from 'react';
import './covid.css';

const Covid = () => 
{
     const [data,setdata] = useState([]);
    const  getCovidvalue= async() =>
    {
        try{

           const res=await fetch("https://data.covid19india.org/data.json");
           const ActualData=await res.json();
           console.log(ActualData.statewise[0]);
           setdata(ActualData.statewise[0]);

           

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
        <div className='mainbody' >
     
            <h1>🔴LIVE</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
       
<section>
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
              <div className="card__main1">
                 <div className='class__inner'>
                     <p className="card_inner"><span>TOTAL</span> RECOVERED</p>
                     <p className='card__total'>{data.recovered}</p>


                </div>

              </div>
          </div>
</li>
<li>
            <div className ="card">
              <div className="card__main2">
                 <div className='class__inner'>
                     <p className="card_inner"><span>TOTAL</span> CONFIRMED</p>
                     <p className='card__total'>{data.confirmed}</p>


                </div>

              </div>
          </div>
</li>
v
<li>
            <div className ="card">
              <div className="card__main3">
                 <div className='class__inner'>
                     <p className="card_inner"><span>TOTAL</span> DEATH</p>
                     <p className='card__total'>{data.deaths}</p>


                </div>

              </div>
          </div>
</li>
<li>
            <div className ="card">
              <div className="card__main4">
                 <div className='class__inner'>
                     <p className="card_inner"><span>TOTAL</span> ACTIVE</p>
                     <p className='card__total'>{data.active}</p>


                </div>

              </div>
          </div>
</li>
<li>
            <div className ="card">
              <div className="card__main5">
                 <div className='class__inner'>
                     <p className="card_inner"><span>LAST</span> UPDATED</p>
                     <p className='card__total'>{data.lastupdatedtime}</p>


                </div>

              </div>
          </div>
</li>
        </ul>
        </section>
        </div>
    )
};

export default Covid;

