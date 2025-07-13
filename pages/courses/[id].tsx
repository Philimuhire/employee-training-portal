import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { enroll, unenroll } from '@/store/enrollmentSlice';
import Layout from '@/components/Layout';
import EnrollButton from '@/components/EnrollButton';
import LinkButton from '@/components/LinkButton';
import { Course } from '@/types/course';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function CourseDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/courses/${id}` : null, fetcher);
  const course: Course | undefined = data?.course;

  const dispatch = useDispatch();
  const enrolledIds = useSelector((state: RootState) => state.enrollment.enrolledCourseIds);
  const isEnrolled = enrolledIds.includes(id as string);

  const handleToggleEnrollment = () => {
    if (!course) return;
    if (isEnrolled) {
      dispatch(unenroll(course._id));
    } else {
      dispatch(enroll(course._id));
    }
  };

  if (error) {
    return (
      <Layout>
        <p className="text-red-500">Failed to load course.</p>
      </Layout>
    );
  }

  if (!data) {
    return (
      <Layout>
        <p className="text-gray-600">Loading...</p>
      </Layout>
    );
  }

  if (!course) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-20">
          <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-md">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h1>
            <p className="text-base text-gray-800 mb-6 leading-relaxed">
              The course you are looking for does not exist or has been removed.
            </p>
            <LinkButton href="/" variant="primary">
              Back to Home
            </LinkButton>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto">
        <nav className="flex items-center space-x-2 text-sm text-gray-800 mb-6" aria-label="Breadcrumb">
          <LinkButton href="/" variant="secondary" size="sm">
            Home
          </LinkButton>
          <span className="text-gray-500">•</span>
          <span className="text-gray-500">Course Details</span>
        </nav>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <h1 className="text-2xl font-bold text-blue-500">{course.title}</h1>

          {isEnrolled && (
            <div className="bg-green-50 border border-green-200 rounded-md p-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-green-800 font-medium">You are enrolled in this course.</p>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Course Description</h2>
            <p className="text-base text-gray-800 leading-relaxed">{course.fullDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-md p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Course Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium">Duration:</span>
                  <span className="text-gray-800">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium">Instructor:</span>
                  <span className="text-gray-800">{course.instructor}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-800 font-medium">Prerequisites:</span>
                  <div className="text-right">
                    {course.prerequisites.length > 0 ? (
                      <div className="space-y-1">
                        {course.prerequisites.map((prereq, index) => (
                          <div key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                            {prereq}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-500 italic">None</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-md p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Enrollment</h3>
              <p className="text-base text-gray-800 mb-4 leading-relaxed">
                {isEnrolled
                  ? "You're enrolled in this course. You can unenroll if you change your mind."
                  : "Ready to start learning? Enroll in this course now!"}
              </p>
              <EnrollButton
                isEnrolled={isEnrolled}
                onToggle={handleToggleEnrollment}
                className="w-full"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <LinkButton href="/" variant="secondary">
              ← Back to Courses
            </LinkButton>
          </div>
        </div>
      </div>
    </Layout>
  );
}
