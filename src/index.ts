export class Bottles {
    static bottlesMap = {
        'default': (n) => `${n} bottles of beer`,
        '1': (n) => '1 bottle of beer',
        '0': (n) => 'no more bottles of beer',
    };

    static actionMap = {
        'default': 'Take one down and pass it around',
        '1': `Take it down and pass it around`,
        '0': `Go to the store and buy some more`,
    }

    getBottlesLine(n) {
        return Bottles.bottlesMap[n] ? Bottles.bottlesMap[n](n) : Bottles.bottlesMap['default'](n);
    }

    getActionsLine(n) {
        return Bottles.actionMap[n] ? Bottles.actionMap[n] : Bottles.actionMap['default'];
    }

    buildVerse(bottlesOnTheWall: number) {
        const current = this.getBottlesLine(bottlesOnTheWall);
        const next = this.getBottlesLine(bottlesOnTheWall > 0 ? bottlesOnTheWall - 1: 99);
        const action = this.getActionsLine(bottlesOnTheWall);

        return `${current.charAt(0).toUpperCase()}${current.slice(1)} on the wall, ${current}.
${action}, ${next} on the wall.`;
    }

    buildVerses(start: number, end: number) {
        let arr: number[] = [];
        for(let x = start; x >= end; x--) {
            arr.push(x);
        }

        return arr.map(curr => (this.buildVerse(curr))).join(`\n\n`);
    }

    verse(bottlesOnTheWall: number) {
        return `<<-VERSE
${this.buildVerse(bottlesOnTheWall)}
VERSE`;
    }

    verses(start: number, end: number) {
        return `<<-VERSES
${this.buildVerses(start, end)}
VERSES`
    }

    song() {
        return `<<-SONG
${this.buildVerses(99, 0)}
    SONG`
    }
}

export default Bottles;
