# Sections Components Structure

This directory contains all the main sections of the landing page, organized into subdirectories for better maintainability and readability.

## 📁 Folder Structure

```
components/sections/
├── hero/                    # Hero section components
│   ├── Hero.tsx            # Main hero component
│   ├── HeroBackground.tsx  # Background layers
│   ├── HeroContent.tsx     # Main content (title, description, CTA)
│   ├── HeroAssets.tsx      # Floating assets and images
│   └── index.ts            # Export file
│
├── about/                   # About section components
│   ├── About.tsx           # Main about component
│   ├── AboutHeader.tsx     # Header with logo and description
│   ├── AboutVisionMission.tsx # Vision and mission cards
│   ├── AboutStats.tsx      # Statistics/achievements grid
│   └── index.ts            # Export file
│
├── features/                # Features section components
│   ├── Features.tsx        # Main features component
│   ├── FeaturesHeader.tsx  # Header with title and description
│   ├── FeaturesGrid.tsx    # Features grid layout
│   ├── FeaturesImage.tsx   # Features image section
│   └── index.ts            # Export file
│
├── pricing/                 # Pricing section components
│   ├── Pricing.tsx         # Main pricing component
│   ├── PricingHeader.tsx   # Header section
│   ├── PricingChannels.tsx # Channels list with expandable content
│   ├── PricingImage.tsx    # Pricing image section
│   └── index.ts            # Export file
│
└── contact/                 # Contact section components
    ├── Contact.tsx         # Main contact component
    ├── ContactForm.tsx     # Contact form
    ├── ContactInfo.tsx     # Contact information cards
    ├── ContactPopup.tsx    # Registration popup
    └── index.ts            # Export file
```

## 🎯 Benefits of This Structure

1. **Modularity**: Each section is broken down into smaller, focused components
2. **Maintainability**: Easy to find and modify specific parts
3. **Reusability**: Components can be reused across different sections
4. **Team Collaboration**: Multiple developers can work on different sections simultaneously
5. **Testing**: Easier to write unit tests for individual components
6. **Performance**: Better code splitting and lazy loading possibilities

## 📝 Usage

Import sections using the index files for clean imports:

```tsx
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Features from '@/components/sections/features';
import Pricing from '@/components/sections/pricing';
import Contact from '@/components/sections/contact';
```

## 🔧 Component Guidelines

- Each main component should be the entry point for its section
- Sub-components should be focused on a single responsibility
- Use TypeScript interfaces for props
- Include proper animations and responsive design
- Follow consistent naming conventions
- Add proper comments for complex logic

## 🚀 Best Practices

1. **Single Responsibility**: Each component should have one clear purpose
2. **Props Interface**: Define TypeScript interfaces for all props
3. **Consistent Styling**: Use Tailwind CSS classes consistently
4. **Animation**: Use Framer Motion for smooth animations
5. **Responsive**: Ensure all components work on mobile and desktop
6. **Accessibility**: Include proper ARIA labels and semantic HTML
