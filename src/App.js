import './App.css';
import Navbar from './components/navbar/Navbar';
import LiveBid from './components/liveBid/LiveBid';
import Account from './components/Account/Account';
import Popular from './components/popular/Popular';
import Footer from './components/footer/Footer';
import Home from './components/home/Home'
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <div className='main'>
          <div className='title'>
                <h1 className='live_bid_title'>Live Bid</h1>
          </div>
        <div className='live'>
          <LiveBid/>
          <LiveBid/>
          <LiveBid/>
        </div>

      </div>
      <Account/>
      <Popular/>
      <Footer/>
    </div>
  );
}

export default App;
