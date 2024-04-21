import Image from "next/image"
import React from "react"
import Link from "next/link"
const CourseCard = ({ course }) => {
  const { id, title, author, banner, description, syllabus, routine } = course

  return (
    <div className="w-[300px] rounded overflow-hidden shadow-lg bg-white">
      <Image
        width={300}
        height={300}
        className="w-full h-56 object-cover object-center"
        src={banner}
        alt="banner image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4 flex flex-wrap gap-3">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Author: {author}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Syllabus: <a href={syllabus}>Link</a>
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Routine: <a href={routine}>Link</a>
        </span>
      </div>
      <Link
        href={`/course/${id}`}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-5 block text-center"
      >
        View Course Details
      </Link>
    </div>
  )
}

export default CourseCard
