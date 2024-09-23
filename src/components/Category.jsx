import React from 'react';
import {getCategory} from "@/notion";
import Link from "next/link";

const Category = async () => {

    const category = await getCategory()

    // console.log(category)

    return (
        <div>
            <div className="row px-3">
                <h4>বিষয়</h4>
                <ul>
                    {category.map((cat, index) => (
                        <li key={index} style={{listStyle:"none" , background:"white" , color:"black !important",
                            padding:"6px", "boxShadow":"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                            marginTop:"2%", borderRadius:"5px"
                        }}><Link className={''} style={{textDecoration:'none'}} href={`category/${cat.slug}`}>{cat.name}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Category;