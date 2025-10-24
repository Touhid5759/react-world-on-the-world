import './App.css'
import Countries from './component/countries/countries'
import { Suspense } from 'react';
//1.load the data by fetch api
const fetchData=async()=>{
  const res=await fetch('https://openapi.programming-hero.com/api/all');
  return res.json();
}
function App() {
  const countryPromise=fetchData();
  return (
    <> 
       <Suspense fallback={<h3>Data........</h3>}>
            <Countries countryPromise={countryPromise}></Countries>
        </Suspense>
    </>
  )
}

export default App
