export default {
  name: 'pageBanner',
  title: 'Page Banner',
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
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.'
      // validation: (Rule) =>
      //   Rule.error('You have to fill out the alternative text.').required(),
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'link' }, { type: 'internalLink' }]
    }
  ]
};
