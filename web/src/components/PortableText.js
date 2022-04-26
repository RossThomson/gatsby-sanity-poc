import { PortableText as BasePortableText } from '@portabletext/react';
import React from 'react';
import { Link } from 'gatsby';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
// import clientConfig from "../../client-config";
// import { Figure } from "./Figure";

const components = {
  types: {
    /* eslint-disable-next-line react/display-name */
    referenceLink: ({ value }) => {
      if (!value.links) {
        return null;
      }

      return (
        <div>
          <h4>{value.referenceSectionTitle}</h4>
          {value.links &&
            value.links.map((link) => (
              <a key={link._key} href={link.url}>
                {link.title}
              </a>
            ))}
        </div>
      );
    },
    internalLink: ({ value }) => {
      if (!value || !value.internalReference) {
        return null;
      }

      return (
        <Link to={`../${value.internalReference.slug.current}`}>
          {value.internalReference.title}
        </Link>
      );
    },
    code: ({ value }) => {
      return (
        <div>
          <pre>
            <code>{value.code}</code>
          </pre>
        </div>
      );
    },
    image: ({ value }) => {
      return (
        <img
          src={imageUrlFor(buildImageObj(value))
            // .width(1200)
            // .height(Math.floor((9 / 16) * 1200))
            .fit('crop')
            .auto('format')
            .url()}
          alt={value.alt}
        />
      );
    },
    note: ({ value }) => {
      return (
        <div
          style={{
            background: '#FCE79E',
            padding: '10px',
            borderRadius: '4px'
          }}
        >
          <h5>Note</h5>
          <BasePortableText value={value.content} />
        </div>
      );
    }
  }
};

const PortableText = ({ blocks }) => (
  <BasePortableText
    value={blocks}
    components={components}
    // {...clientConfig.sanity}
  />
);

export default PortableText;
