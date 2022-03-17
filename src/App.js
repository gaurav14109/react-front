import {useState, useEffect} from 'react'
import axios from 'axios'
function App() {
  const [data, setData] = useState('Without Server call')

  useEffect(()=>{

    axios.get('http://157.245.110.193:4000/api').then(res=>{
      console.log(res.data.data)
      setData(res.data.data)
    }).catch(err=>{
      console.log(err)
    })

  },[data])
  return (
    <div className="App">
        <h2>{data}</h2>
    </div>
  );
}

export default App;
