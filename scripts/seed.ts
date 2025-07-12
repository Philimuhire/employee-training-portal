import mongoose from 'mongoose';
import Course from '../models/course';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI!;

const sampleCourses = [
  {
    title: 'Introduction to Web Development',
    shortDescription: 'Learn the basics of HTML, CSS, and JavaScript.',
    fullDescription: 'This course will walk you through the foundations of building modern websites using HTML, CSS, and JavaScript. It’s perfect for beginners.',
    duration: '4 weeks',
    instructor: 'Philbert',
    prerequisites: [],
  },
  {
    title: 'Advanced React & Redux',
    shortDescription: 'Deep dive into building scalable React apps.',
    fullDescription: 'Take your React skills to the next level. Learn advanced concepts including Redux Toolkit, middleware, and performance optimization.',
    duration: '6 weeks',
    instructor: 'Prince',
    prerequisites: ['Introduction to Web Development'],
  },
  {
    title: 'Database Design with MongoDB',
    shortDescription: 'Master NoSQL database design and querying.',
    fullDescription: 'This course introduces you to MongoDB, covering schema design, indexing, aggregation pipelines, and best practices for NoSQL data modeling.',
    duration: '5 weeks',
    instructor: 'Norbert',
    prerequisites: ['Introduction to Web Development'],
  },
  {
    title: 'TypeScript for JavaScript Developers',
    shortDescription: 'Learn static typing and powerful features in TypeScript.',
    fullDescription: 'A step-by-step guide to upgrading your JavaScript codebase with TypeScript. Includes generics, interfaces, modules, and type safety best practices.',
    duration: '3 weeks',
    instructor: 'Sevelin',
    prerequisites: ['Introduction to Web Development'],
  },
  {
    title: 'Building REST APIs with Node.js',
    shortDescription: 'Learn to build scalable APIs using Express and Node.',
    fullDescription: 'A hands-on course focused on building full-featured REST APIs using Express.js. Includes routing, middleware, error handling, and authentication.',
    duration: '4 weeks',
    instructor: 'Frerot',
    prerequisites: ['Introduction to Web Development', 'TypeScript for JavaScript Developers'],
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    await Course.deleteMany({});
    console.log('Existing courses removed');

    await Course.insertMany(sampleCourses);
    console.log('Sample courses inserted');

    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
}

seed();