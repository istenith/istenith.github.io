import React from 'react'
import RehypeReact from "rehype-react";
import { graphql, Link} from "gatsby"
import Layout from '../components/layout'
import Share from '../components/share'
import SEO from "../components/seo"
import styled from 'styled-components'
import kebabCase from "lodash/kebabCase"
import {head1, head2, head3, head4, para, line, Pre, Code} from "./elements"

const Title = styled.div`
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    h1{
        margin-bottom: 0;
        color: white;
    }
    p{
        padding-bottom: 0;
        margin: 0;
    }
    .tags{
        color:white;
        display: flex;
        .tag{
            background-image:linear-gradient(0deg,#ff8a00,#e52e71);
            border-radius: 20px;
            margin: 5px;
            padding: 0 10px;
            text-align: center;
        }
    }
    
`;

const Date = styled.p`
    color: white;
`;

const Pad = styled.div`
    width: 70%;
    margin: 0 auto;

    @media screen and (max-width: 1080px){
        width: 90%;
    }
`;

const renderAst = new RehypeReact({
    createElement: React.createElement,
    components: {
        h1: head1,
        h2: head2,
        h3: head3,
        h4: head4,
        p: para,
        hr: line,
        pre: Pre,
        code: Code
    },
}).Compiler;

export default function Project ({ data, location}) {
    const project = data.markdownRemark
    return (
        <Layout>
        <Pad>
            <SEO title={project.frontmatter.title}/>
            <Title>
            <div>
            <h1>{project.frontmatter.title}</h1>
            <p>Author: {project.frontmatter.author}</p>
            <p>{project.frontmatter.email}</p>
            </div>
            <div className='tags'>
            {project.frontmatter.tags.map((tag)=>(
                <Link to={'/tags/'+kebabCase(tag)} style={{ textDecoration: "none", color: 'white'}}>
                <div className='tag'>{tag}</div>
                </Link>
            ))}
            </div>
            </Title>
            <Date>{project.frontmatter.date}</Date>
            {
                renderAst(project.htmlAst)
            }
            <Share title={project.frontmatter.title} tags={project.frontmatter.tags} url={location.href}/>            
        </Pad>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String){
        markdownRemark(fields: { slug: { eq: $slug }}){
            html
            htmlAst
            frontmatter{
                title
                author
                email
                date(formatString: "MMMM Do, YYYY")
                tags
            }
        }
    }
`
