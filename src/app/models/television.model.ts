export class Television{
    [key: string]: any; // Allows additional properties like 'id'

    constructor(public productTitle:string,public productImage:string,public description:string){
        
    }
}