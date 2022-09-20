import { Routes, Route } from "react-router-dom";

import 'antd/dist/antd.css';
import './App.css';
import Shipments from "./containers/shipments";
import Customers from "./containers/customers";

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="shipments" element={<Shipments />} />
        </Routes>
      </div>
    

  );
}

export default App;
