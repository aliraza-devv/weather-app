import hotBg from './assets/Hot.jpg'
import coldBg from './assets/Cold.jpg'
import Descriptions from './components/Descriptions.jsx'


function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${hotBg})` }}>
      <div className='overlay'>
        <div className='container'>
          <div className='section section__inputs'>
            <input type='text' name='City' placeholder='Enter City...' />
            <button>°F</button>
          </div>
          <div className='section section__temperature'>
            <div className='icon'>
              <h3>London</h3>
              <img src='' alt='Weather Icon' />
              <h3>Cloudy</h3>
            </div>
            <div className='temperature'>
              <h1>34 °C</h1>
            </div>
          </div>

          {/* Bottom Description */}
          <Descriptions />
        </div>
      </div>
    </div>
  );
}

export default App;
