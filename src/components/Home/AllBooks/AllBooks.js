import BookCard from "@/components/Home/AllBooks/BookCard/BookCard"
import React from "react"

async function getData() {
  const res = await fetch(
    "https://easy-learning-platform.vercel.app/api/v1/books",
    { next: { revalidate: 1 } }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

const AllBooks = async ({ searchParams }) => {
  const data = await getData()

  return (
    <section className="w-full max-w-[1140px] pt-14">
      <h1 className="text-3xl font-bold mb-4 text-center py-10">All Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.data?.data?.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </section>
  )
}

export default AllBooks
