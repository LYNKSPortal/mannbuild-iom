# SEO Improvements for MannBuild Website

This document outlines all the SEO optimizations implemented for the MannBuild construction website.

## ✅ Implemented SEO Features

### 1. **Comprehensive Metadata**
- **Root Layout** (`src/app/layout.tsx`):
  - Dynamic title templates
  - Rich meta descriptions with keywords
  - Open Graph tags for social media sharing
  - Twitter Card metadata
  - Proper locale settings (en_GB for Isle of Man)
  - Google Search Console verification placeholder
  - Robot indexing directives

- **Page-Specific Metadata** (via layout files):
  - `/about` - About page with company history focus
  - `/services` - Services page optimized for construction service keywords
  - `/projects` - Portfolio page with project-specific keywords
  - `/contact` - Contact/quote page with conversion-focused metadata
  - `/finance` - Financing options page
  - `/merch` - Merchandise page
  - `/privacy` - Privacy policy page
  - `/terms` - Terms & conditions page

### 2. **Structured Data (JSON-LD)**
- **Organization Schema** in root layout:
  - GeneralContractor type
  - Business information (name, description, URL)
  - Contact details (telephone, address)
  - Service catalog with 4 main offerings:
    - Residential Construction
    - Commercial Construction
    - Project Management
    - Design & Build
  - Social media profiles
  - Area served (Isle of Man)

### 3. **Technical SEO**

#### Sitemap (`src/app/sitemap.ts`)
- Dynamic XML sitemap generation
- All pages included with appropriate:
  - Change frequencies
  - Priority levels
  - Last modified dates
- Automatically served at `/sitemap.xml`

#### Robots.txt (`public/robots.txt`)
- Allows all search engine crawlers
- References sitemap location
- Ready for future exclusions if needed

#### Next.js Configuration (`next.config.ts`)
- **Compression**: Enabled for faster page loads
- **Security Headers**:
  - X-DNS-Prefetch-Control
  - X-Frame-Options (SAMEORIGIN)
  - X-Content-Type-Options (nosniff)
  - Referrer-Policy
- **Image Optimization**:
  - AVIF and WebP format support
  - Responsive device sizes
  - Multiple image sizes for different viewports
- **Removed** `X-Powered-By` header for security

### 4. **Image Optimization**
- **Descriptive Alt Text**:
  - Hero image: "MannBuild construction van at Isle of Man building site - Professional construction services"
  - Project images: Include project name, category, and location
- **Responsive Images**:
  - Proper `sizes` attributes for different breakpoints
  - Priority loading for above-the-fold images
  - Lazy loading for below-the-fold content

### 5. **Semantic HTML & Accessibility**
- **ARIA Labels**: All major sections have `aria-labelledby` attributes
- **Heading Hierarchy**: Proper H1-H6 structure
- **Section IDs**: All headings have unique IDs for:
  - `hero-heading`
  - `services-heading`
  - `why-choose-heading`
  - `cta-heading`
- **Semantic Tags**: Proper use of `<section>`, `<article>`, `<nav>`, etc.

### 6. **Content Optimization**
- **Keywords Targeted**:
  - Primary: construction, building services, Isle of Man
  - Secondary: residential construction, commercial construction, home renovation
  - Long-tail: custom homes Isle of Man, construction project management, design and build services
- **Meta Descriptions**: 
  - Unique for each page
  - 150-160 characters
  - Include call-to-action
  - Location-specific (Isle of Man)

### 7. **Performance Optimizations**
- Next.js 16.2.1 with Turbopack for faster builds
- Image optimization with modern formats (AVIF, WebP)
- Compression enabled
- Font optimization with Google Fonts
- React Compiler enabled for better performance

## 🔧 Configuration Files Modified

1. `src/app/layout.tsx` - Root metadata and structured data
2. `next.config.ts` - SEO and performance settings
3. `src/app/sitemap.ts` - Dynamic sitemap generation
4. `public/robots.txt` - Search engine directives
5. Layout files for all routes (8 pages)
6. `src/app/page.tsx` - Semantic HTML improvements

## 📊 SEO Checklist

- ✅ Title tags (unique per page)
- ✅ Meta descriptions (unique per page)
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Structured data (JSON-LD)
- ✅ XML Sitemap
- ✅ Robots.txt
- ✅ Canonical URLs (via metadataBase)
- ✅ Image alt attributes
- ✅ Semantic HTML
- ✅ Mobile-friendly (responsive design)
- ✅ Fast loading (Next.js optimization)
- ✅ HTTPS ready
- ✅ Heading hierarchy
- ✅ Internal linking structure
- ✅ Keyword optimization
- ✅ Local SEO (Isle of Man focus)

## 🎯 Next Steps (Manual Configuration Required)

1. **Google Search Console**:
   - Replace `'your-google-verification-code'` in `src/app/layout.tsx` with actual verification code
   - Submit sitemap: `https://mannbuild.com/sitemap.xml`

2. **Domain Configuration**:
   - Update `metadataBase` URL if domain differs from `mannbuild.com`
   - Ensure HTTPS is configured

3. **Contact Information**:
   - Update telephone number in structured data (currently placeholder)
   - Add actual business address details

4. **Social Media**:
   - Update social media URLs in structured data
   - Add actual Facebook and LinkedIn profile URLs

5. **Analytics**:
   - Add Google Analytics 4
   - Add Google Tag Manager (optional)

6. **Logo**:
   - Add actual logo file at `/branding/logo.png` for structured data

7. **Additional Enhancements**:
   - Add FAQ schema for common questions
   - Add Review schema for testimonials
   - Create blog for content marketing
   - Add breadcrumb navigation with schema
   - Implement local business schema with operating hours

## 📈 Expected SEO Benefits

1. **Better Search Rankings**: Comprehensive metadata and structured data help search engines understand content
2. **Rich Snippets**: JSON-LD structured data enables rich search results
3. **Social Sharing**: Open Graph tags ensure proper previews on social media
4. **Local SEO**: Isle of Man location targeting improves local search visibility
5. **Mobile Performance**: Image optimization and responsive design improve mobile rankings
6. **User Experience**: Fast loading and semantic HTML improve engagement metrics
7. **Crawlability**: Sitemap and robots.txt ensure proper indexing

## 🔍 Testing & Validation

Use these tools to validate SEO implementation:

1. **Google Search Console** - Submit sitemap and monitor indexing
2. **Google Rich Results Test** - Validate structured data
3. **PageSpeed Insights** - Check performance scores
4. **Mobile-Friendly Test** - Verify mobile optimization
5. **Open Graph Debugger** - Test social media previews
6. **Schema Markup Validator** - Validate JSON-LD

## 📝 Notes

- All metadata is properly typed with TypeScript
- Server-side rendering ensures SEO tags are present on initial load
- Dynamic sitemap updates automatically when pages are added
- Image optimization happens automatically via Next.js Image component
- All SEO improvements follow Google's best practices and Web Vitals guidelines
