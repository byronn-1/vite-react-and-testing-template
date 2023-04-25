import  DataFetch  from "./src/DataFetch/routes/index.jsx";
import { TestComponent } from "./src/LandingPage/Components/TestComponent";

export const routes=[
    { path: "/", element: <TestComponent /> },
    DataFetch
]