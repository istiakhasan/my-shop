import Image from "next/image"
import React from "react"
import Link from "next/link"
const BookCard = ({ book }) => {
  const {
    title,
    id,
    description,
    price,
    discount_price,
    sample_pdf_link,
    cover_page,
  } = book
  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        width={500}
        height={500}
        className="w-full h-56 object-cover object-center"
        src={cover_page}
        alt="cover"
      />
      <div className="p-4">
        <h1 className="text-gray-900 font-bold text-xl">{title}</h1>
        <div className="flex justify-between mt-3">
          <span className="text-gray-600 text-sm">Price: ${price}</span>
          <span className="text-gray-600 text-sm">
            Discount Price: ${discount_price}
          </span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <a
            target="_blank"
            href="https://gbihr.org/images/docs/test.pdf"
            className="text-blue-500 hover:underline text-sm"
          >
            Sample PDF
          </a>
          <Link
            href={`/book/${id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BookCard
