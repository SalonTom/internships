import Offer from '../../models/offer';
import InternshipOffer from '../InternshipOffer/InternshipOffer';

const InternshipsList = ({offers} : {offers : Offer[]}) => {
  return <div>
    <div>
      {offers?.length}
    </div>

    {
      offers.map(offer => {
        return <InternshipOffer offer={offer}></InternshipOffer>
      })
    }
  </div>
}

export default InternshipsList;