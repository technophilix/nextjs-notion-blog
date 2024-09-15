import React from 'react';
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import {getPageBySlug, getPageContent, notionClient} from "@/notion";
import {notFound} from "next/navigation";
export async function generateMetadata({ params}) {
    // read route params
    const post = await getPageBySlug(params.slug);
    const content = await getPageContent(post.id);
    // fetch data
    return {
        title: post.properties.title.title[0].plain_text,
        description: post.properties.abstruct?.rich_text[0]?.plain_text,

    }
}
const Page = async ({params}) => {
    const post = await getPageBySlug(params.slug);
    if (!post) notFound();

    const content = await getPageContent(post.id);

    const notionRenderer = new NotionRenderer({
        client: notionClient,
    });

    await notionRenderer.use(hljsPlugin({}));
    await notionRenderer.use(bookmarkPlugin(undefined));
    const html = await notionRenderer.render(...content);



    // console.log("Post: ", html);
    return (
<>
 <h2 className={'text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white'}>{post.properties.title.title[0].plain_text}</h2>
            <div
                className="text-justify mt-4"
                dangerouslySetInnerHTML={{__html: html}}
            >

            </div>

</>
    );
};

export default Page;