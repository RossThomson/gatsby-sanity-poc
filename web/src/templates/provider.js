import { graphql } from 'gatsby';
// import BlogPost from '../components/blog-post';
import React from 'react';
import GraphQLErrorList from '../components/GraphQLErrorList';
import Layout from '../components/Layout';
import Provider from '../components/Provider';
import Container from '../components/Container';
// import SEO from '../components/seo';
// import { toPlainText } from '../lib/helpers';

export const query = graphql`
  query ProviderTemplateQuery($id: String!) {
    provider: sanityProvider(id: { eq: $id }) {
      name
      slug {
        current
      }
      id
      _rawDescription(resolveReferences: { maxDepth: 10 })
    }
    rules: allSanityRule(
      filter: { service: { provider: { id: { eq: $id } } } }
    ) {
      edges {
        node {
          id
          language
          title
          slug {
            current
          }
          service {
            id
            title
            slug {
              current
            }
          }
        }
      }
    }
  }
`;

const ProviderTemplate = (props) => {
  const { data, errors } = props;
  const provider = data && data.provider;
  const ruleEdges = (data.rules || {}).edges || [];

  const providerWithRulesServices = ruleEdges.reduce(
    (accumulator, currentEdge) => {
      const { services = [] } = accumulator;
      const rule = currentEdge.node;
      const existingServiceIndex = services.findIndex(
        (service) => service.id === rule.service.id
      );

      if (existingServiceIndex !== -1) {
        const existingService = services[existingServiceIndex];
        const updatedService = {
          ...existingService,
          rules: [...existingService.rules, rule]
        };

        return {
          ...accumulator,
          services: [
            ...services.slice(0, existingServiceIndex),
            updatedService,
            ...services.slice(existingServiceIndex + 1)
          ]
        };
      }

      return {
        ...accumulator,
        services: [
          ...services,
          {
            ...rule.service,
            rules: [rule]
          }
        ]
      };
    },
    provider
  );

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

      {provider && <Provider provider={providerWithRulesServices} />}
    </Layout>
  );
};

export default ProviderTemplate;
