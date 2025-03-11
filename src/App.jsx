import Link from "./components/link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from './pages/ButtonPage'
import Sidebar from './components/Sidebar'
function App() {

    return <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <Sidebar  />
        <div className="col-span-5">
            <Route path="/accordion">
                <AccordionPage></AccordionPage>
            </Route>
            <Route path="/">
                <DropdownPage  />
            </Route>
            <Route path='/buttons'>
                <ButtonPage></ButtonPage>
            </Route>
        </div>
    </div>
}

export default App;