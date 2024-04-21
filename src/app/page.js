import AllBooks from "@/components/Home/AllBooks/AllBooks"
import AllCourses from "@/components/Home/AllCourses/AllCourses"
import Banner from "@/components/Home/Banner/Banner"
import CategoryList from "@/components/Home/CategoryList/CategoryList"
import SubCategoryList from "@/components/Home/SubCategoryList/SubCategoryList"

export default function Home({ searchParams }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <Banner />
      <AllCourses />
      <CategoryList />
      <SubCategoryList />
      <AllBooks searchParams={searchParams} />
    </main>
  )
}
