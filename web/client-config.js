module.exports = {
  sanity: {
    projectId: process.env.GATSBY_SANITY_PROJECT_ID || '8cic12uu',
    dataset: process.env.GATSBY_SANITY_DATASET || 'production',
    token: process.env.SANITY_READ_TOKEN
  }
};
