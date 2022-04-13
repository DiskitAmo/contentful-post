const path = require('path')


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  
  const post = path.resolve('./src/templates/contentfulPost.js');
  
  return graphql(
    `{
      allContentfulPost {
        edges {
          node
          {
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
  ).then(result => {
    if (result.errors)
    {
      throw result.errors
    }
   
    const posts = result.data.allContentfulPost.edges

    posts.forEach((post, index) => {
     const previous = index === posts.length - 1 ? null : posts[index + 1].node ;
     const next = index === 0 ? null : posts[index - 1 ].node ;
   

    createPage({
      path: "/post.node.slug",
      component:post,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
      defer: true,
  
    })

  })

  })

  
}
