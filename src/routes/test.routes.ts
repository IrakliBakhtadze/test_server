import { Router } from 'express';

export const testRoutes = Router();

testRoutes.get('/', (req, res) => {
  console.log('first');
  res.send('get method');
});

testRoutes.post('/', (req, res) => {
  console.log('first');
  res.send('post method');
});
