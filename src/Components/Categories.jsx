import React from 'react'
import { FaPlus } from "react-icons/fa";
const Categories = ({categories}) => {
  return (
    <div className='categories'>
            <div className="head">
                    <h2>{categories.title} Categories</h2>
            </div>
            <div className="body">
                <ul className='product_categories'>
                    {
                        categories.map((item) => {
                            const {id, title} = item
                            return (
                                <li className='category' key={id}>
                                <div className="title">
                                <input type="checkbox" className='checkbox'/>
                                <h2 className='category_title'>{title}</h2>
                                </div>
                                <div className='plus'><FaPlus/></div>
                            </li>
                            )
                        })
                    }

                </ul>
            </div>
    </div>
  )
}

export default Categories