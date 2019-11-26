# Simple SEO Header
This is a simple SEO focused header template allowing you to easily manage a pages title, description, canonical url, Twitter card etc.

## Installation
`npm install seo-header`

### Example:
```
export default () => {
  const siteURL = `https://www.dealdrop.com`
  const siteName = `DealDrop`

  const pageTitle = `${siteName} - Find the best coupons and promo codes`
  const siteImage = `https://images.dealdrop.com/uploads/DealDrop-Logo-2x-purple-blue.png`
  const description = `At ${siteName} we find the latest working coupon codes, discounts and promos. Find more offers to help you save money at ${siteURL}`

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
```

We use this code on every page at [DealDrop.com](https://www.dealdrop.com). For a single store page we inject various data points (ie the number of coupons or the date the store listing was last updated). Here are two examples which you can review -  [VapeMate coupons](https://www.dealdrop.com/store/vapemate.co.uk) and [Tommy Johns coupons](https://www.dealdrop.com/store/tommyjohn.com).