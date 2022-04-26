export default {
  name: 'richContentSection',
  title: 'Rich Content Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent'
    }
  ]
};
