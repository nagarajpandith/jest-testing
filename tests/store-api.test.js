const fetch = require('node-fetch');
import {chocolatesList} from '../results/chocolates.js'


describe('Test the store api', () => {

test('Make sure api is working',async  () => {
    const res= await  fetch('http://localhost:5000')
    expect(res.status).toBe(200)
});
  

test('Make sure the route /chocolates is working',async  () => {
    const res= await  fetch('http://localhost:5000/chocolates')
    expect(res.status).toBe(200)
    const json= await res.json()
    expect(json).not.toBeNull()
    expect(json).toEqual(chocolatesList)
});

test('Make sure the route /chocolat not is working',async  () => {
    const res= await  fetch('http://localhost:5000/chocolat')
    expect(res.status).toBe(404)
    expect(await res.json()).toEqual({})
});

});