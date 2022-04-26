import { graphql } from 'gatsby';
// import BlogPost from '../components/blog-post';
import React from 'react';
import GraphQLErrorList from '../components/GraphQLErrorList';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Container from '../components/Container';
// import SEO from '../components/seo';
// import { toPlainText } from '../lib/helpers';

export const query = graphql`
  query HomeTemplateQuery($providerId: [String]) {
    home: sanityHome {
      mainImage {
        asset {
          gatsbyImageData
        }
      }
      providers {
        ServiceCoverageLinkTitle
        SupportedServicesLinkTitle
        SupportedServicesTitle
        associatedProvider {
          id
          language
          name
          logo {
            asset {
              gatsbyImageData(width: 100)
            }
          }
          slug {
            current
          }
        }
      }
    }
    services: allSanityService(
      filter: { provider: { id: { in: $providerId } } }
    ) {
      edges {
        node {
          id
          title
          name
          slug {
            current
          }
          provider {
            id
          }
          excerpt
        }
      }
    }
  }
`;

const HomeTemplate = (props) => {
  const { data, errors } = props;
  const { providers, mainImage } = data.home;
  const serviceEdges = (data.services || {}).edges || [];

  const providersWithServices = providers.map((provider) => {
    return {
      ...provider,
      services: serviceEdges
        .filter(
          (serviceEdge) =>
            serviceEdge.node.provider.id === provider.associatedProvider.id
        )
        .map((edge) => edge.node)
    };
  });

  return (
    <Layout>
      {/* {errors && <SEO title="GraphQL Error" />} */}
      {/* {provider && (
        <SEO
          title={provider.title || 'Untitled'}
          description={toPlainText(provider._rawExcerpt)}
          image={provider.mainImage}
        />
      )} */}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {providersWithServices && (
        <Home providers={providersWithServices} mainImage={mainImage} />
      )}
    </Layout>
  );
};

export default HomeTemplate;
