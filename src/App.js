import "./App.css";

import { useEffect, useState } from "react";

import CustomTable from "./components/custom-table.tsx";
import axios from "axios";

const baseURL = "http://127.0.0.1:3000";

function App() {
  const [medics, setMedics] = useState([]);
  useEffect(() => {
    axios.get(`${baseURL}/medics`).then((data) => {
      setMedics(data.data);
    });
  }, []);
  return (
    <div className="App">
      <h1>Lista de médicos</h1>
      <CustomTable medics={medics} />
    </div>
  );
}

export default App;
