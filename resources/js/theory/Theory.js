import data from '@theory/data.json' assert { type: json };
import Interval from '@theory/Interval';

export default class Theory {
    static intervals() {
        return data.intervals.map(interval => new Interval(interval));
    }
}
