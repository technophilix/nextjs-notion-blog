import React from 'react';
import {formatDate} from "@/app/Util";
import Link from "next/link";


const Latest = ({post}) => {
    return (
        <article className={'mb-3 article p-4'}>
            <h1>{post.title}</h1>
            <p>{formatDate(post.publish_date)}</p>
            <p>{post.abstruct}</p>

            <div className="mt-1 d-flex flex-row">
                <Link className={'btn btn-sm btn-dark'} href={`/article/${post.posturl}`}>পুরোটা →</Link>

            </div>
        </article>

    );
};

export default Latest;