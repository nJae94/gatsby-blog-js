import React, { useEffect ,useState, useMemo} from 'react';
import { graphql } from 'gatsby';
import Layout from "../layout";
import SEO from "../components/seo"
import styled from 'styled-components';
import MainContent from "../components/maincontent"
import Tag from '../components/tag';
import _ from 'lodash'

export default ({data,location}) => {

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const [TIL, setTIL] = useState([])

  const [tag, setTag] = useState("all");

  console.log(tag);

  const tags = useMemo(
    () => _.uniq(posts.map(( post ) => post.frontmatter.tag)),
    []
  )

  useEffect(()=>{

    setTIL(tag === 'all' ? 
      posts.filter((post)=> post.frontmatter.category === "TIL") 
      :
      posts.filter((post)=> post.frontmatter.category === "TIL" && post.frontmatter.tag === tag)
    );

  },[posts,tag]);

  
    return (
      <Layout location={location} title={location.pathname.split("/")[1]}>
        <SEO title="TIL posts" />
        {/* <Tag/> */}
        <Wrapper>
          <Tag tags={tags}setTags={setTag}/>
          {TIL.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <MainContent key={title} title={title} post={post}/>
            )
          })}

        </Wrapper>
      </Layout>

    )
}

const Wrapper = styled.div`
  width:100%;
  display: flex;
  flex-direction:column;
  position:relative;
`;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
          tag
        }
      }
    }
  }
`