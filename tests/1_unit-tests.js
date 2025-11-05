const chai = require('chai');
const assert = chai.assert;

suite('Unit Tests', function () {

  suite('Basic Assertions', function () {

    // #1
   test('#isNull, #isNotNull', function () {
  assert.isNull(null, 'This is an optional error description - e.g. null is null'); // correct
  assert.isNotNull(1, '1 is not null'); // correct
});


    // #2
    test('#isDefined, #isUndefined', function () {
      assert.isDefined('foo', 'foo is defined');
      assert.isUndefined(undefined, 'undefined is undefined');
    });

    // #3
    test('#isOk, #isNotOk', function () {
      assert.isOk(true, 'true is truthy');
      assert.isNotOk(false, 'false is not truthy');
    });

    // #4
    test('#isTrue, #isNotTrue', function () {
      assert.isTrue(true, 'true is true');
      assert.isNotTrue(false, 'false is not true');
    });

  });

  suite('Equality', function () {

    // #5
    test('#equal, #notEqual', function () {
      assert.equal(1, 1, '1 equals 1');
      assert.notEqual(1, 2, '1 does not equal 2');
    });

    // #6
    test('#strictEqual, #notStrictEqual', function () {
      assert.strictEqual(1, 1, '1 strictly equals 1');
      assert.notStrictEqual(1, '1', '1 strictly does not equal "1"');
    });

    // #7
    test('#deepEqual, #notDeepEqual', function () {
      assert.deepEqual({ a: 1 }, { a: 1 }, 'objects are deeply equal');
      assert.notDeepEqual({ a: 1 }, { a: 2 }, 'objects are not deeply equal');
    });

  });

  suite('Comparisons', function () {

    // #8
    test('#isAbove, #isAtMost', function () {
      assert.isAbove(5, 2, '5 is above 2');
      assert.isAtMost(2, 2, '2 is at most 2');
    });

    // #9
    test('#isBelow, #isAtLeast', function () {
      assert.isBelow(2, 5, '2 is below 5');
      assert.isAtLeast(5, 5, '5 is at least 5');
    });

    // #10
    test('#approximately', function () {
      assert.approximately(1.5, 1.0, 0.5, '1.5 is approximately 1.0 ±0.5');
    });

  });

  suite('Arrays', function () {

    // #11
    test('#isArray, #isNotArray', function () {
      assert.isArray([], '[] is an array');
      assert.isNotArray({}, '{} is not an array');
    });

    // #12
    test('Array #include, #notInclude', function () {
      assert.include([1,2,3], 2, 'array includes 2');
      assert.notInclude([1,2,3], 4, 'array does not include 4');
    });

  });

  suite('Strings', function () {

    // #13
    test('#isString, #isNotString', function () {
      assert.isString('foo', '"foo" is a string');
      assert.isNotString(1, '1 is not a string');
    });

    // #14
    test('String #include, #notInclude', function () {
      assert.include('foobar', 'foo', '"foobar" includes "foo"');
      assert.notInclude('foobar', 'baz', '"foobar" does not include "baz"');
    });

    // #15
    test('#match, #notMatch', function () {
      assert.match('foobar', /foo/, '"foobar" matches /foo/');
      assert.notMatch('foobar', /baz/, '"foobar" does not match /baz/');
    });

  });

  suite('Objects', function () {

    // #16
    test('#property, #notProperty', function () {
      assert.property({ foo: 1 }, 'foo', 'object has property "foo"');
      assert.notProperty({ foo: 1 }, 'bar', 'object does not have property "bar"');
    });

    // #17
    test('#typeOf, #notTypeOf', function () {
      assert.typeOf('foo', 'string', '"foo" is a string');
      assert.notTypeOf(1, 'string', '1 is not a string');
    });

    // #18
    test('#instanceOf, #notInstanceOf', function () {
      assert.instanceOf(new Date(), Date, 'new Date() is an instance of Date');
      assert.notInstanceOf({}, Date, '{} is not an instance of Date');
    });

  });

});
