import React from 'react' 
import "./scss/index.scss"
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';
function App() {

  return (
   <div class="main">
   <Header/>
   <Menu/>
   <Content/>
  </div>
  );
}

export default App;
