/**
 * JsonLd — injects JSON-LD structured data into any page
 * Usage: <JsonLd data={organizationSchema} />
 */
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
export default JsonLd;
