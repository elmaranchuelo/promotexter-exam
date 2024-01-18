
import request from 'supertest';
import app from '../src/server';

describe('Item API', () => {
  const newItem = { name: 'New Item' };

  test('POST /items - Create a new item', async () => {
    const response = await request(app)
      .post('/items')
      .send(newItem);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('name', 'New Item');
  });

  test('GET /items - Retrieve all items', async () => {
    const response = await request(app).get('/items');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
