export class Product  {

    constructor(
    public sku:string,
    public name:string, 
    public img_url:string,
    public department:string[],
    public price:number
    ){
    }

}