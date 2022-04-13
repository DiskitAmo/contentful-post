import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { useEffect, useState } from "react"
//import { useState } from "react/cjs/react.production.min";
//import contentfulPost from "../templates/contentfulPost"

const IndexPage = ({ data }) => {
  const posts = data.allContentfulPost.edges
  console.log(posts)
  const [post, setPost] = useState([])

  const renderData = () => {
    console.log("hy")
    console.log(posts)
    post.map((item, index) => {
      console.log("hy")
      return (
        <div>
          <h5>{item.node.title}</h5>
          <p>{item.node.subtitle}</p>
          <p>{item.node.author}</p>
        </div>
      )
    })
  }

  useEffect(() => {
    setPost(posts)
  }, [])

  return (
    <Layout>
      <h3>welcome</h3>
      {post.map((item, index) => {
        console.log("hy")
        return (
          <div>
            <h5>{item.node.title}</h5>
            <p>{item.node.subtitle}</p>
            <p>{item.node.author}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export default IndexPage
export const pagequery = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          title
          subtitle
          author
          slug
          id
        }
      }
    }
  }
`
