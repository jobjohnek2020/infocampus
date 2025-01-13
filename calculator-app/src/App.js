import './App.css';
import {Provider} from "react-redux";
import store  from "./store/calcstore";
import CalcContainer from './components/calculator/CalcComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="my-3">
        <CalcContainer/>
      </div>  
    </Provider>
  );
}

export default App;
