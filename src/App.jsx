/** 
 * FILE: App.jsx
 * AUTHOR: Kaleb Chisholm
 * LAST MODIFIED: 05/12/2022
*/

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

