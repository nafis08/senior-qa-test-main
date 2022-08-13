export default class Locator {

    type;
    value;

    constructor(_type, _value) {
        this.type = _type;
        this.value = _value
    }

    toString(){
        return `type => [${this.type}] value => [${this.value}]`;
    }
}