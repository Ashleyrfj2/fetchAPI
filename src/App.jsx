import "./App.css";
import { useEffect, useState } from "react";

function App() {
   const [countries, setCountries] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");

   useEffect(() => {
      async function fetchData() {
         const url = `https://api.worldbank.org/v2/country?format=json&per_page=300`;
         const response = await fetch(url);
         const result = await response.json();

         
         console.log("Page", result[0]);
         console.log("Country data:", result[1]);

         setCountries(result[1]);
      }

      fetchData();
   }, []);

   // Filter 
   const filteredCountries = countries.filter((country) => {
      // If empty, show all 
      if (searchTerm === "") {
         return true;
      }
      // Ocheck if country name includes the search term
      return country.name.toLowerCase().includes(searchTerm.toLowerCase());
   });

      
    
  
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
  <input
    type="search"
    placeholder="Search countries..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</label>




                  </div>

              </header>

          <main className="content">
<h1></h1>
<div className="card-container">


         <ol>
            {filteredCountries.map((c, index) => (
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
