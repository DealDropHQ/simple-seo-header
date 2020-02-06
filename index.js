export default ({ siteURL, pageTitle, siteImage, description }) => {
  return (
    <Head>
      <title>{pageTitle}</title>

      {/***** GENERAL *****/}
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta itemprop="name" content={pageTitle} />
      <meta itemprop="image" content={siteImage} />
      <link rel="canonical" href={siteURL} />

      {/***** FACEBOOK *****/}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:url" content={siteURL} />
      <meta property="og:site_name" content="DealDrop" />
      <meta property="og:type" content="dealdrop:coupon_brand" />

      {/***** TWITTER *****/}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}