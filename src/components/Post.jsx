import React from 'react';
import Link from "next/link";
import {dynamicBlurDataUrl, formatDate} from "@/app/Util";
import Image from "next/image";

const Post = async ({title, coverimage, slug, publish_date, category, tags}) => {

    const blururl = await dynamicBlurDataUrl(coverimage)

    return (
        <div className="col-md-4">
            <div className="card p-3 mb-2">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div className="icon">
                            {" "}
                            <Image className="img-fluid2" src={coverimage} alt={title} placeholder={'blur'}
                                   blurDataURL={blururl} width={50} height={50}/>
                        </div>
                        <div className="ms-2 c-details">
                            <h6 className="mb-0">{title}</h6> <span>{formatDate(publish_date)}</span>
                        </div>
                    </div>
                    <div className="badge badge-pill badge-danger">
                        {" "}
                        <span>{category}</span>{" "}
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="heading">
                        {title}
                    </h3>

                </div>

                <div className="mt-5 d-flex flex-row-reverse">
                    <Link className={'btn btn-sm btn-dark'} href={`/article/${slug}`} shallow={true}>পুরোটা →</Link>
                </div>
            </div>
        </div>

    );
};

export default Post;