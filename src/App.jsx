import { MainLayout } from './layouts/MainLayout';
import './App.css';
import { StepProvider } from './context/StepContext';

function App() {
  return (
    <AppState>
      <div className="App text-inter">
        <MainLayout />
      </div>
    </AppState>
  );
}

const AppState = ({ children }) => {
    return (
      <StepProvider>
        { children }
      </StepProvider>
    )
} 

export default App;
