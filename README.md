# Software Testing - Jest js

- Simple
  - add
  - cloneArray
- Advanced
  - API fetching

## Functions

### expect(value)

The expect function is used every time you want to test a value. You will rarely call expect by itself. Instead, you will use expect along with a "matcher" function to assert something about a value.

## Matchers

### .toBe(value)

Use .toBe to compare primitive values or to check referential identity of object instances. It calls Object.is to compare values, which is even better for testing than === strict equality operator.

### .toEqual(value)

Use .toEqual to compare recursively all properties of object instances (also known as "deep" equality). It calls Object.is to compare primitive values, which is even better for testing than === strict equality operator.

## Modifiers

### .not

If you know how to test something, .not lets you test its opposite.
