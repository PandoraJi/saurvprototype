import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from "@reach/router"

const SEO = ({ post }) => {
  const data = useStaticQuery(graphql`
    {
        site {
            siteMetadata {
              title
              description
              titleTemplate
              url
              image
              twitterUsername
              baseUrl
            }
          }
    }
  `);

  // const { pathname } = useLocation()
//   const {
    // titleTemplate,
    // siteUrl,
    // defaultImage,
    // twitterUsername,
//   } = data.siteMetadata

  const defaults = data.site.siteMetadata;

  // console.log("DATA", data);

//   if (defaults.baseUrl === '' && typeof window !== 'undefined') {
//     defaults.baseUrl = window.location.origin;
//   }

//   if (defaults.baseUrl === '') {
//     console.error('Please set a baseUrl in your site metadata!');
//     return null;
//   }

  let title = "";
  let description= "";

  const seo = {
    title: title || defaults.title,
    description: description || defaults.description,
  }

  // const url = ""; //new URL(post.path || '', defaults.baseUrl);
  // const image = ""; //post.image ? new URL(post.image, defaults.baseUrl) : false;

  return (
    <Helmet title={seo.title}  titleTemplate={defaults.titleTemplate}>
        <meta name="description" content={seo.description} />
      {/* <link rel="canonical" href={url} />
      
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={post.author.twitter} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {image && <meta name="twitter:image" content={image} />} */}

    </Helmet>
  );
};

export default SEO;


