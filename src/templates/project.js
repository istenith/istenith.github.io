import React from 'react'
import { graphql, Link} from "gatsby"
import Layout from '../components/layout'
import SEO from "../components/seo"
import styled from 'styled-components'

const Title = styled.div`
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    h1{
        margin-bottom: 0;
    }
    .tags{
        color:white;
        display: flex;
        .tag{
            background-image:linear-gradient(0deg,#ff8a00,#e52e71);
            border-radius: 20px;
            margin: 5px;
            padding: 0 4px;
            min-width: 50px;
            text-align: center;
        }
    }
    
`;
const Content = styled.div`
    color: white;
`;
const Date = styled.p`
    color: white;
`;

export default function Project ({ data }) {
    const project = data.markdownRemark
    return (
        <Layout>
            <SEO title={project.frontmatter.title}/>
            <Title>
                <h1>{project.frontmatter.title}</h1>
                <div className='tags'>
                {project.frontmatter.tags.map((tag)=>(
                    <Link to={'/tags/'+tag} style={{ textDecoration: "none", color: 'white'}}>
                        <div className='tag'>{tag}</div>
                    </Link>
                ))}
                </div>
            </Title>
            <Date>{project.frontmatter.date}</Date>
            <Content dangerouslySetInnerHTML={{ __html: project.html }}></Content>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String){
        markdownRemark(fields: { slug: { eq: $slug }}){
            html
            frontmatter{
                title
                date(formatString: "MMMM Do, YYYY")
                tags
            }
        }
    }
`