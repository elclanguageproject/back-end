import axios from 'axios';
import '../../src/config/env.config';

describe('E2E functionality working as expected', () => {
  it('Calls the root url for the server and json message', async () => {
    try {
      let request = await axios.get(process.env.BACKEND_URL as string);
      let data = request.data;
      expect(data?.active).toBe(true);
    } catch (error) {
      console.error(error);
    }
  });
});
