import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import "aos/dist/aos.css";
// import Aos from "aos";


const Search = styled.input`
  /* background: #EA895F70; */
  background: rgba(108, 50, 224, 0.2);
  padding: 1rem;
  width: 50%;
  height: 35px;
  border-radius: 3px;
  border: none;
  color: white;
  font-family: Roboto;
  transition : 0.2s ease-in;
  border: 1px solid rgba(108, 50, 224, 0.4);
  &:focus, &:hover{
    box-shadow: none;
    background: rgba(108, 50, 224, 0.3);
    transition : 0.2s ease-in;
  }

  @media screen and (max-width: 1080px){
    width: 90%;
  }
`;

const FlexDiv = styled.div`
    margin-top: 2%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    position: relative;
`;
function Projects({ posts }) {
	return posts.map(({ node }) => (
		<Card frontmatter={node.frontmatter} excerpt={node.excerpt} slug={node.fields.slug}/>
	));
}

const ProjectPage = () => {
  
  const list = useStaticQuery(graphql`

    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/.*projects/" } }
        sort: { fields: frontmatter___date, order: DESC}
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date (formatString: "MMMM Do, YYYY")
              tags
              featuredImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt(format: PLAIN)
          }
        }
      }
    }
  `);

	const posts = list.allMarkdownRemark.edges;

	const emptyQuery = "";
	const [state, setState] = useState({
		filteredData: posts,
		query: emptyQuery,
	});

	const handleInputChange = event => {
		const query = event.target.value;
		const data = list;
		const posts = data.allMarkdownRemark.edges || [];
		const filteredData = posts.filter(post => {
			const {title, tags } = post.node.frontmatter;
			const excerpt = post.node.excerpt;
			return (
				excerpt.toLowerCase().includes(query.toLowerCase())||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags
        	.join("") 
        	.toLowerCase()
        	.includes(query.toLowerCase()))
			);
		});
    
		setState({
			query,
			filteredData,
		});
	};

 
  return (
  <Layout>
    <SEO title="Projects" />
    <center>
      <Search
        type="text"
        aria-label="Search"
        placeholder="🔍 Search......"
        onChange={handleInputChange}
      />
      <FlexDiv>
        {/* <div data-aos="fade-left"> */}
        <Projects posts={state.filteredData}></Projects>

        {/* </div> */}
      </FlexDiv>
    </center>
  </Layout>

  )
}


export default ProjectPage;
