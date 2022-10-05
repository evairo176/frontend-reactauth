import axios from "axios";
import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./cummon/Header";

const el = document.querySelector("#root");
const root = createRoot(el);
axios.defaults.baseURL = "http://127.0.0.1:8000/api";
root.render(<Header />);
