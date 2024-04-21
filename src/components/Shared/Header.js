import Link from "next/link"
import React from "react"

const getCategoryData = async () => {
  const res = await fetch(
    "https://easy-learning-platform.vercel.app/api/v1/categories"
  )

  return res.json()
}

const getSubCategoryData = async () => {
  const res = await fetch(
    "https://easy-learning-platform.vercel.app/api/v1/sub-categories"
  )

  return res.json()
}

const getData = async () => {
  const categoryData = await getCategoryData()
  const subCategoryData = await getSubCategoryData()
  const mergeTwoData = categoryData.data.map((category) => {
    const subCategoryList = subCategoryData.data.data.filter(
      (subCategory) => subCategory.category_id?._id === category._id
    )
    return { ...category, subCategoryList }
  })

  return mergeTwoData
}

const Header = async () => {
  const categoryList = await getData()

  return (
    <div className="navbar bg-base-100 relative z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <details>
                <summary>Category</summary>
                <ul className="p-2">
                  {categoryList?.map((category) => (
                    <li key={category._id}>
                      <details>
                        <summary>{category?.title}</summary>
                        <ul className="p-2 min-w-[200px] grid gap-2">
                          {category?.subCategoryList?.map((subCategory) => (
                            <li key={subCategory._id}>
                              <a>{subCategory?.title}</a>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">MyShop</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <details>
              <summary>Category</summary>
              <ul className="p-2 min-w-[200px] grid gap-2">
                {categoryList?.map((category) => (
                  <li key={category._id}>
                    <details>
                      <summary>{category?.title}</summary>
                      <ul className="p-2 min-w-[200px] grid gap-2">
                        {category?.subCategoryList?.map((subCategory) => (
                          <li key={subCategory._id}>
                            <a>{subCategory?.title}</a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-sm">Login</a>
      </div>
    </div>
  )
}

export default Header
