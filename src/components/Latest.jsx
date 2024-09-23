import React from 'react';
import {dynamicBlurDataUrl, formatDate} from "@/app/Util";
import Link from "next/link";
import Image from "next/image";

const Latest = async ({post}) => {
    const blururl = await dynamicBlurDataUrl(post.coverimage)

    return (
        <div className="row">
            <div className="col-sm-9">
                <article className={'mb-3 article p-4'}>
                    <h1>{post.title}</h1>
                    <p>{formatDate(post.publish_date)}</p>
                    <p>{post.abstruct}...</p>

                    <div className="mt-1 d-flex flex-row">
                        <Link className={'btn btn-sm btn-dark'} href={`/article/${post.posturl}`}>পুরোটা →</Link>

                    </div>
                </article>
            </div>
            <div className="col-sm-3">

                <Image
                    src={post.coverimage}
                    alt={post.title}
                    className={'img-fluid'}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', borderRadius: '15px' }}
                    placeholder={'blur'}
                    blurDataURL={blururl}
                    />


            </div>

        </div>

    );
};

export default Latest;