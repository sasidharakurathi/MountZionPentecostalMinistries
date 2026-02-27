import api from './api';

describe('API Service (Axios Instance)', () => {
    it('should have the correct default baseURL', () => {
        expect(api.defaults.baseURL).toBe('http://localhost:5000/api');
    });

    it('should have the correct default Content-Type header', () => {
        expect(api.defaults.headers['Content-Type']).toBe('application/json');
    });

    it('should have a timeout of 10 seconds', () => {
        expect(api.defaults.timeout).toBe(10000);
    });

    it('should have request interceptors configured', () => {
        expect(api.interceptors.request.handlers.length).toBeGreaterThanOrEqual(1);
    });

    it('should have response interceptors configured', () => {
        expect(api.interceptors.response.handlers.length).toBeGreaterThanOrEqual(1);
    });
});
