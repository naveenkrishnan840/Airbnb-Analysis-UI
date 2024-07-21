import {HomePage} from  "./components/home_page"
import {Header} from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { BodyGrid } from "./components/BodyGrid";
import {createContext, useState} from "react";
 

export const reactMainContext =  createContext(null);

function App() {

  const [selectedRecords, setSelectedRecords] = useState([]); 
  return (
    <>
    <BrowserRouter>
      <div>
        <Header></Header>
        <reactMainContext.Provider value={{setSelectedRecords, selectedRecords}}>
          <Routes>
              <Route path="/" element={<HomePage/>} ></Route>
              <Route path="show" element={<BodyGrid/>} ></Route>
          </Routes>
        </reactMainContext.Provider>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;
