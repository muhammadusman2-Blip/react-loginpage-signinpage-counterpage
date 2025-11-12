import { BrowserRouter, Routes,Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Aboutpage from "../pages/Aboutpage";
import NotFoundPage from "../pages/Notefoundpage";
import SignUp from "../component/signup";
import Counter from "../pages/counter";
import Navbar from "../pages/Navbar";
import Firstapi from "../pages/firstapifetchdata/firstapifetchdata";
import Signin from "../component/signin";
import Nike from "../pages/Nike";
import Textarea from "../pages/textarea";

function Approuter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="about" element={<Aboutpage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path="login" element={<Signin/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="counter" element={<Counter/>}/>
            <Route path="navbar" element={<Navbar/>}/>
            <Route path="api" element={<Firstapi/>}/>
            <Route path="nike" element={<Nike/>}/>
            <Route path="text" element={<Textarea/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Approuter;