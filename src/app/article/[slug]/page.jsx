import React from 'react';
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import {getPageBySlug, getPageContent, notionClient} from "@/notion";
import {notFound} from "next/navigation";
import Share from "@/components/Share";
import {headers} from "next/headers";
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

    const headersList = headers();

    var domainname = headersList.get('host'); // to get domain



    const post = await getPageBySlug(params.slug);
    if (!post) notFound();

    const content = await getPageContent(post.id);

    const notionRenderer = new NotionRenderer({
        client: notionClient,
    });

    // console.log(content)

    await notionRenderer.use(hljsPlugin({}));
    await notionRenderer.use(bookmarkPlugin(undefined));
    const html = await notionRenderer.render(...content);

    const customStyles = `
        .notion-quote {
            border-left: 4px solid #e1e1e1;
            padding-left: 16px;
            margin: 16px 0;
            font-style: italic;
            color: #555;
        }
        
        .notion-code {
      background-color: #f4f4f4;
      border-radius: 4px;
      padding: 16px;
      font-family: 'Courier New', monospace;
    }
    .notion-equation {
      display: flex;
      justify-content: center;
      margin: 16px 0;
    }
        .text-justify{
        text-align: justify;
    `;

   console.log("url ", `${domainname}/article/${params.slug}`);
    return (
        <>
            <style dangerouslySetInnerHTML={{__html: customStyles}}/>
            <h2 className={'fw-bold'}>{post.properties.title.title[0].plain_text}</h2>
            <Share data={{
                url: `${domainname}/article/${params.slug}`,

            }} />
            <div
                className="text-justify mt-4"
                dangerouslySetInnerHTML={{__html: html}}
            >

            </div>

        </>
    );
};

export default Page;