const Point = require("../../../modules/ecs6-class/point");

describe('POINT_FUNCTIONS', function () {
    describe('CONSTRUCTOR_OF_POINT', function () {
        it('should return values of x and y after build the point', function () {
            let p1 = new Point({ x: 2, y: 4 });
            let p2 = new Point();
            expect(p1.x).toEqual(2);
            expect(p1.y).toEqual(4);
            expect(p2.x).toEqual(0);
            expect(p2.y).toEqual(0);
        });
    });
    describe('MOVE_VERTICAL_FUNCTION', function () {
        it('should return a value of y if add positive value', function () {
            let p = new Point({ x: 1, y: 3 });
            p.moveVertical(4);
            expect(p.y).toEqual(7);
        });
        it('should return a value of y if add negative value', function () {
            let p = new Point({ x: 1, y: 3 });
            p.moveVertical(-4);
            expect(p.y).toEqual(-1);
        });
    });
    describe('MOVE_HORIZONTAL_FUNCTION', function () {
        it('should return a value of x if add positive value', function () {
            let p = new Point({ x: 1, y: 3 });
            p.moveHorizontal(4);
            expect(p.x).toEqual(5);
        });
        it('should return a value of x if add negative value', function () {
            let p = new Point({ x: 1, y: 3 });
            p.moveHorizontal(-4);
            expect(p.x).toEqual(-3);
        });
    });
    describe('ERRORS', function () {
        let p = new Point({ x: 1, y: 3 });
        it('should throw error if type of value isn\'t number', function () {
            expect(() => p.moveVertical("abc")).toThrow('type of value isn\'t number');
            expect(() => p.moveVertical([9,0])).toThrow('type of value isn\'t number');
            expect(() => p.moveVertical(true)).toThrow('type of value isn\'t number');
            expect(() => p.moveHorizontal("abc")).toThrow('type of value isn\'t number');
            expect(() => p.moveHorizontal([9,0])).toThrow('type of value isn\'t number');
            expect(() => p.moveHorizontal(true)).toThrow('type of value isn\'t number');
        });
        it('should throw error if type of value isn\'t number', function () {
            expect(() => p.moveVertical()).toThrow('no argument');
            expect(() => p.moveVertical('')).toThrow('no argument');
            expect(() => p.moveHorizontal()).toThrow('no argument');
            expect(() => p.moveHorizontal('')).toThrow('no argument');
        });
    });
});