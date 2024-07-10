export class Contact {
    public _id?: string;
    public id?: string;

    constructor(
    public name: string,
    public email: string,
    public phone: string,
    public imgUrl: string,
    public group?: Contact[]
    ) {}
}
