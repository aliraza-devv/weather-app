import hotBg from './assets/Hot.jpg'
import coldBg from './assets/Cold.jpg'


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${hotBg})` }}>
      <div className='overlay'>
        <div className='container'>
          
        </div>
      </div>
    </div>
  );
}

export default App;
