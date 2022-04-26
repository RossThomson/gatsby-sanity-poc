export default {
  name: 'rule',
  title: 'Rule',
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
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(80)
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description:
        'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'ruleId',
      title: 'Rule ID',
      type: 'string',
      validation: (Rule) => Rule.required().min(6).max(20)
    },
    {
      name: 'riskLevel',
      title: 'Risk level',
      type: 'array',
      validation: (riskLevel) => riskLevel.required(),
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Low', value: 'low' },
          { title: 'Medium', value: 'medium' },
          { title: 'High (not acceptable risk)', value: 'high' },
          { title: 'Very High (not tolerated)', value: 'veryHigh' }
        ]
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      validation: (categories) => categories.required(),
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Security', value: 'security' },
          { title: 'Cost', value: 'cost' },
          { title: 'Operational Excellence', value: 'operational' }
        ]
      }
    },
    {
      title: 'Service',
      name: 'service',
      type: 'reference',
      to: [{ type: 'service' }]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    },
    {
      name: 'riskDescription',
      tite: 'Description of risk',
      type: 'text'
    },
    {
      name: 'auditTitle',
      title: 'Audit title',
      type: 'blockContent'
    },
    {
      name: 'auditContent',
      title: 'Audit Content Sections',
      type: 'array',
      of: [{ type: 'richContentSection' }]
    },
    {
      name: 'remediationTitle',
      title: 'Remediation title',
      type: 'blockContent'
    },
    {
      name: 'remediation',
      title: 'Remediation Content Sections',
      type: 'array',
      of: [{ type: 'richContentSection' }]
    },
    {
      name: 'references',
      title: 'References',
      type: 'array',
      of: [
        { type: 'referenceLink' },
        { type: 'link' },
        { type: 'internalLink' }
      ]
    },
    {
      name: 'related',
      title: 'Related Content',
      type: 'array',
      of: [
        { type: 'referenceLink' },
        { type: 'link' },
        { type: 'internalLink' }
      ]
    }
  ]
};
