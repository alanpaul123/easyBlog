import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blogs from "./pages/Blogs";
import View from "./components/View";
import ErrorPage from "./pages/ErrorPage";
import Authors from "./pages/Authors";
import AuthorProjects from "./pages/AuthorProjects";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/:id/view" element={<View />}></Route>
        <Route path="/authors" element={<Authors />}></Route>
        <Route path="/:id/author" element={<AuthorProjects />}></Route>
        <Route path="/:id/author/create" element={<CreatePost />}></Route>
        <Route path="/:id/author/edit" element={<EditPost />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
