import { createRoot } from "react-dom/client";
import { App } from "./App";


const rootElement = createRoot(document.getElementById("root")!); //* ! = a non-null assertion operator in ts
rootElement.render(<App />);
