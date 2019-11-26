export default () => {
  const siteURL = `https://www.dealdrop.com`
  const siteName = `DealDrop`

  const pageTitle = `This is the page title ${siteName}`
  const siteImage = `https://images.dealdrop.com/uploads/DealDrop-Logo-2x-purple-blue.png`
  const description = `Latest ${siteName} coupon codes, discounts and promos. Find more coupons at ${siteURL}`

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