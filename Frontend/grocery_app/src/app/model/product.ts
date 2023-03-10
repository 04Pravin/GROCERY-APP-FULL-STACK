import { ManfDetails } from "./manf-details";

export class Product {

    constructor(
        public id:number,
        public name:string,
        public category:string,
        public brand:string,
        public price:number,
        public quantity:number,
        public discount:number,
        public manufDate:Date,
        public expDate:Date,
        public rating:number,
        public benefits:string,
        public unit:string,
        public availablity:string,
        public orginOfCountry:string,
        public barcodeNum:string,
        public storage:string,
        public usedFor:string,
        public container:string,
        public manfDetails:ManfDetails,
    ){}
}
