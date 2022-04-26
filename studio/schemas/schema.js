// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import rule from './rule';
import service from './service';
import provider from './provider';
import link from './link';
import referenceLink from './referenceLink';
import internalLink from './internalLink';
import richContentSection from './richContentSection';
import note from './note';
import home from './home';
import siteSettings from './siteSettings';
import providerOption from './providerOption';
import pageBanner from './objects/pageBanner';
import logo from './objects/logo';
import openGraph from './objects/openGraph';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    rule,
    service,
    provider,
    link,
    referenceLink,
    internalLink,
    richContentSection,
    note,
    home,
    siteSettings,
    providerOption,
    pageBanner,
    logo,
    openGraph
  ])
});
