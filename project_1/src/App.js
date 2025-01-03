import "./App.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
/*import HookOne from "./hooks/hook_1";
import Artist from "./hooks/Artist";
import Todo from "./hooks/Todo";
import HookTwo from "./hooks/hook_2";
import HookThree from "./hooks/hook_3";
import HookFour from "./hooks/hook_4";
import ApiOne from "./api/api_1";*/
import Customer from "./api/Customer";
import Product from "./api/Product";
import Employee from "./api/Employee";
function App() {
  return (
    <HashRouter>
      <nav>
       {/* <Link to="/users" className="toplink">Users</Link>
        <Link to="/books" className="toplink">Books</Link>
        <Link to="/items" className="toplink">Items</Link>
        <Link to="/products" className="toplink">Products</Link> 
        <Link to="/hook1" className="toplink">Hook One</Link>
        <Link to="/hook2" className="toplink">Artists</Link>
        <Link to="/todos" className="toplink">Todos</Link>
        <Link to="/hookbooks" className="toplink">Hook-Books</Link>
        <Link to="/hook3" className="toplink">HookThree</Link>
        <Link to="/hook4" className="toplink">HookFour</Link> 
        <Link to="/api1" className="toplink text-decoration-none">ApiOne</Link>*/}
        <Link to="/customers" className="toplink text-decoration-none">Customers</Link>
        <Link to="/products" className="toplink text-decoration-none">Products</Link>
        <Link to="/employees" className="toplink text-decoration-none">Employees</Link>
      </nav>
      <Routes>
       {/* <Route exact path="/users" element={<MyUser />} />
        <Route exact path="/books" element={<MyBook />} />
        <Route exact path="/items" element={<ItemList />} />
        <Route exact path="/products" element={<Products/>}/> 
        <Route exact path="/hook1" element={<HookOne/>}/>
        <Route exact path="/hook2" element={<Artist/>}/>
        <Route exact path="/todos" element={<Todo/>}/>
        <Route exact path="/hookbooks" element={<HookTwo/>}/>
        <Route exact path="/hook3" element={<HookThree/>}/>
        <Route exact path="/hook4" element={<HookFour/>}/>
        <Route exact path="/api1" element={<ApiOne/>}/>*/}
        <Route exact path="/customers" element={<Customer/>}/>
        <Route exact path="/products" element={<Product/>}/>
        <Route exact path="/employees" element={<Employee/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
