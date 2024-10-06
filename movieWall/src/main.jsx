import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import OmdbMovies from "./OmdbMovies.jsx";
import OmdbMov from "./OmdbMov.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <OmdbMovies /> */}
    <OmdbMov />
  </StrictMode>
);
