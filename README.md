# UONE PAY Disbursement Landing Page

## 🏗 Project Structure

```
├── app/                          # Next.js App Router
│   ├── (landing)/               # Landing page route group
│   │   ├── layout.tsx           # Landing layout
│   │   └── page.tsx             # Home page
│   ├── api/                     # API routes
│   │   ├── contact/             # Contact form API
│   │   └── register/            # Registration API
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── sitemap.ts               # Dynamic sitemap
├── components/                   # React components
│   ├── sections/                # Page sections
│   │   ├── hero/                # Hero section
│   │   ├── about/               # About section
│   │   ├── features/            # Features section
│   │   ├── pricing/             # Pricing section
│   │   └── contact/             # Contact section
│   ├── ui/                      # Reusable UI components
│   └── LazyComponents.tsx       # Lazy loading components
├── data/                        # Static data
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
├── public/                      # Static assets
└── styles/                      # Additional styles
```

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/uonepay-landing.git
   cd uonepay-landing
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration:

   ```env
   # SMTP Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM=your-email@gmail.com
   SMTP_TO=admin@uonepay.id

   # SEO Verification
   GOOGLE_SITE_VERIFICATION=your-google-verification-code
   BING_SITE_VERIFICATION=your-bing-verification-code
   ```

4. **Run development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📜 Available Scripts

| Script                 | Description                  |
| ---------------------- | ---------------------------- |
| `npm run dev`          | Start development server     |
| `npm run build`        | Build for production         |
| `npm run start`        | Start production server      |
| `npm run lint`         | Run ESLint                   |
| `npm run type-check`   | Run TypeScript type checking |
| `npm run format`       | Format code with Prettier    |
| `npm run format:check` | Check code formatting        |
| `npm run clean`        | Clean build files            |
| `npm run analyze`      | Analyze bundle size          |

## 🎨 Design System

### Colors

```css
--brand: #ff6b35 /* Primary Orange */ --sun: #fbf2e0 /* Light Yellow */
  --creamy: #fff8f0 /* Cream */ --ink: #1a1a1a /* Dark Gray */ --mist: #f5f5f5
  /* Light Gray */;
```

### Typography

- **Font Family**: Poppins (300, 400, 500, 600, 700, 800, 900)
- **Responsive**: Scales from 0.875rem to 1.125rem
- **Line Height**: Optimized for readability
# uonepay-landing-page
