import { useContext, useState } from "react";

import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blogs from "./pages/Blogs";
import View from "./components/View";
import ErrorPage from "./pages/ErrorPage";

import AuthorProjects from "./pages/AuthorProjects";
import CreatePost from "./components/CreatePost";
import { tokenAuthContext } from "./contexts/AuthContext";

function App() {
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/view-blog" element={<View />}></Route>
        <Route
          path="/blogs"
          element={isAuthorised ? <Blogs /> : <Navigate to={"/login"} />}
        ></Route>

        <Route
          path="/author"
          element={
            isAuthorised ? <AuthorProjects /> : <Navigate to={"/author"} />
          }
        ></Route>

        <Route
          path="/author-create"
          element={
            isAuthorised ? <CreatePost /> : <Navigate to={"/author-create"} />
          }
        ></Route>

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
