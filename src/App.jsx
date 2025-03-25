import './App.css'

import Menu from "./components/menu"
import Acceuil from "./pages/acceuil"
import A_propos from './pages/a_propos'
import Projets from './pages/projets'
import Competences from './pages/competences'
import Contacts from './pages/contacts'

function App() {
  return (
    <>
      <Menu />
      <Acceuil />
      <A_propos />
      <Projets />
      <Competences />
      <Contacts />
    </>
  )
}

export default App
