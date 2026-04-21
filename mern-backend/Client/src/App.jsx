import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserCRUD from "./components/UserCRUD";

function App() {
  return (
    <>
      <UserCRUD />
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;