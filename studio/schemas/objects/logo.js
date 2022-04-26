export default {
  name: 'logo',
  title: 'Logo',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'title',
      title: 'Image title',
      type: 'string'
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption'
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'link' }]
    }
  ]
};
