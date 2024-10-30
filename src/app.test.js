const app = require('./app');
const supertest = require('supertest');
const request = supertest(app);

describe('/test endpoint', () => {
  it('should return a response', async () => {
    const response = await request.get('/test');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});

describe('/joke endpoint', () => {
    it('should return a response', async () => {
        const response = await request.get('/joke');
        expect(response.status).toBe(200);
        expect(response.text).toBe('What do you call a bear with no teeth? A gummy bear!');
    });
});

describe('/joke-of-the-day endpoint', () => {
    it('should return a joke based on the time of day', async () => {
        const hour = new Date().getHours();
        const jokes = [
            "Why don't scientists trust atoms? Because they make up everything!",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "Why don't skeletons fight each other? They don't have the guts!",
            "What do you call fake spaghetti? An impasta!",
            "Why did the bicycle fall over? Because it was two-tired!"
        ];
        const jokeIndex = hour % jokes.length;
        const expectedJoke = jokes[jokeIndex];

        const response = await request.get('/joke-of-the-day');
        expect(response.status).toBe(200);
        expect(response.text).toBe(expectedJoke);
    });
});
