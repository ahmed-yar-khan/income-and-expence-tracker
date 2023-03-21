// import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { meraStore ,persistor} from './store/store';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Currentbalance from "./component/current/current balance";
import History from "./component/history/history";
import Transaction from "./component/New Transaction/Transaction";
function App() {




  return <>

    <Provider store={meraStore}>
    <PersistGate loading={null} persistor={persistor}>
       <Currentbalance/>
        <History/>
        <Transaction/>





      <ToastContainer />
      </PersistGate>
    </Provider>
  </>
}



export default App;