import "server-only";

import { Client } from "@notionhq/client";
import {
    BlockObjectResponse,
    PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import {cache}  from "react";

export const notionClient = new Client({
    auth: process.env.NOTION_SECRET,
});

export const getPages = cache( async () => {
    const data = await  notionClient.databases.query({
        filter: {
            property: "publish_status",
            status: {
                equals: "Done",
            }
        },
        database_id: process.env.DATABASE_ID,
        sorts: [
            {
                property: "publish_date",
                direction: "descending"
            }
        ],
});

    var posts =[]

    data.results.map((post, index) =>{
        posts.push(
            {
               title: post.properties.title.title[0].plain_text,
               abstruct: post.properties.abstruct?.rich_text[0]?.plain_text,
               coverimage:post.properties.coverimage?.files[0]?.file.url,
               posturl: post.properties.posturl?.rich_text[0]?.text.content,
               publish_date: post.properties.publish_date?.date?.start,
               category: post.properties.category?.select?.name,

            });

    })

    return posts;


});

export const getPageContent = cache((pageId) => {
    return notionClient.blocks.children
        .list({ block_id: pageId })
        .then((res) =>{

            return res.results? res.results : undefined;
        });
});

export const getPageBySlug = cache( async (slug) => {
    const singlepost = await notionClient.databases
        .query({
            database_id: process.env.DATABASE_ID,
        filter: {
        property: "posturl",
            rich_text: {
            equals: slug,
        },
    },
})



   return singlepost.results[0];


});

export const getCategoryPost = cache( async (slug) => {
    const catpost = await notionClient.databases
        .query({
            database_id: process.env.DATABASE_ID,
            filter: {
                property: "categoryslug",
                select: {
                    equals: slug,
                },
            },
        })
    var posts =[]

    catpost.results.map((post, index) =>{
        posts.push(
            {
                title: post.properties.title.title[0].plain_text,
                abstruct: post.properties.abstruct?.rich_text[0]?.plain_text,
                coverimage:post.properties.coverimage?.files[0]?.file.url,
                posturl: post.properties.posturl?.rich_text[0]?.text.content,
                publish_date: post.properties.publish_date?.date?.start,
                category: post.properties.category?.select?.name,

            });

    })

    return posts;


});




export const getCategory = cache(async () => {
    const response = await notionClient.databases.query({
        database_id: process.env.DATABASE_ID,
        filter: {
            and: [
                {
                    property: "category", // Ensure 'category' is not empty
                    select: {
                        is_not_empty: true,
                    },
                },
                {
                    property: "categoryslug", // Ensure 'categoryslug' is not empty
                    select: {
                        is_not_empty: true,
                    },
                }
            ]
        }
    });
    // console.dir(response.results)
    // Fetch both category and categoryslug fields
    const categories = response.results.map((page) => {
        const categoryName = page.properties.category?.select?.name || '';  // Fetch category name
        const categorySlug = page.properties.categoryslug?.select?.name || ''; // Fetch category slug

        return {
            name: categoryName,  // Category name
            slug: categorySlug,  // Category slug
        };
    });

    const uniqueCategories = Array.from(
        new Map(categories.map(item => [item.name, item])).values()
    );

    console.dir(uniqueCategories); // Log the result for debugging

    return uniqueCategories;
});
