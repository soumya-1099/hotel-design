import './App.css';
import HeaderComp from './Components/HeaderComp'
import Slider from './Components/Slider'
import Category from './Components/Category'
import FooterComp from './Components/FooterComp';
function App() {
  return (
    <div className="App">
    <HeaderComp/>
    <Slider/>
    <Category categoryName = "Recommend (5)"
              categoryName1 = "South Indian (5)"
              categoryName2 = "Dosa (2)"
              categoryName3 = "Idli & Vada (7)"
              categoryName4 = "Baths(5)"
              categoryName5 = "Roti (2)"/>
    <FooterComp
    />
    </div>
  );
}

export default App;
