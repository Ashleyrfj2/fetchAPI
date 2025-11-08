import "./App.css";
import { useEffect, useState } from "react";

function App() {
   const [countries, setCountries] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const url = `https://api.worldbank.org/v2/country?format=json&per_page=300`;
         const response = await fetch(url);
         const result = await response.json();

         // result[0] contains pagie info
         // result[1] contains the actual country data array
         console.log("Page", result[0]);
         console.log("Country data:", result[1]);

         setCountries(result[1]);
      }

      fetchData();
   }, []);


      
    

   return (
      <>
         
            <div className="page">
              <header className="toolbar">
                <div className="toolbar-inner">


                  <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>




                  </div>

              </header>

          <main className="content">
<h1></h1>
<div className="card-container">


         <ol>
            {countries.map((c, index) => (
               <li key={c.id || index} >
                <div className="card-body" >
                  <h2 className="card-title">{c.name}</h2>
                  <p><strong>Region:</strong> {c.region.value}, <br/>
                  <strong>Capital:</strong> {c.capitalCity}</p>
                </div> </li>  )
          )   }
        </ol>
           </div>
           </main>
           </div>
      </>
   );



  }

export default App
