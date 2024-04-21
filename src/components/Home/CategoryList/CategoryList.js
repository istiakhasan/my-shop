import CategoryCard from "@/components/Home/CategoryList/CategoryCard/CategoryCard"
import React from "react"

async function getData() {
  const res = await fetch(
    "https://easy-learning-platform.vercel.app/api/v1/categories",
    { next: { revalidate: 1 } }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

const CategoryList = async () => {
  const data = await getData()

  return (
    <section className="mt-14 w-full max-w-[1140px]">
      <h1 className="text-3xl font-bold text-left mb-4 py-10">
        Select By Your Preferred Category:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.data?.map((category) => (
          <CategoryCard
            key={category._id}
            category={category}
            link="category-courses"
          />
        ))}
      </div>
    </section>
  )
}

export default CategoryList
