const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require('../../modules/geometry-calculation')
const Point = require('../../modules/ecs6-class/point');
const Line = require('../../modules/ecs6-class/line')

describe('GEOMETRY_CALCULATION', () => {
    describe('CALCULATE_DISTANSE_FUNCTION', () => {
        it('should return a distance between two points', () => {
            expect(calculateDistance(new Point({ x: 1, y: 3 }), new Point({ x: 4, y: 8 }))).toEqual(3);
        });
        describe('ERRORS', () => {
            it('should throw error when no points have been sent to the calculateDistance function', () => {
                expect(() => calculateDistance()).toThrow('two points were not received');
            });
        });
    });
    describe('CALCULATE_JUNCTION_POINT_FUNCTION', () => {
        it('should return junction point between two lines', () => {
            let l1 = new Line({ point1: new Point({ x: 1, y: 4 }), point2: new Point({ x: 2, y: 7 }) });
            let l2 = new Line({ point1: new Point({ x: 6, y: 12 }), point2: new Point({ x: 3, y: 8 }) });
            expect(calculateJunctionPoint(l1, l2)).toEqual({ "x": 1.7999999999999998, "y": 6.3999999999999995 });
        });
        it('should return true if two lines with the same slope and the same n were obtained', () => {
            let l1 = new Line({ point1: new Point({ x: 1, y: 4 }), point2: new Point({ x: 2, y: 2 }) });
            let l2 = new Line({ point1: new Point({ x: 0, y: 6 }), point2: new Point({ x: -12, y: 30 }) });
            expect(calculateJunctionPoint(l1, l2)).toEqual(true);
        });
        it('should return false if two lines with the same slope and not the same n were obtained', () => {
            let l1 = new Line({ point1: new Point({ x: 1, y: 4 }), point2: new Point({ x: 2, y: 2 }) });
            let l2 = new Line({ point1: new Point({ x: 2, y: 8 }), point2: new Point({ x: 4, y: 4 }) });
            expect(calculateJunctionPoint(l1, l2)).toEqual(false);
        });
        describe('ERRORS', () => {
            it('should throw error when no points have been sent to the calculateJunctionPoint function', () => {
                let l1 = new Line({});
                let l2 = new Line({});
                expect(() => calculateJunctionPoint(l1, l2)).toThrow('It is impossible to divide by 0');
            });
            it('should throw error when no lines have been sent to the calculateJunctionPoint function', () => {
                expect(() => calculateJunctionPoint()).toThrow('two lines were not received');
            });
        });
    });
    describe('IS_POINT_ON_LINE_FUNCTION', () => {
        it('should return true if the point on the line', () => {
            let l = new Line({ point1: new Point({ x: 1, y: 4 }), point2: new Point({ x: 2, y: 2 }) });
            let p = new Point({ x: 1.5, y: 3 });
            expect(isPointOnLine(l, p)).toBe(true);
        });
        it('should return false if the point don\'t on the line', () => {
            let l = new Line({ point1: new Point({ x: 1, y: 4 }), point2: new Point({ x: 2, y: 2 }) });
            let p = new Point({ x: 3, y: 7 });
            expect(isPointOnLine(l, p)).toBe(false);
        });
        describe('ERRORS', () => {
            it('should throw error when no points have been sent to the isPointOnLine function', () => {
                let l = new Line({});
                let p = new Point({ x: 3, y: 7 });
                expect(() => isPointOnLine(l, p)).toThrow('It is impossible to divide by 0');
            });
            it('should throw error when nothing was sent', () => {
                expect(() => isPointOnLine()).toThrow('line were not received');
            });
            it('should throw error when send only line', () => {
                let l = new Line({});
                expect(() => isPointOnLine(l)).toThrow('point were not received');
            });
            it('should throw error when send line that not instance of Line', () => {
                let l = new Point({});
                expect(() => isPointOnLine(l)).toThrow('line were not received');
            });
        });
    });
});