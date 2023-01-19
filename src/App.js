import "./style/App.css";
import Routes from "./components/App/Routes";
import Footer from "./components/ui/Footer";
import Logo from "./components/ui/Logo";
// import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <div className='App-header'>
        <Logo />
      </div>
      <div className='App'>
        <Routes />
      </div>
      <Footer />
    </>
  );
}

export default App;