import Application from "./Application";
import { createRoot } from "react-dom/client";
import "./style.css";

const rootElement = createRoot(document.getElementById("root")!); //* ! = a non-null assertion operator in ts
rootElement.render(<Application />);
