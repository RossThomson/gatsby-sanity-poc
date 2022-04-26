// import * as styles from './blog-post.module.css';
// import { differenceInDays, formatDistance, format } from 'date-fns';
// import AuthorList from './author-list';
import Container from './Container';
import PortableText from './PortableText';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
// import { buildImageObj } from '../lib/helpers';
// import { imageUrlFor } from '../lib/image-url';

function Rule(props) {
  const {
    title,
    mainImage,
    ruleId,
    riskLevel,
    riskDescription,
    _rawDescription,
    _rawReferences,
    _rawRelated,
    _rawRemediation,
    _rawRemediationTitle,
    _rawAuditTitle,
    _rawAuditContent,
    isDefaultPath
  } = props;
  return (
    <article>
      {mainImage && mainImage.asset && (
        <div>
          {/* <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt={mainImage.alt}
          /> */}
          <GatsbyImage
            image={mainImage.asset.gatsbyImageData}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div>
          <p>{title}</p>
          <p>{ruleId}</p>
          <p>{riskLevel}</p>
          {_rawDescription && <PortableText blocks={_rawDescription} />}
          <p>{riskDescription}</p>
          {_rawAuditTitle && <PortableText blocks={_rawAuditTitle} />}
          {_rawAuditContent &&
            _rawAuditContent.map((section) => (
              <div key={section._key}>
                <h3>{section.title}</h3>
                <PortableText blocks={section.content} />
              </div>
            ))}
          {_rawRemediationTitle && (
            <PortableText blocks={_rawRemediationTitle} />
          )}
          {_rawRemediation &&
            _rawRemediation.map((section) => (
              <div key={section._key}>
                <h3>{section.title}</h3>
                <PortableText blocks={section.content} />
              </div>
            ))}

          {_rawReferences && (
            <>
              {' '}
              <h3>References</h3>
              <PortableText blocks={_rawReferences} />
            </>
          )}
          {_rawRelated && (
            <>
              <h3>Related Rules</h3>
              <PortableText blocks={_rawRelated} />
            </>
          )}
        </div>
      </Container>
    </article>
  );
}

export default Rule;
