import logo from './logo.svg';
import './App.css';
import FormKomponens from './komponens/FormKomponens';

function App() {
function adatkuld(adatObj){
  console.log(adatObj)
}

  return (
    <div className="App">
      <header className="App-header">
       <FormKomponens adatkuld={adatkuld}/>
      </header>
    </div>
  );
}

export default App;
