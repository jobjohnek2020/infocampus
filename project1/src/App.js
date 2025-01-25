import {toast,ToastContainer} from "react-toastify";
import MyLogin from "./account/login";
import {HashRouter,Routes,Route} from "react-router-dom";
import Register from "./account/signup";
function App() {

  return (

    <HashRouter>
      <Routes>
        <Route index element={<MyLogin/>}/>
        <Route exact path="/login" element={<MyLogin/>}/>
        <Route exact path="/signup" element={<Register/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
