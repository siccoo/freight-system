import { Routes, Route } from "react-router-dom";

import 'antd/dist/antd.min.css';
import './App.css';
import Shipments from "./containers/shipments";
import Customers from "./containers/customers";
import ShipmentDetails from "./containers/shipmentDetails";

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="shipments" element={<Shipments />} />
          <Route path="shipment-details" element={<ShipmentDetails />} />
        </Routes>
      </div>
    

  );
}

export default App;
