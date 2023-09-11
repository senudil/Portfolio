import './App.css';

import NavBar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/contact';
import Work from './components/Works/work';

import A from './assets/UI/A.png';
import B from './assets/UI/B.png';
import C from './assets/UI/C.png'; 
import D from './assets/UI/D.png';


import E from './assets/DC/E.png';
import F from './assets/DC/F.png';
import G from './assets/DC/G.png';
import H from './assets/DC/H.png';

function App() {
  const images1 = [A,B,C,D,];

  const images2 = [E,F,G,H,];

  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <h3 style={{fontSize: '2.5rem',fontWeight: '600',color: '#fff'}}>My <span style={{color:'yellow'}}>Portfolio</span></h3>
      <Work images={images1} title={"UI"} />
      <Work images={images2} title={"Digital Content"}/>
      <Contact />
    </div>
  );
}

export default App;
