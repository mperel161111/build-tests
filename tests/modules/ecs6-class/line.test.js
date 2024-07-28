const Line = require("../../../modules/ecs6-class/line");
const Point = require("../../../modules/ecs6-class/point");

describe('POINT_FUNCTIONS', function () {
    describe('CONSTRUCTOR_OF_LINE', function () {
        it('should return values of x and y after build the line', function () {
            let l1 = new Line({ point1: new Point({ x: 2, y: 4 }) });
            let l2 = new Line({});
            expect(l1.point1.x).toEqual(2);
            expect(l1.point1.y).toEqual(4);
            expect(l1.n).toBe(undefined)
            expect(l1.slope).toBe(undefined)
            expect(l2.point1.x).toEqual(0);
            expect(l2.point1.y).toEqual(0);
            expect(l2.n).toBe(undefined)
            expect(l2.slope).toBe(undefined)
        });
    });
    describe('CALCULATE_SLOPE_FUNCTION', function () {
        it('should return a slope of line', function () {
            let p1 = new Point({ x: 1, y: 3 });
            let p2 = new Point({ x: 6, y: 8 });
            let line = new Line({ point1: p1, point2: p2 });
            line.calculateSlope();
            expect(line.slope).toEqual(1);
        });
    });
    describe('CALCULATE_N_OF_LINE_FUNCTION', function () {
        it('should return the intersection of the line with the y axis', function () {
            let pp1 = new Point({ x: 1, y: 3 });
            let pp2 = new Point({ x: 6, y: 8 });
            let line1 = new Line({ point1: pp1, point2: pp2 });
            line1.calculateNOfLineFunction();
            expect(line1.n).toEqual(2);
        });
    });
    describe('GET_POINT_ON_X_ASIS_FUNCTION', function () {
        it('should return the point on the x axis', function () {
            let line2 = new Line({ n: 5, slope: 10 });
            expect(line2.getPointOnXAsis()).toEqual(new Point({ x: -0.5, y: 0 }));
        });
    });
    describe('GET_POINT_ON_Y_ASIS_FUNCTION', function () {
        it('should return the point on the y axis', function () {
            let line3 = new Line({ n: 5, slope: 10 });
            expect(line3.getPointOnYAsis()).toEqual(new Point({ x: 0, y: 5 }));
        });
    });
    describe('GET_POINT_BY_X_FUNCTION', function () {
        it('should return the point by receiving x', function () {
            let line4 = new Line({ n: 5, slope: 10 });
            expect(line4.getPointByX(6)).toEqual(new Point({ x: 6, y: 65 }));
            let ll4 = new Line({ slope: 10 });
            expect(ll4.getPointByX(6)).toEqual(new Point({ x: 6, y: 60 }))
        });
    });
    describe('GET_POINT_BY_Y_FUNCTION', function () {
        it('should return the point by receiving y', function () {
            let line5 = new Line({ n: 5, slope: 10 });
            expect(line5.getPointByY(6)).toEqual(new Point({ x: 0.1, y: 6 }));
            let ll5 = new Line({ slope: 10 });
            expect(ll5.getPointByY(6)).toEqual(new Point({ x: 0.6, y: 6 }))
        });
    });
    describe('ERRORS', function () {
        it('should throw error when send values in inappropriate types to the constructor!', function () {
            expect(() => new Line({ point1: new Point({ x: 1, y: 3 }), point2: new Point({ x: 1, y: 3 }), n: 'malky', slope: '@' })).toThrow('type of n and slope need be number');
            expect(() => new Line({ point1: 34, point2: true })).toThrow('points need be object of Point class');
        });
        it('should throw error when no points have been sent to the calculateSlope function', function () {
            ll1 = new Line({})
            expect(() => ll1.calculateSlope()).toThrow('It is impossible to divide by 0')
        })
        it('should throw error when no points have been sent to the getPointByX function', function () {
            ll2 = new Line({})
            let ll22 = new Line({ n: 5 });
            expect(() => ll2.getPointByX(3)).toThrow('It is impossible to divide by 0')
            expect(() => ll22.getPointByX(6)).toThrow('It is impossible to divide by 0')
        })
        it('should throw error when no points have been sent to the getPointByY function', function () {
            ll3 = new Line({})
            let ll33 = new Line({ n: 5 });
            expect(() => ll3.getPointByY(3)).toThrow('It is impossible to divide by 0')
            expect(() => ll33.getPointByY(6)).toThrow('It is impossible to divide by 0')
        })
    });
});