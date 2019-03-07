export class Person {
    public p_name: string;
    public p_address: string;
    public p_phone: number;

    constructor(name: string, add: string, phone: number){
        this.p_name= name;
        this.p_address = add;
        this.p_phone = phone;
    }
}