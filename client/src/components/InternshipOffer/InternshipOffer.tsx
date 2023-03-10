import Offer from '../../models/offer';

const InternshipOffer = ({ offer } : { offer : Offer}) => {
  return <div>
    <h1>{offer.jobTitle}</h1>
    <div>{offer.companyName}</div>
    <div>{offer.lastRaiseDate.toUTCString()}</div>
    <div>{offer.location}</div>
  </div>
}

export default InternshipOffer;