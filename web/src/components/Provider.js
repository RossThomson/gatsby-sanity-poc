// import * as styles from './blog-post.module.css';
// import { differenceInDays, formatDistance, format } from 'date-fns';
// import AuthorList from './author-list';
import Container from './Container';
import PortableText from './PortableText';
import React from 'react';
import { Link } from 'gatsby';
// import { GatsbyImage } from 'gatsby-plugin-image';
// import { buildImageObj } from '../lib/helpers';
// import { imageUrlFor } from '../lib/image-url';

function Provider({ provider }) {
  const { _rawDescription, services, slug } = provider;
  console.log(services);
  return (
    <article>
      {/* {mainImage && mainImage.asset && (
        <div>
          <GatsbyImage
            image={mainImage.asset.gatsbyImageData}
            alt={mainImage.alt}
          />
        </div>
      )} */}
      <Container>
        <div>
          {_rawDescription && <PortableText blocks={_rawDescription} />}
          {services.map((service) => (
            <div key={service.id}>
              <h3>{service.title}</h3>
              {service.rules && (
                <ul>
                  {service.rules.map((rule) => (
                    <li>
                      <Link
                        key={rule.id}
                        to={`/${rule.language}/${slug.current}/${service.slug.current}/${rule.slug.current}`}
                      >
                        {rule.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </article>
  );
}

export default Provider;
