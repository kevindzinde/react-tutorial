import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';

function App() {
 return(
  <>
  <Header/>
  <Food/>
  <UserGreeting isLoggedIn={true} username="Kevin Dzinde" />
  <Card name="Kevin Dzinde" about="Software Engineer and Graphics Designer" status={true}/>
  <Card name="Karen Dzinde" about="Software Engineer and Innovations Manager" status={false}/>
  <Card/>
  <Footer/>
  </>
 );
 
}

export default App
