import { Suspense } from "react";
import "./App.css";

import NavBar from "./Components/NavBar/NavBar";
import PricingOptions from "./Components/PricingOptions/PricingOptions";
import ResultChart from "./Components/ResultChart/ResultChart";
import axios from "axios";
import MarksChart from "./Components/MarksChart/MarksChart";
import Test from "./Components/MarksChart/test";
import { LineChart } from "recharts";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());

const marksPromise = axios.get("marksData.json");

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultChart></ResultChart>

        <Test></Test>
       
      </main>
    </>
  );
}

export default App;
