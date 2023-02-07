import React, {useEffect, useState} from 'react'

import {getCategories} from "../../services";
import Link from "next/link";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        return () => {
            getCategories().then((newCategories) => setCategories(newCategories))
        };
    }, []);


    return (
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                Categories
            </h3>
            {categories.map((category) => (
                <Link href={`/category/${category.slug}`} key={category.slug}>
                    <span className="cursor-pointer block pb-3 mb-3 text-gray-500">
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default Categories