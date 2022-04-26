import { graphql } from 'gatsby';
// import BlogPost from '../components/blog-post';
import React from 'react';
import GraphQLErrorList from '../components/GraphQLErrorList';
import Layout from '../components/Layout';
import Rule from '../components/Rule';
import Container from '../components/Container';
// import SEO from '../components/seo';
// import { toPlainText } from '../lib/helpers';

export const query = graphql`
  query RuleTemplateQuery($id: String!) {
    rule: sanityRule(id: { eq: $id }) {
      id
      ruleId
      riskLevel
      riskDescription
      title
      mainImage {
        alt
        asset {
          gatsbyImageData
        }
      }
      _rawDescription(resolveReferences: { maxDepth: 10 })
      _rawReferences(resolveReferences: { maxDepth: 10 })
      _rawRelated(resolveReferences: { maxDepth: 10 })
      _rawRemediationTitle(resolveReferences: { maxDepth: 10 })
      _rawRemediation(resolveReferences: { maxDepth: 10 })
      _rawAuditTitle(resolveReferences: { maxDepth: 10 })
      _rawAuditContent(resolveReferences: { maxDepth: 10 })
    }
  }
`;

const RuleTemplate = (props) => {
  const { data, errors, isDefaultPath } = props;
  const rule = data && data.rule;

  console.log('isDefaultPath', isDefaultPath);

  return (
    <Layout>
      {/* {errors && <SEO title="GraphQL Error" />} */}
      {/* {rule && (
        <SEO
          title={rule.title || 'Untitled'}
          description={toPlainText(rule._rawExcerpt)}
          image={rule.mainImage}
        />
      )} */}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {rule && <Rule {...rule} isDefaultPath={isDefaultPath} />}
    </Layout>
  );
};

export default RuleTemplate;
