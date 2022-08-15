export default class Note {
    static all() {
        return [
            "A",
            ["A#", "Bb"],
            "B",
            "C",
            ["C#", "Db"],
            "D",
            ["D#", "Eb"],
            "E",
            "F",
            ["F#", "Gb"],
            "G",
            ["G#", "Ab"]
        ];
    }

    static of(note) {
        return new Note(note);
    }

    constructor(note) {
        this.note = note;
    }
}
