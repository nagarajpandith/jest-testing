const axios = require('axios');
import { chocolatesList } from '../src/chocolates.js';

describe('Test the store api', () => {
  test('Make sure api is working', async () => {
    const res = await axios.get('http://localhost:9999');
    expect(res.status).toBe(200);
  });

  test('Make sure the route /chocolates is working', async () => {
    const res = await axios.get('http://localhost:9999/chocolates');
    expect(res.status).toBe(200);
    const json = res.data;
    expect(json).not.toBeNull();
    expect(json).toEqual(chocolatesList);
  });

  test('Make sure the route /chocolat is not working', async () => {
    try {
      await axios.get('http://localhost:9999/chocolat');
    } catch (e) {
      expect(e.response.status).toBe(404);
      expect(e.response.data).toEqual({});
    }
  });
});
