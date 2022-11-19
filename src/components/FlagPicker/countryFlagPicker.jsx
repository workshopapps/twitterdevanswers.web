import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import './style.css'

const App = () => {
  const [selected, setSelected] = useState("");
    return(
      <ReactFlagsSelect
      style={'height:42px;'}
        selected={selected}
        onSelect={(code) => setSelected(code)}
      />
    )
  
};

export default App;