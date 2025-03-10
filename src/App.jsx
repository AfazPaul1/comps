import Link from "./components/link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
function App() {

    return <div>
        <Link to='/accordion'>Go to accordion</Link>
        <Link to='/dropdown'>Go to dropdown</Link>
        <Route path="/accordion">
            <AccordionPage></AccordionPage>
        </Route>
        <Route path="/dropdown">
            <DropdownPage  />
        </Route>
    </div>
}

export default App;