import React, { useState } from "react";
import "./App.scss";
import TableComponentContainer from "./components/Table/TableComponentContainer";
import DataSizeBtn from "./components/DataSizeBtn/DataSizeBtn";



const App = () => {
  const[dataSize,setDataSize] = useState(null)
  return <div className="container">
      {!dataSize ?
      <DataSizeBtn dataSize={dataSize} setDataSize={setDataSize}/>
      :
      <TableComponentContainer dataSize={dataSize} />      
  }    
    </div>
 
}

export default App;
