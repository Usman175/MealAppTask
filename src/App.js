import Layout from "./components/Layout/Layout";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return <>
    <Layout />
    <ToastContainer />
  </>;
}

export default App;
