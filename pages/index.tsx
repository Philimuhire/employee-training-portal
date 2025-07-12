import { useState } from 'react';
import useSWR from 'swr';
import { Course } from '@/types/course';
import CourseCard from '@/components/CourseCard';
import SearchBar from '@/components/SearchBar';
import Layout from '@/components/Layout';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function HomePage() {
  const [query, setQuery] = useState('');
  const { data, error } = useSWR(`/api/courses?search=${query}`, fetcher);

  const courses: Course[] = data?.courses || [];

  return (
    <Layout>
      <h1 className="text-center space-y-4 text-2xl font-bold mb-6 text-gray-800" >Employee Training Courses</h1>
      <p className="text-center space-y-4 text-base text-gray-800 max-w-2xl mx-auto leading-relaxed">
          Discover and enroll in professional training courses to enhance your skills and advance your career.
        </p>
      <SearchBar value={query} onChange={setQuery} />
      {error && <p className="text-red-500 text-sm">Failed to load courses.</p>}
      {!data && <p className="text-gray-600 text-sm">Loading...</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.length > 0 ? (
          courses.map((course) => <CourseCard key={course._id} course={course} />)
        ) : (
          <p className="text-gray-500">No courses found.</p>
        )}
      </div>
    </Layout>
  );
}
