import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from './pages/ButtonPage'
import Sidebar from './components/Sidebar'
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
import PlaylistPage from './pages/PlaylistPage'
import {Provider} from 'react-redux'
import {store} from './store'
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
            <Route path='/modal'>
                <ModalPage></ModalPage>
            </Route>
            <Route path='/table'>
                <TablePage></TablePage>
            </Route>
            <Route path='/counter'>
                <CounterPage initialCount={10}></CounterPage>
            </Route>
            <Route path="/playlist">
            <Provider store={store}>
                <PlaylistPage></PlaylistPage>
            </Provider>
            </Route>
        </div>
    </div>
}

export default App;