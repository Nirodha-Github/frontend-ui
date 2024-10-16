import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AllPost from './components/post/AllPost';
import NewPost from './components/post/NewPost';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <div className='row'>
              <div className='col-sm-3'>
                <Sidebar/>
              </div>
              <div className='col-sm-9'>
                <Routes>
                    <Route path="/" element={<Dashboard />} /> 
                    <Route path="/post" element={<AllPost />} />
                    <Route path="/post/new" element={<NewPost />} /> 
                </Routes>
              </div>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
