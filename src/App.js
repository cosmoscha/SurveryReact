import SurveyRoutes from "./components/SurveyRoutes";
import InventoryProvider from "./context/InventoryProvider";

function App() {
  return (
    <InventoryProvider>
      <h1>aA survery title</h1>
      <SurveyRoutes />
    </InventoryProvider>
  );
}

export default App;
