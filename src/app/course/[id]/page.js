import React from "react"

async function getData(id) {
  const res = await fetch(
    "https://easy-learning-platform.vercel.app/api/v1/courses/" + id,
    { next: { revalidate: 1 } }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}
const CourseDeatilsPage = async ({ params: { id } }) => {
  const data = await getData(id)
  const {
    title,
    author,
    banner,
    description,
    syllabus,
    routine,
    study_materials,
  } = data?.data

  return (
    <div>
      <div className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
          <img className="w-full rounded-t-lg" src={banner} alt={title} />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="mb-4">
              <span className="bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                Author: {author}
              </span>
              <span className="bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                Syllabus:{" "}
                <a href={syllabus} className="text-blue-600">
                  Link
                </a>
              </span>
              <span className="bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                Routine:{" "}
                <a href={routine} className="text-blue-600">
                  Link
                </a>
              </span>
              <span className="bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">
                Study Materials: {study_materials}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDeatilsPage
