export default {
  name: 'providerOption',
  title: 'Provider Details',
  type: 'object',
  fields: [
    {
      name: 'SupportedServicesTitle',
      title: 'Provider supported services title',
      type: 'string'
    },
    {
      name: 'SupportedServicesLinkTitle',
      title: 'Provider supported services link title',
      type: 'string'
    },
    {
      name: 'ServiceCoverageLinkTitle',
      title: 'Provider supported services link title',
      type: 'string'
    },
    {
      name: 'associatedProvider',
      title: 'Associated Provider',
      type: 'reference',
      to: [{ type: 'provider' }]
    }
  ]
};
