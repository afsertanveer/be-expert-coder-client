import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';


function App() {
  return (
    <div className="all-backgroud">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}
export default App;
