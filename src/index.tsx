/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from "react-dom/client";
import App from "./components/app";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App initialData={(window as any).initialData}/>);
