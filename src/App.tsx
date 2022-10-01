import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const [colors,setColors] = useState<string[]>([]);
  const [ans, setAns] = useState<string>('');
  const [result, setResult] = useState<string>('');
  useEffect(() => {
    const colorss = [generateColor(), generateColor(),generateColor()];
    setColors(colorss);
    setAns(colorss[Math.floor(Math.random() * colors.length)]);
  },[]);
  const clickHandler = (data:string) => {
      if(data === ans){
        setResult('Right');
      } else{
        setResult('Wrong');
      }
      const colorss = [generateColor(), generateColor(),generateColor()];
    setColors(colorss);
    setAns(colorss[Math.floor(Math.random() * colors.length)]);

  }
  return (
    <div className="container">
      <div className="col">
      <div className="box" style={{backgroundColor: ans}}>
     </div>
     <div className="buttons">
      <button onClick={() => clickHandler(colors[0])}>{colors[0]}</button>
      <button onClick={() => clickHandler(colors[1])}>{colors[1]}</button>
      <button onClick={() => clickHandler(colors[2])}>{colors[2]}</button>
     </div>
     <div className="result">
      {result !== ''? <p>{result}</p>:null}
     </div>
      </div>
   
    </div>
  );
}

function generateColor(){
  const letters = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return "#"+color;
}

export default App;
