import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import Course from '@/models/course';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { search, page = '1', limit = '6' } = req.query;

  const pageNumber = parseInt(page as string, 10);
  const limitNumber = parseInt(limit as string, 10);
  const skip = (pageNumber - 1) * limitNumber; 

  try {
    let query = {};

    if (req.query.ids) {
      const idsArray = (req.query.ids as string).split(',');
      query = { _id: { $in: idsArray } };
    }

    if (search && typeof search === 'string') {
      const regex = new RegExp(search, 'i');
      query = {
        $or: [{ title: regex }, { shortDescription: regex }],
      };
    }

    const total = await Course.countDocuments(query);

    const courses = await Course.find(query)
      .skip(skip)
      .limit(limitNumber)
      .lean();

    res.status(200).json({
      courses,
      total,
      page: pageNumber,
      totalPages: Math.ceil(total / limitNumber),
    });
  } catch (error) {
    console.error('API /courses error:', error);
    res.status(500).json({ message: 'Failed to fetch courses' });
  }
}
