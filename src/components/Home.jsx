import { Body } from "./body";
import { NavBar } from "./Navbar";
import '../components/Home.css'
export default function Home(){
    return(
        <div className="home">
            <NavBar/>
            <Body/>
        </div>
    )
}