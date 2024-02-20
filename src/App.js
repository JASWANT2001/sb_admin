import "./App.css";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import UserList from "./UserList";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import Products from "./Products";
import CreateUser from "./CreateUser";
import { Link } from "react-router-dom";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";


function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <SideBar></SideBar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <TopBar></TopBar>
            <div class="container-fluid">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/user-list" element={<UserList />} />
                <Route path="/view-user/:id" element={<ViewUser />} />
                <Route path="/create-user" element={<CreateUser />} />
                <Route path="/edit-user/:id" element={<EditUser />} />
                <Route path="/products" element={<Products />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
