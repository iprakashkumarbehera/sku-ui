
export class RetailStoreModel{
    public location : string;
    public department : string;
    public category : string;
    public subCategory : string;

    constructor(location : string = "",department : string = "",category : string = "",subCategory : string = "",){
        this.location = location;
        this.department = department;
        this.category = category;
        this.subCategory = subCategory;
    }
}