"use client"
import CourseCard from "@/components/Home/AllCourses/CourseCard/CourseCard"
import React, { useEffect } from "react"
import Carousel from "react-multi-carousel"

import "react-multi-carousel/lib/styles.css"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1501 },
    items: 4,
  },
  subTablet: {
    breakpoint: { max: 1509, min: 1025 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 668 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 667, min: 0 },
    items: 1,
  },
}

const AllCourses = () => {
  const [courses, setCourses] = React.useState({})
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://easy-learning-platform.vercel.app/api/v1/courses",
        { next: { revalidate: 3600 } }
      )
      if (!res.ok) {
        throw new Error("Failed to fetch data")
      }
      return res.json()
    }
    getData().then((data) => {
      setCourses(data)
    })
  }, [])

  return (
    <section className="container w-full">
      <h1 className="text-3xl font-bold mb-4 text-center py-10">All Courses</h1>
      {Object.keys(courses).length === 0 ? (
        <div className="text-center">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="w-full">
          <Carousel
            ssr={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            autoPlay={false}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
          >
            {courses?.data?.data?.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </Carousel>
        </div>
      )}
    </section>
  )
}

export default AllCourses
