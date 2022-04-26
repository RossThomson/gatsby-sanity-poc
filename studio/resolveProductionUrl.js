export default function resolveProductionUrl(document) {
  console.log('DOCUMENT', document);
  return `http://localhost:8000/${document.language}/aws/s3/${document.slug.current}`;
}
