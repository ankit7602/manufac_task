import React, { useEffect, useState } from "react";
import Table from "./Table";
import wine from './wine.json'

function App() {
  const [state, setState] = useState("Flavanoids")
  const [array, setArray] = useState(wine)

  // function use for toggle button to switch between states
  const handleTable = () => {
    if (state === "Flavanoids") {
      setState("Gamma")
    } else {
      setState("Flavanoids")
    }
  }
  // Useeffect is used for adding property of Gamma with calculated values
  useEffect(() => {
    let data = [...array]
    data = data.map((item) => {
      return {
        ...item,
        Gamma: (item.Ash * item.Hue) / item.Magnesium
      }
    })
    setArray([...data])
  }, [])
  // Grouping data to map table
  var groupedData = array.reduce(function (result, current) {
    var category = current?.Alcohol;
    if (!result[category]) {
      result[category] = [];
    }
    result[category].push(current);
    return result;
  }, {});
  return (
    <div className="center">
      <h1>{state}</h1>
      <Table groupedData={groupedData} property={state} />
      <div className="btn_container">
        <button onClick={() => handleTable()}>Change to {state === "Flavanoids" ? "Gamma" : "Flavanoids"}</button>
      </div>
    </div>
  );
}

export default App;
