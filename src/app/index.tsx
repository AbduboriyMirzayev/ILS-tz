import Sidebar from "./modules/Sidebar";
import Style from "./App.style";
import Map from "./modules/Map";

function App() {
  return (
    <Style>
      <Sidebar />
      <Map center={{ lat: 59.84660399, lng: 30.29496392 }} />
    </Style>
  );
}

export default App;
