import Offer from '../models/offer';


export default class OffersService {

  private _offers : Offer[] = [
    new Offer('Assistant', 'Lanzarote', 'Calima surf school'),
    new Offer('Software development intern', 'Canada', 'UKG'),
    new Offer('Rental Agent', 'Lonfon', 'RodaSurfer'),
  ];

  public getOffers() : Offer[] {
    return this._offers;
  } 
}