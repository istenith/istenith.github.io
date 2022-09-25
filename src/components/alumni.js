// import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
// import Image from "gatsby-image";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faInstagram,
//   faLinkedin
// } from "@fortawesome/free-brands-svg-icons";

// const Img = styled(Image)`
//   width:30vw;
// `;

// const Flex = styled.div`
//   position:absolute;
//   top:0;
//   left:0;
//   width:99vw;
//   height:100vh;
//   h1.batch_number{
//     color:white;
//     padding:0;
//     margin:0;
//     font-size:50px;
//     text-align:center;
//     font-family:'bebas neue';
//   }
// `;


// const CardContainer = styled.div`
//   position:absolute;
//   top:0;
//   left:0;
// `

// const AlumniCard = styled.div`
//   div.Card{
//     width:99vw;
//     height:100vh;
//     display:flex;
//     border:1px solid red;
//     div.Left{
//       flex:none;
//       width:50%;
//       position:relative;
//       ul.Handles{
//         position:absolute;
//         display:flex;
//         bottom:0;
//         list-style:none;
//         transform:scale(2);
//         li{
//           margin-left:10px;
//         }
//       }
//     }
//     div.Right{
//       flex:none;
//       margin:auto;
//       border:1px solid red;
//     }
//   }
// `

// export default function Alumni() {

//   const data = useStaticQuery(graphql`
//     query {
//       allAlumniXlsxSheet1(sort: { fields: [ start,name ], order: [ DESC,ASC ] }) {
//         edges {
//           node {
//             name
//             start
//             end
//             instagram
//             linkedin
//             facebook
//             position
//             desp
//             img {
//               childImageSharp {
//                 fluid {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             img_1 {
//               childImageSharp {
//                 fluid {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             img_2 {
//               childImageSharp {
//                 fluid {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `);

//   return (
//     <Flex>
//       <h1 className="batch_number">BATCH-2022</h1>
//       <CardContainer>
//         {data.allAlumniXlsxSheet1.edges.map((row) => (
//           <AlumniCard>
//             <div className="Card">
//               <div className="Left">
//                 <h1 className="Name">{row.node.name}</h1>
//                 <h1 className="Desp">{row.node.desp}</h1>
//                 <ul className="Handles">
//                   <li><a href={row.node.facebook}><FontAwesomeIcon icon={faFacebook} size="1x" /></a></li>
//                   <li><a href={row.node.linkedin}><FontAwesomeIcon icon={faLinkedin} size="1x" /></a></li>
//                   <li><a href={row.node.instagram}><FontAwesomeIcon icon={faInstagram} size="1x" /></a></li>
//                 </ul>

//               </div>
//               <div className="Right">
//                 <Img className="image" fluid={row.node.img.childImageSharp.fluid}></Img>
//               </div>
//             </div>
//           </AlumniCard>
//         ))}
//       </CardContainer>
//     </Flex>
//   );
// }
