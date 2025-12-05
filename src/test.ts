import app from './app.js';
import request from 'supertest';
import assert from 'assert';

describe('GET /', () => {
    it('should return Hey all', async () => {
        const res = await request(app).get('/');
        assert.strictEqual(res.text, 'Hey all');
    });
});

describe('GET /hello-world', () => {
    it('should return Hello World', async () => {
        const res = await request(app).get('/hello-world');
        assert.strictEqual(res.text, 'Hello World');
    });
});
