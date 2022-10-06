import axios from "axios";
import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./cummon/Header";

const el = document.querySelector("#root");
const root = createRoot(el);
// base url api
axios.defaults.baseURL = "http://127.0.0.1:8000/api";
// get token Authorization dari localStorage
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");
// console.log("Bearer " + localStorage.getItem("token"));
root.render(<Header />);
