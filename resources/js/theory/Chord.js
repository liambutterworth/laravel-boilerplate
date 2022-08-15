export default class Chord {
    static of(symbol) {
        return new Chord(symbol);
    }

    constructor(symbol) {
        this.symbol = symbol;
    }

    intervals() {

    }
}
