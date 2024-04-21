import React from "react"

const Banner = () => {
  return (
    <>
      <div class="relative w-full bg-cover bg-center max-h-[600px]">
        <div class="absolute inset-0 bg-gray-900 opacity-70"></div>
        <div
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/previews/025/500/489/large_2x/old-bookshelves-in-the-library-of-the-university-of-cambridge-england-so-many-vintage-law-books-on-a-huge-bookshelf-ai-generated-free-photo.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-full min-h-[400px] lg:min-h-[600px] max-h-[600px]"
        ></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center text-white">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Explore, Learn, Succeed:
              <div className="block py-1 md:py-2"></div> Your Path to
              Achievement.
            </h1>
            <p class="text-lg mb-6">
              Enrich Your Mind, Explore Our Vast Library of Books, and Embark on
              Educational Journeys with Our Comprehensive Courses.
            </p>
            <a href="#" class="btn bg-blue-500 hover:bg-blue-700 text-white">
              Explore Courses
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
