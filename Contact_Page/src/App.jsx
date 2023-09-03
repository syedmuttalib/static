
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css';
import Contact from './component/ContactHeader/Contact';
import Navigation  from './component/Navigation/Navigation.jsx';
import ContactForm from "./component/ContactForm/ContactForm";

function App() {
  

  return (
    <>
     <Navigation/>
     
     <main className='main_container'>
     <Contact/>
     <ContactForm/>
     </main>
     
    </>
  )
}

export default App;
