
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  
  return (
    <div className="App">
      <Header />
      <main>
          <div className='row'>
            <div className='col-md-3'>
              <Sidebar />
            </div>
            <div className='col-md-9'>
              <Form />
            </div>
          </div>
      </main>
    </div>
  );
}

export default App;
 