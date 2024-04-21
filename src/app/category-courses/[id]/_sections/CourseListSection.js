"use client"
import React from "react"
import CourseCard from "@/components/Home/AllCourses/CourseCard/CourseCard"
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

const CourseListSection = ({ allCourse }) => {
  return (
    <div>
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
        {allCourse?.data?.data?.map((category) => (
          <CourseCard key={category._id} course={category} />
        ))}
      </Carousel>
    </div>
  )
}

export default CourseListSection
