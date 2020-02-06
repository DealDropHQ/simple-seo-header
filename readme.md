# Simple SEO Header
This is a simple SEO focused header template allowing you to easily manage a pages title, description, canonical url, Twitter card etc.

## Installation
`npm install seo-header`

### Example:
```
import SeoHeader from '@dealdrop/seo-header/seo-header'

<SeoHeader 
  siteURL="https://www.dealdrop.com"
  pageTitle="Site Title"
  description="Site description"
  siteImage="https://....."
/>

```

We use this code on every page at [DealDrop.com](https://www.dealdrop.com). For a single store page we inject various data points (ie the number of coupons or the date the store listing was last updated). Here are two examples which you can review -  [VapeMate coupons](https://www.dealdrop.com/store/vapemate.co.uk) and [Tommy Johns coupons](https://www.dealdrop.com/store/tommyjohn.com).