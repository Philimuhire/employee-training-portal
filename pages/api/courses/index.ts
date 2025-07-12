import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import Course from '@/models/course';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { search } = req.query;

  try {
    let query = {};

    if (search && typeof search === 'string') {
      const regex = new RegExp(search, 'i');
      query = {
        $or: [
          { title: regex },
          { shortDescription: regex },
        ]
      };
    }

    const courses = await Course.find(query).lean(); 
    res.status(200).json({ courses });
  } catch (error) {
    console.error('API /courses error:', error);
    res.status(500).json({ message: 'Failed to fetch courses' });
  }
}
