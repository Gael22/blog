import React from 'react';
import { PostMasonry, MasonryPost, PostGrid } from '../components/common';
import trending from '../assets/mocks/trending';
import featured from '../assets/mocks/featured'

const trendingConfig = {
    1:{
        gridArea:'1 / 2 / 3 / 3'

    }
}

const featuredConfig = {
   0: {
       gridArea: '1 / 1 / 2 / 3',
       height: '300px'
   },
   1: {
       height:'300px'
   },
   3: {
       height: '630px',
       marginLeft: '30px',
       width: '430px'
   }
}

const mergeStyles = function (posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
        post.author = 'Gael G'
        post.description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    })
}

const recentPosts = [...trending, ...featured, ...featured]

mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)

const lastFeatured = featured.pop()

export default function Home () {
    return (
        <main className="home">
            <section className="container">
                <div className="row">
                    <section className="featured-posts-container">
                        <PostMasonry posts={featured} colums={2} tagsOnTop={true} />
                        <MasonryPost post={lastFeatured} tagOnTop={true} />
                    </section>
                </div>
            </section>
            <section className="container">
                    <div className="row">
                        <h1>Recent posts</h1>
                        <PostGrid posts={recentPosts} />
                    </div>   
            </section>
            <section className="bg-white">
                    <section className="container">
                            <div className="row">
                            <PostMasonry posts={trending} columns={3} />
                            </div>   
                    </section>
            </section>
        </main>
    )
}