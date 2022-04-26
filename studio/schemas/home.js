export default {
  name: 'home',
  title: 'Home',
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
      name: 'mainImage',
      title: 'Page Banner',
      type: 'pageBanner'
    },
    {
      name: 'providers',
      title: 'Providers',
      type: 'array',
      of: [{ type: 'providerOption' }]
    }
  ]
};
