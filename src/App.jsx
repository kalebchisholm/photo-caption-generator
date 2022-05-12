import { CaptionList } from './pages/CaptionList'
import { Landing } from './pages/Landing'
import { 
  BrowserRouter as Router, 
  Route, 
  Routes
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/generator' element={<CaptionList/>}/>
      </Routes>
    </Router>
  );
}

