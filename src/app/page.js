import Image from "next/image";
import {getPages} from "@/notion";
import HomePage from "@/components/Post";
import Post from "@/components/Post";
import Category from "@/components/Category";
import Latest from "@/components/Latest";


export default async function Home() {

    async function getPosts() {
        const database = await getPages();
        // console.dir(database , { depth: null })
        return database;
    }

    const posts = await getPosts()

    return (


        <>
<div className="row">

    <Latest />



</div>
        <div className="row">
            <div className="col-sm-9">
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
            <div className="col-sm-3">

                <Category/>


            </div>


        </div>
</>
    );
}
