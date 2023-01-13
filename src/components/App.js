import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
  const [shape, setShape] = useState("square");
  const [shapesToBeAdded, setShapesToBeAdded] = useState([]);

  const handleShapeChange = (e) => {
    setShape(e.target.value);
  }

  const handleAddShapeButton = () => {
    setShapesToBeAdded([...shapesToBeAdded, shape]);
  }
  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={handleShapeChange}>
          <option value="square" selected={shape === 'square'}>Square</option>
          <option value="circle" selected={shape === 'circle'}>Circle</option>
        </select>
        <button onClick={handleAddShapeButton}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {shapesToBeAdded.map((shape, index) => (
          <div key={index} className={shape}></div>
        ))}
      </div>
    </div>
  );
};


export default App;
