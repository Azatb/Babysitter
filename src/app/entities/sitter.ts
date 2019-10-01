export class Sitter{
    _id: string;
    dataFrom: string;
    type: string;
    username: string;
    password: string;
    name: String;
    gender: String;
    birthDate: Date;
    noCriminalRecord: Boolean = false; //True = no crimes
    noChildRecord: Boolean = false;
    hourlyWage: number;
    address: String;
    zipcode: String;
    city: String;

    // private calendar: any;
}