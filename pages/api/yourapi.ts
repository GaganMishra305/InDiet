import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialize the CORS middleware
const cors = initMiddleware(
  Cors({
    origin: '*', // Allow requests only from localhost:4000
    methods: ['GET', 'POST'], // Allow only GET and POST methods
  })
);

// Helper function to initialize middleware
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Run CORS middleware
  return cors(req, res, async () => {
    // Your API logic here
    res.status(200).json({ message: 'Hello from your API!' });
  });
}
