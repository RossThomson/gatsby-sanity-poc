const { isFuture } = require('date-fns');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createSchemaCustomization = ({ actions, schema }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'SanityPost',
      interfaces: ['Node'],
      fields: {
        isPublished: {
          type: 'Boolean!',
          resolve: (source) => new Date(source.publishedAt) <= new Date()
        }
      }
    })
  ]);
};

async function createHomePage(pathPrefix = 'en', graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      sanityHome {
        language
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
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const { providers, language } = result.data.sanityHome;
  const path = language && language !== null ? language : pathPrefix;
  reporter.info(`Creating landing page: ${path}`);
  createPage({
    path,
    component: require.resolve('./src/templates/home.js'),
    context: {
      providerIds: providers.map(
        ({ associatedProvider }) => associatedProvider.id
      )
    }
  });
}

async function createProviderPages(
  pathPrefix = 'en',
  graphql,
  actions,
  reporter
) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityProvider {
        edges {
          node {
            language
            slug {
              current
            }
            id
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const providerEdges = (result.data.allSanityProvider || {}).edges || [];
  providerEdges
    // .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge) => {
      const { id, slug = {}, language } = edge.node;
      pathPrefix = language && language !== null ? language : pathPrefix;

      const path = `${pathPrefix}/${slug.current}/`;
      reporter.info(`Creating provider page: ${path}`);
      createPage({
        path,
        component: require.resolve('./src/templates/provider.js'),
        context: { id, language }
      });
    });
}

async function createRulePages(pathPrefix = 'en', graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityRule {
        edges {
          node {
            language
            slug {
              current
            }
            service {
              slug {
                current
              }
              provider {
                slug {
                  current
                }
              }
            }
            id
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const ruleEdges = (result.data.allSanityRule || {}).edges || [];
  ruleEdges
    // .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge) => {
      const { id, slug = {}, service, language } = edge.node;
      const serviceSlug = service.slug.current;
      const providerSlug = service.provider.slug.current;
      console.log('language', language);
      pathPrefix = language && `${language}` !== 'null' ? language : pathPrefix;
      const defaultPath = `/${providerSlug}/${serviceSlug}/${slug.current}/`;
      const path = pathPrefix + defaultPath;
      reporter.info(`Creating rule page: ${path}`);
      createPage({
        path,
        component: require.resolve('./src/templates/rule.js'),
        context: { id }
      });

      if (language === 'en') {
        console.log('HERE');
        createPage({
          path: defaultPath,
          component: require.resolve('./src/templates/rule.js'),
          context: { id, isDefaultPath: true }
        });
      }
    });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createHomePage('/', graphql, actions, reporter);
  await createProviderPages('/', graphql, actions, reporter);
  await createRulePages('/', graphql, actions, reporter);
};
