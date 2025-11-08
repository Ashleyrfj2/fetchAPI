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
         <h1>Countries List</h1>

         <ol>
            {countries.map((c, index) => (
               <li key={c.id || index}>
                  <strong>Country:</strong> {c.name},<br/> <strong>Region:</strong> {c.region.value}, <br/><strong>Capital:</strong> {c.capitalCity}<br/><br/>
               </li>
            ))}
         </ol>
      </>
   );
}




export default App
