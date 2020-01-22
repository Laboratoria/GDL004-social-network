import { createUserFirebase, logInUserFirebase, logInWithFacebook } from '../src/Firebase/firebase.js';

describe('createUserFirebase', () => {
  it('Debería ser una función', () => {
    expect(typeof createUserFirebase).toBe('function');
  });
});

describe('logInUserFirebase', () => {
  it('Debería ser una función', () => {
    expect(typeof logInUserFirebase).toBe('function');
  });
});

describe('logInWithFacebook', () => {
  it('Debería ser una función', () => {
    expect(typeof logInWithFacebook).toBe('function');
  });
});
