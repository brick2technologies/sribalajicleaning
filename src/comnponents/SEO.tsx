import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string; // e.g., "/services" or "/about"
}

const SEO: React.FC<SEOProps> = ({ title, description, path }) => {
  const siteUrl = "https://sribalajideepcleaningservices.com";
  const fullUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title} | Sri Balaji Services Hyderabad</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* WhatsApp / Social Media (Open Graph) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;