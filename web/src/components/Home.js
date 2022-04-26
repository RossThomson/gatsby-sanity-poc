// import * as styles from './blog-post.module.css';
// import { differenceInDays, formatDistance, format } from 'date-fns';
// import AuthorList from './author-list';
import Container from './Container';
import PortableText from './PortableText';
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import { buildImageObj } from '../lib/helpers';
// import { imageUrlFor } from '../lib/image-url';

function Provider({ providers, mainImage }) {
  return (
    <article>
      {mainImage && mainImage.asset && (
        <div>
          <GatsbyImage
            image={mainImage.asset.gatsbyImageData}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div>
          {providers.map((provider) => {
            const logoImage = getImage(provider.associatedProvider.logo.asset);

            return (
              <div key={provider.associatedProvider.id}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <h2>{provider.SupportedServicesLinkTitle}</h2>
                  <GatsbyImage image={logoImage} />
                </div>
                <Link
                  to={`/${provider.associatedProvider.language}/${provider.associatedProvider.slug.current}/`}
                >
                  {provider.ServiceCoverageLinkTitle}
                </Link>
                {provider.services &&
                  provider.services.map((service) => (
                    <div key={service.id}>
                      <h3>{service.name}</h3>
                      <p>{service.excerpt}</p>
                    </div>
                  ))}
              </div>
            );
          })}
        </div>
      </Container>
    </article>
  );
}

export default Provider;
