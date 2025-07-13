import { useState } from 'react';
import useSWR from 'swr';
import { Course } from '@/types/course';
import CourseCard from '@/components/CourseCard';
import SearchBar from '@/components/SearchBar';
import Layout from '@/components/Layout';
import PaginationControls from '@/components/PaginationControls';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const limit = 6;

  const { data, error } = useSWR(
    `/api/courses?search=${query}&page=${page}&limit=${limit}`,
    fetcher
  );

  const courses: Course[] = data?.courses || [];
  const totalPages = data?.totalPages || 1;

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <Layout>
      <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">
        Employee Training Courses
      </h1>
      <p className="text-center text-base text-gray-800 max-w-2xl mx-auto leading-relaxed">
        Discover and enroll in professional training courses to enhance your skills and advance your career.
      </p>
      <SearchBar
        value={query}
        onChange={(val) => {
          setQuery(val);
          setPage(1);
        }}
      />

      {error && <p className="text-red-500 text-sm">Failed to load courses.</p>}
      {!data && <p className="text-gray-600 text-sm">Loading...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.length > 0 ? (
          courses.map((course) => <CourseCard key={course._id} course={course} />)
        ) : (
          <p className="text-gray-500">No courses found.</p>
        )}
      </div>

      <PaginationControls
        page={page}
        totalPages={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </Layout>
  );
}
