// vim: set shiftwidth=2 expandtab :
import { useState } from 'react';
import './App.css';

function CalcButtons(props) {
  // speed in bits per second
  let [b,set_b] = useState(0);

  function setValue(e, scale) {
    let x = parseFloat(e.target.value) / scale;
    set_b(x);
  }

  function Field(props) {
      let k = props.name;
      let k2 = props.name + "x";
      let label = k;
      let x = props.value * props.scale;
      return (
        <div key={k} className="field">
          <label htmlFor={k}>{label}</label>
          <input
            key={k} name={k} id={k}
            type="number"
            value={x.toString()}
            onChange={(e)=>setValue(e,props.scale)}
            />
          <input
            key={k2} name={k2} id={k2}
            type="text"
            value={x.toString(16)}
            onChange={(e)=>setValue(e,props.scale)}
            />
        </div>
      );
  }

  let fields = [
      {name:"b", scale:1},
      {name:"Kb", scale:1/1e3},
      {name:"Kib", scale:1/1024},
      {name:"Mb", scale:1/1e6},
      {name:"Mib", scale:1/(1024*1024)},
      {name:"Gb", scale:1/1e9},
      {name:"Gib", scale:1/(1024*1024*1024)},

      {name:"B", scale:1/8},
      {name:"KB", scale:1/8/1e3},
      {name:"KiB", scale:1/8/1024},
      {name:"MB", scale:1/8/1e6},
      {name:"MiB", scale:1/8/(1024*1024)},
      {name:"GB", scale:1/8/1e9},
      {name:"GiB", scale:1/8/(1024*1024*1024)},

      {name:"sector", scale:1/8/512},
      {name:"page", scale:1/8/4096},
      {name:"windows 11", scale:1/8/20e9},
  ];

  return (
    <div className="calcButtons">
      {fields.map(f=>Field({...f, value:b}))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Data unit converter</h1>
      <CalcButtons />
    </div>
  );
}

export default App;
