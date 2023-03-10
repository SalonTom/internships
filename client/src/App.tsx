
import './App.css';
import InternshipsList from './components/InternshipsList/InternshipsList';
import Offer from './models/offer';
import OffersService from './services/offers.service';

const _offersService : OffersService = new OffersService();
let myOffers : Offer[] = _offersService.getOffers();

function App() {
  return (
  <div>
    <InternshipsList offers={myOffers}></InternshipsList>
  </div>);
}

export default App;
