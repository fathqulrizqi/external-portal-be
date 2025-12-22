import request from 'supertest';
import app from '../src/main.js';

const baseUrl = '/api/distro-po/master-achievement';
let createdId;

describe('Distro_PO_MasterAchievement API', () => {
  const sample = {
    customerCode: 'C0001',
    customerName: 'PT ABC',
    city: 'Jakarta',
    targetQty: 10000,
    targetAmount: 500000000,
    vehicle: '2W',
    vehicleId: '2W ni',
    periodYear: 2025
  };

  it('should create a new MasterAchievement', async () => {
    const res = await request(app).post(baseUrl).send(sample);
    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBeDefined();
    createdId = res.body.id;
  });

  it('should get all MasterAchievements', async () => {
    const res = await request(app).get(baseUrl);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get MasterAchievement by id', async () => {
    const res = await request(app).get(`${baseUrl}/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(createdId);
  });

  it('should update MasterAchievement', async () => {
    const res = await request(app).put(`${baseUrl}/${createdId}`).send({ ...sample, city: 'Bandung' });
    expect(res.statusCode).toBe(200);
    expect(res.body.city).toBe('Bandung');
  });

  it('should delete MasterAchievement', async () => {
    const res = await request(app).delete(`${baseUrl}/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it('should return 404 for deleted MasterAchievement', async () => {
    const res = await request(app).get(`${baseUrl}/${createdId}`);
    expect(res.statusCode).toBe(404);
  });
});
