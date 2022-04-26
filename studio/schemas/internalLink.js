export default {
  name: 'internalLink',
  type: 'object',
  title: 'Internal link',
  fields: [
    {
      name: 'internalReference',
      title: 'Internal Reference',
      type: 'reference',
      to: [{ type: 'rule' }]
    }
  ]
};
