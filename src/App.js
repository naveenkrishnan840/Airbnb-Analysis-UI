import {HomePage} from  "./components/home_page"
import {Header} from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { BodyGrid } from "./components/BodyGrid";
import {createContext, useState} from "react";
 

export const reactMainContext =  createContext(null);

function App() {

  const [selectedRecords, setSelectedRecords] = useState([]); 
  const [propertyWiseRecords, setPropertyWiseRecords] = useState([]); 
  const [roomWiseRecords, setRoomWiseRecords] = useState([]); 
  const [countryWiseRecords, setCountryWiseRecords] = useState([]); 
  const [reviewsWiseRecords, setReviewsWiseRecords] = useState([]); 
  const [dataDetails, setDataDetails] = useState({});
  const [filterRecords, setFilterRecords] = useState({});
  const [docsCount, setDocsCount] = useState(0);
  const [showCount, setShowCount] = useState(0);
  const [searchRecords, setSearchRecords] = useState([]);
  
  return (
    <>
    <BrowserRouter>
      <div>
        <Header></Header>
        <reactMainContext.Provider value={{setSelectedRecords, selectedRecords, propertyWiseRecords, setPropertyWiseRecords, 
                                roomWiseRecords, setRoomWiseRecords, countryWiseRecords, setCountryWiseRecords, setReviewsWiseRecords, 
                                reviewsWiseRecords, setDataDetails, dataDetails, filterRecords, setFilterRecords, docsCount, setDocsCount,
                                showCount, setShowCount, searchRecords, setSearchRecords}}>
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
