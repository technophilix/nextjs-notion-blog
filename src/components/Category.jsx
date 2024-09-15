import React from 'react';
import {getCategory} from "@/notion";

const Category = async () => {

    const category = await getCategory()

    // console.log(category)

    return (
        <div>
            <div className="row px-3">
                <h4>বিষয়</h4>
                <ul>
                    {category.map((cat, index) => (
                        <li key={index}>{cat}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Category;