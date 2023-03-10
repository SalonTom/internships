export default class Offer {
  
  constructor (
    public jobTitle : string,
    public location : string,
    public companyName : string,
    public lastRaiseDate : Date = new Date(),
    public isPositive : boolean = false
  ) {};
}