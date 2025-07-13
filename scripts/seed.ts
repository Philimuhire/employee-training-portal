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
    instructor: 'Philbert M.',
    prerequisites: [],
  },
  {
    title: 'Advanced React & Redux',
    shortDescription: 'Deep dive into building scalable React apps.',
    fullDescription: 'Take your React skills to the next level. Learn advanced concepts including Redux Toolkit, middleware, and performance optimization.',
    duration: '6 weeks',
    instructor: 'David B.',
    prerequisites: ['Introduction to Web Development'],
  },
  {
    title: 'Database Design with MongoDB',
    shortDescription: 'Master NoSQL database design and querying.',
    fullDescription: 'This course introduces you to MongoDB, covering schema design, indexing, aggregation pipelines, and best practices for NoSQL data modeling.',
    duration: '5 weeks',
    instructor: 'Isaac N.',
    prerequisites: ['Introduction to Web Development'],
  },
  {
    title: 'TypeScript for JavaScript Developers',
    shortDescription: 'Learn static typing and powerful features in TypeScript.',
    fullDescription: 'A step-by-step guide to upgrading your JavaScript codebase with TypeScript. Includes generics, interfaces, modules, and type safety best practices.',
    duration: '3 weeks',
    instructor: 'Emmanuel N.',
    prerequisites: ['Introduction to Web Development'],
  },
  {
    title: 'Building REST APIs with Node.js',
    shortDescription: 'Learn to build scalable APIs using Express and Node.',
    fullDescription: 'A hands-on course focused on building full-featured REST APIs using Express.js. Includes routing, middleware, error handling, and authentication.',
    duration: '4 weeks',
    instructor: 'Phocas B.',
    prerequisites: ['Introduction to Web Development', 'TypeScript for JavaScript Developers'],
  },
  {
    title: 'Effective Performance Management',
    shortDescription: 'Build performance review systems that work.',
    fullDescription: 'Learn how to set SMART goals, conduct effective reviews, and support employee development with practical tools.',
    duration: '3 weeks',
    instructor: 'Grace N.',
    prerequisites: [],
  },
  {
    title: 'HR Analytics & Reporting',
    shortDescription: 'Use data to drive HR decisions.',
    fullDescription: 'Understand how to use KPIs, dashboards, and analytics tools to improve hiring, retention, and employee performance.',
    duration: '4 weeks',
    instructor: 'Eugene M.',
    prerequisites: [],
  },
  {
    title: 'Recruitment & Talent Acquisition',
    shortDescription: 'Master modern recruiting practices.',
    fullDescription: 'Explore sourcing strategies, candidate screening, behavioral interviews, and employer branding techniques.',
    duration: '4 weeks',
    instructor: 'Claudine K.',
    prerequisites: [],
  },
  {
    title: 'Project Management Essentials',
    shortDescription: 'Deliver projects on time and within scope.',
    fullDescription: 'Learn about project lifecycles, planning, risk management, and stakeholder communication using Agile and Waterfall approaches.',
    duration: '3 weeks',
    instructor: 'Patrick M.',
    prerequisites: [],
  },
  {
    title: 'Emotional Intelligence in the Workplace',
    shortDescription: 'Build stronger relationships through self-awareness.',
    fullDescription: 'This course helps you improve empathy, communication, and decision-making by understanding emotional intelligence models.',
    duration: '2 weeks',
    instructor: 'Beatrice R.',
    prerequisites: [],
  },
  {
    title: 'Public Speaking & Presentation Skills',
    shortDescription: 'Speak with confidence and clarity.',
    fullDescription: 'From crafting your message to engaging your audience, this course gives you techniques to deliver impactful presentations.',
    duration: '2 weeks',
    instructor: 'Alex T.',
    prerequisites: [],
  },
  {
    title: 'Time Management Mastery',
    shortDescription: 'Take control of your time and productivity.',
    fullDescription: 'Learn prioritization techniques like Eisenhower Matrix, time blocking, and avoiding burnout while staying focused.',
    duration: '1 week',
    instructor: 'Rachel N.',
    prerequisites: [],
  },
  {
    title: 'Remote Work & Team Collaboration',
    shortDescription: 'Thrive in distributed work environments.',
    fullDescription: 'Covers communication tools, asynchronous workflows, virtual meeting etiquette, and maintaining team engagement remotely.',
    duration: '2 weeks',
    instructor: 'Theo D.',
    prerequisites: [],
  },
  {
    title: 'Conflict Resolution in the Workplace',
    shortDescription: 'Turn tension into teamwork.',
    fullDescription: 'Practical skills for managing workplace conflicts, mediating disputes, and building a healthy team dynamic.',
    duration: '2 weeks',
    instructor: 'Lydia S.',
    prerequisites: [],
  },
  {
    title: 'Introduction to Cybersecurity',
    shortDescription: 'Protect yourself and your company online.',
    fullDescription: 'Understand the basics of online threats, password security, phishing, malware, and secure remote access.',
    duration: '2 weeks',
    instructor: 'Jean Paul C.',
    prerequisites: [],
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