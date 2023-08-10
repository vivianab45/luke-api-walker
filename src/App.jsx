import {Routes, Route} from 'react-router-dom'
import './App.css';
import Landing from './components/Landing'
import Form from './components/Form'
import People from './components/People'
import Planets from './components/Planets'

function App() {
  return (
    <div className="App">
    <Form/>
     <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/people/:id' element={<People/>}/>
        <Route path='/planets/:id' element={<Planets/>}/>
     </Routes>
    </div>
  );
}

export default App;
