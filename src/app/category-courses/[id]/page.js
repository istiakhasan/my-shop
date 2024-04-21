import CourseListSection from "./_sections/CourseListSection"

import React from "react"

async function getCategoryData(id) {
  const res = await fetch(
    "https://easy-learning-platform.vercel.app/api/v1/categories/" + id,
    { next: { revalidate: 1 } }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}
async function getCategoryCourseData(id) {
  const res = await fetch(
    "https://easy-learning-platform.vercel.app/api/v1/courses?category_id=" +
      id,
    { next: { revalidate: 1 } }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

const CategoryListPage = async ({ params }) => {
  const id = params.id
  const categoryData = await getCategoryData(id)
  const allCourse = await getCategoryCourseData(id)

  return (
    <section className="mt-14 mx-auto px-5 py-14">
      <h1 className="text-3xl font-bold text-left mb-4 py-10">
        Category name – {categoryData?.data?.title}
      </h1>

      <CourseListSection allCourse={allCourse} />
    </section>
  )
}

export default CategoryListPage
