import Spa from "./components/Spa";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Spa />
    </ThemeProvider>
  );
};

export default App;
