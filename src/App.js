import Home from "./pages/home/home";
import { ContextProvider } from "./store/context";

function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}

export default App;
