import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from "../../SanityClient/client" 


const AllPost = () => {
    const [allPostsData, setAllPosts] = useState(null);


    useEffect(() => {
        sanityClient.fetch(
            //This line sorts posts by the value of 'keyword' 
            `*[_type == "post" && $keyword in tags] { 
                title,
                slug,
                body,
                mainImage {
                    asset -> {
                        _id,
                        url
                    },
                    alt
                },
                tags,
                publishedAt
            }`,{"keyword":sort} //This line sets the value of 'keyword' to the value of 'sort'
        )
        .then((data) => setAllPosts(data))
        .catch(console.error)
    }, [])

       function sortPosts(e) {
        console.log(e)
        setSort(e)
    }
  return (

    <div>
      <h2>Blog Posts</h2>
      <h3>Welcome to my blog posts page!</h3>
      <div>
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link to={"/" + post.slug.current} key={post.slug.current}>
              <span key={index}>
                <img src={post.mainImage.asset.url} alt="" />
                <span>
                  <h2>{post.title}</h2>
                </span>
              </span>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default AllPost