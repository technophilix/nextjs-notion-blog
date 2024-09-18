import React from 'react';
import {getCategoryPost, getPageBySlug} from "@/notion";
import {notFound} from "next/navigation";
import Post from "@/components/Post";

const Page = async ({params}) => {
    const posts = await getCategoryPost(params.slug);
    if (!posts) notFound();
    return (
        <div className={'container mt-5'}>
            <div className="row">
                <h3 className={'font-bold'}>{posts[0].category}</h3>
            </div>

            <div className="row">
                {posts.map((post, index) =>

                    (
                        <>
                            {index !== 0 ? <Post title={post.title} coverimage={post.coverimage} slug={post.posturl}
                                                 publish_date={post.publish_date} category={post.category}
                                                 key={index}/> : ''
                            }
                        </>
                    )
                )
                }
            </div>

        </div>
    );
};

export default Page;