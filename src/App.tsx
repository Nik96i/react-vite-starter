import "@/assets/css/main.css";
import { RouterProvider } from "react-router-dom";
import { appRoutes } from "@/routes";

function App() {
  return (
    <main className="container flex min-h-screen max-w-full font-ir-sans">
      <RouterProvider router={appRoutes} />
    </main>
  );
}

export default App;
