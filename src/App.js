import "./App.css";
import Dashboard from "./Dashboard";
import UserList from "./UserList";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import Products from "./Products";
import CreateUser from "./CreateUser";
import { Link } from "react-router-dom";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";
import Portal from "./Portal";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/portal" element={<Portal></Portal>}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="view-user/:id" element={<ViewUser />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="edit-user/:id" element={<EditUser />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
