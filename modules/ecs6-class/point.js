class Point {
    constructor({x=0, y=0}={}) {
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        if(!value)
            throw new Error('no argument')
        if(typeof(value) != 'number')
            throw new Error('type of value isn\'t number')
        this.y += value;
    }
    moveHorizontal(value) {
        if(!value)
            throw new Error('no argument')
        if(typeof(value) != 'number')
            throw new Error('type of value isn\'t number')
        this.x += value;
    }
}

module.exports = Point