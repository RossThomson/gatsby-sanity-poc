export default {
  name: 'referenceLink',
  type: 'object',
  title: 'Reference Section',
  fields: [
    {
      name: 'referenceSectionTitle',
      title: 'Reference Section Title',
      type: 'string'
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'link' }, { type: 'internalLink' }]
    }
  ]
};
