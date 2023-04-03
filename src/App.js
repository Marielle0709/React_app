
import { Accueil } from './views/Accueil';
function App() {
    return (
      <div>
     
        <Routes>
          <Route path="/" element={<Accueil/>}></Route>
          
        </Routes>
      </div>
    );
  }
export default App;