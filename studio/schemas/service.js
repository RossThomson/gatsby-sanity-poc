export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      title: 'Language',
      type: 'string',
      name: 'language',
      initialValue: 'en',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Spanish', value: 'es' }
        ]
      }
    },
    {
      name: 'name',
      title: 'Service Name',
      type: 'string'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description:
        'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'title',
      title: 'Page Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    },
    {
      name: 'excerpt',
      title: 'Excerpt of Service',
      type: 'text'
    },
    {
      title: 'Provider',
      name: 'provider',
      type: 'reference',
      to: [{ type: 'provider' }]
    }
  ]
};
