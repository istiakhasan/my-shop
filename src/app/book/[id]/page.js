import React from "react"

async function getData(id) {
  const res = await fetch(
    "https://easy-learning-platform.vercel.app/api/v1/books/" + id,
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
    price,
    discount_price,
    cover_page,
    description,
    sample_pdf_link,
  } = data?.data

  return (
    <div>
      <div className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <img className="w-full rounded-t-lg" src={cover_page} alt={title} />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Price: ${price}</span>
              {discount_price && (
                <span className="text-gray-600">
                  <span>Discount Price:</span> ${discount_price}
                </span>
              )}
            </div>
            <div className="mb-4">
              <a
                href={sample_pdf_link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sample PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDeatilsPage
