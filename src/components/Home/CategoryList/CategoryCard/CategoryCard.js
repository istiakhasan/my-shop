import Image from "next/image"
import Link from "next/link"
import React from "react"

const CategoryCard = ({ category, link }) => {
  const { id, title, icon } = category
  return (
    <div className="w-[300px] rounded overflow-hidden shadow-lg bg-white">
      <Image
        width={300}
        height={300}
        src={icon}
        className="w-auto mx-auto h-56"
        alt=""
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-5">
          <Link href={`/${link}/${id}`}>Buy Course</Link>
        </button>
      </div>
    </div>
  )
}

export default CategoryCard
