import Header from "./components/Header/Header";
import SearchArea from "./components/SearchArea/SearchArea";
import TaskArea from "./components/TaskArea/TaskArea";
import Section from "./Styles";

function App() {
  return (
    <Section>
      <Header/>
      <SearchArea/>
      <TaskArea classname="tasks"/>
    </Section>
    
  )
}

export default App
