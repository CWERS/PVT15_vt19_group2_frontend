export class Badge {

    private _id: number;
    private _name: String;
    private _description: String;
    private _image: String;



    constructor(id: number, name: String, description: String, image: String) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._image = image;


    }
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }

    get description(): String {
        return this._description;
    }

    set description(value: String) {
        this._description = value;
    }

    get image(): String {
        return this._image;
    }

    set image(value: String) {
        this._image = value;
    }



}
