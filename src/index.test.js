const HashMap = require('./index.js'); // import your HashMap class

describe('HashMap', () => {
    let map;

    beforeEach(() => {
        map = new HashMap();
    });

    test('should set and get a value', () => {
        map.set('apple', 'red');
        expect(map.get('apple')).toBe('red');
    });

    test('should remove a key', () => {
        map.set('banana', 'yellow');
        expect(map.remove('banana')).toBe(true);
        expect(map.get('banana')).toBeUndefined();
    });

    test('should list keys', () => {
        map.set('carrot', 'orange');
        expect(map.keys()).toContain('carrot');
    });
});
