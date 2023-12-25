// import logo from './logo.svg';
import './App.css';
// App.js
import { useEffect, useState } from 'react'; // use useEffect and useState is a Hokks 
import Axios from 'axios';  // axious is a javascript laibary  make http request  from web browser or a node.js
import Dropdown from 'react-dropdown'; // allows you are toggle contextual overlayer for displaying list Link and more html elements.
import { HiSwitchHorizontal } from 'react-icons/hi'; // a versatile and comperhensive libary and popler icon that can be easily implemented in your react project  
import 'react-dropdown/style.css';
import './App.css';


function App() {

  // Initializing all the state variables 
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  // Calling the api whenever the dependency changes
  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
      .then((res) => {
        setInfo(res.data[from]);
      })
  }, [from]);

  // Calling the convert function whenever
  // a user switches the currency
  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info])

  // Function to convert the currency
  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }

  // Function to switch between two currency
  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <>
      <div className="App"  style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}>

        <div className="heading">
          <h1>Currency converter</h1>
        </div>
        <div className="container">
          <div className="left">
            <h3>Amount</h3>
            <input type="text"
              placeholder="Enter the amount"
              onChange={(e) => setInput(e.target.value)} />
          </div>
          <div className="middle">
            <h3>From</h3>
            <Dropdown options={options}
              onChange={(e) => { setFrom(e.value) }}
              value={from} placeholder="From" />
          </div>
          <div className="switch">
            <HiSwitchHorizontal size="30px"
              onClick={() => { flip() }} />
          </div>
          <div className="right">
            <h3>To</h3>
            <Dropdown options={options}
              onChange={(e) => { setTo(e.value) }}
              value={to} placeholder="To" />
          </div>
        </div>
        <div className="result">
          <button onClick={() => { convert() }}>Convert</button>
          <h2>Converted Amount:</h2>
          <p>{input + " " + from + " = " + output.toFixed(2) + " " + to}</p>

        </div>
      </div>
    </>
  );
}

export default App;


// function App() {
//   // create a state veriable

//   const [info, setInfo] = useState([]);
//   const [input, setInput] = useState(0);
//   const [from, setFrom] = useState("USD");
//   const [to, setTo] = useState("NIR");
//   const [options, setOptions] = useState([]);
//   const [output, setOutput] = useState(0);


//   // calling the api whenevery chanage the dependency 

//   useEffect = (() => {
//     Axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`).then = ((res) => {
//       setInfo(res.data[from]);
//     })
//   }, [from]);

//   // Calling the convert function Whenever
//   // a user switches the currency use
//   useEffect = (() => {
//     setOptions(Object.keys(info));
//     convert();
//   }, [info])

//   function convert() {
//     var rate = info[to];
//     setOutput(input * rate);
//   }

//   function flip() {
//     var temp = from;
//     setFrom(to);
//     setFrom(to);
//     setTo(temp);;
//   }

//   return (
//     <>
//       <div className="App" style={{
//         backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
//       }}>

//         <div className="heading">
//           <h1>Currency converter</h1>
//         </div>
//         <div className="container">
//           <div className="left">
//             <h3>Amount</h3>
//             <input type="text"
//               placeholder="Enter the amount"
//               onChange={(e) => setInput(e.target.value)} />
//           </div>
//           <div className="middle">
//             <h3>From</h3>
//             <Dropdown options={options}
//               onChange={(e) => { setFrom(e.value) }}
//               value={from} placeholder="From" />
//           </div>
//           <div className="switch">
//             <HiSwitchHorizontal size="30px"
//               onClick={() => { flip() }} />
//           </div>
//           <div className="right">
//             <h3>To</h3>
//             <Dropdown options={options}
//               onChange={(e) => { setTo(e.value) }}
//               value={to} placeholder="To" />
//           </div>
//         </div>
//         <div className="result">
//            <button onClick={() => { convert() }}>Convert</button>
//            <h2>Converted Amount:</h2>
//            <p>{input + " " + from + " = " + output.toFixed(2) + " " + to}</p>

//          </div>
//        </div>
//     </>
//   );
// }

// export default App;