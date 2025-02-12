import { Routes, Route, Link } from "react-router-dom"
import LogIn from "./LogIn"
import IndividualBooks from "./IndividualBooks"
import LibraryCatalog from "./LibraryCatalog"
import Home from "./Home"
import SignUp from "./SignUp"
const App = () => {

  return (
    <>
     <h1>Book Buddy!</h1>

    <Link to = "/">Home</Link>
    <Link to ="Catalog">Library Catalog</Link>
    <Link to ="Log-In" >Log In</Link>
    <Link to = "Book-Details"></Link>


    <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path ="/Catalog" element ={<LibraryCatalog/>}/> 
      <Route path ="Log-In" element ={<LogIn/>}/>
      <Route path ="Book-Details" element= {<IndividualBooks/>}/>
      <Route path = "/SignUp" element ={<SignUp/>}/>
    </Routes>



    </>
  )
}

export default App
