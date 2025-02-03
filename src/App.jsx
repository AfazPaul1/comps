import Accordion from "./components/Accordion";
import ButtonPage from "./pages/ButtonPage";
function App() {

    const items = [
        {
            label: 'Can i use react on a project?',
            content: "yes you can use react on a project. yes you can use react on a project"
        },
        {
            label: 'Can i use js on a project?',
            content: "yes you can use js on a project. yes you can use react on a project"
        },
        {
            label: 'Can i use vue on a project?',
            content: "yes you can use vue on a project. yes you can use react on a project"
        }
    ]

    return (
    
    <Accordion items = {items}></Accordion>
)
}

export default App;