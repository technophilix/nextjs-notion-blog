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
                <div className="col-sm-9">
                    <div className="row">

                        <Latest post={posts[0]}/>


                    </div>
                    <div className="row">
                        {posts.map((post, index) =>

                            (
                                <>
                                    {index !== 0 ?
                                        <Post title={post.title} coverimage={post.coverimage} slug={post.posturl}
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
                    <p className={'text-justify text-brown'}>সব মানুষের জীবনেই নানা গল্প থাকে। আমারও আছে। গল্প ভাগ করে নিতে কারো কারো ভালো লাগে... কারো কাছে একেবারেই তা নিজস্ব, আত্মস্থিত । আমারটা মাঝামাঝি। যা দেখি-যা শুনি, তার উপর দাঁড়িয়ে মিলিয়ে নেওয়া আরকি!!</p>

                    <Category/>


                </div>


            </div>
        </>
    );
}
