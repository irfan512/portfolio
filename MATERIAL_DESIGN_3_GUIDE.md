# Material Design 3 Implementation Guide

This guide explains how to use the new Material Design 3 system implemented in your portfolio website.

## 🎨 Color System

### Primary Colors
- **Primary-50** to **Primary-950**: Blue-based primary color palette
- **Primary-600**: Main primary color for buttons and accents
- **Primary-700**: Hover states and darker accents

### Surface Colors
- **Surface-50** to **Surface-950**: Neutral surface colors
- **Surface-50**: Light backgrounds
- **Surface-100**: Card backgrounds
- **Surface-200**: Borders and dividers
- **Surface-700**: Secondary text
- **Surface-900**: Primary text

### Semantic Colors
- **Success**: Green colors for positive actions
- **Warning**: Yellow/Orange colors for warnings
- **Error**: Red colors for errors
- **Secondary**: Purple colors for secondary actions
- **Tertiary**: Teal colors for tertiary actions

## 🧩 Component Library

### MaterialButton
```jsx
import { MaterialButton } from './Components/MaterialComponents';

// Filled button (default)
<MaterialButton onClick={handleClick}>
  Click Me
</MaterialButton>

// Outlined button
<MaterialButton variant="outlined">
  Outlined Button
</MaterialButton>

// Tonal button
<MaterialButton variant="tonal">
  Tonal Button
</MaterialButton>

// Different sizes
<MaterialButton size="small">Small</MaterialButton>
<MaterialButton size="medium">Medium</MaterialButton>
<MaterialButton size="large">Large</MaterialButton>
```

### MaterialCard
```jsx
import { MaterialCard } from './Components/MaterialComponents';

// Basic card
<MaterialCard>
  <div className="p-6">
    <h3>Card Title</h3>
    <p>Card content goes here</p>
  </div>
</MaterialCard>

// Interactive card with elevation
<MaterialCard elevation={3} interactive onClick={handleClick}>
  <div className="p-6">
    <h3>Clickable Card</h3>
    <p>This card has hover effects</p>
  </div>
</MaterialCard>
```

### MaterialChip
```jsx
import { MaterialChip } from './Components/MaterialComponents';

<MaterialChip variant="primary">Primary</MaterialChip>
<MaterialChip variant="secondary">Secondary</MaterialChip>
<MaterialChip variant="success">Success</MaterialChip>
<MaterialChip variant="warning">Warning</MaterialChip>
<MaterialChip variant="error">Error</MaterialChip>
```

### MaterialProgressBar
```jsx
import { MaterialProgressBar } from './Components/MaterialComponents';

<MaterialProgressBar value={75} max={100} showLabel />
<MaterialProgressBar value={60} variant="secondary" />
<MaterialProgressBar value={90} variant="success" />
```

### MaterialTextField
```jsx
import { MaterialTextField } from './Components/MaterialComponents';

<MaterialTextField
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChange={setEmail}
/>

<MaterialTextField
  label="Password"
  type="password"
  error="Password is required"
  helperText="Must be at least 8 characters"
/>
```

## 🎯 Typography Scale

Use these classes for consistent typography:

```jsx
// Display text
<h1 className="text-display-large">Large Display</h1>
<h2 className="text-display-medium">Medium Display</h2>
<h3 className="text-display-small">Small Display</h3>

// Headlines
<h1 className="text-headline-large">Large Headline</h1>
<h2 className="text-headline-medium">Medium Headline</h2>
<h3 className="text-headline-small">Small Headline</h3>

// Titles
<h4 className="text-title-large">Large Title</h4>
<h5 className="text-title-medium">Medium Title</h5>
<h6 className="text-title-small">Small Title</h6>

// Body text
<p className="text-body-large">Large body text</p>
<p className="text-body-medium">Medium body text</p>
<p className="text-body-small">Small body text</p>

// Labels
<span className="text-label-large">Large Label</span>
<span className="text-label-medium">Medium Label</span>
<span className="text-label-small">Small Label</span>
```

## 🌟 Elevation System

Use these shadow classes for depth:

```jsx
// Elevation levels
<div className="shadow-elevation-1">Level 1</div>
<div className="shadow-elevation-2">Level 2</div>
<div className="shadow-elevation-3">Level 3</div>
<div className="shadow-elevation-4">Level 4</div>
<div className="shadow-elevation-5">Level 5</div>

// Material-specific shadows
<div className="shadow-material-1">Material 1</div>
<div className="shadow-material-2">Material 2</div>
<div className="shadow-material-3">Material 3</div>
```

## 🎭 State Layers

Use state layer classes for interactive elements:

```jsx
<div className="state-layer bg-primary-600 text-white p-4 rounded-xl">
  Interactive Element with State Layer
</div>
```

## 🎨 Utility Classes

### Background Colors
```jsx
<div className="bg-surface-50">Light surface</div>
<div className="bg-surface-100">Surface background</div>
<div className="bg-primary-50">Light primary</div>
<div className="bg-primary-100">Primary background</div>
```

### Text Colors
```jsx
<p className="text-surface-900">Primary text</p>
<p className="text-surface-700">Secondary text</p>
<p className="text-surface-500">Muted text</p>
<p className="text-primary-600">Primary accent</p>
```

### Borders
```jsx
<div className="border border-surface-200">Light border</div>
<div className="border border-surface-300">Medium border</div>
<div className="border border-primary-200">Primary border</div>
```

## 🔄 Transitions

Use Material Design timing functions:

```jsx
// Standard transition
<div className="transition-material">Standard</div>

// Emphasized transition
<div className="transition-material-emphasized">Emphasized</div>

// Decelerated transition
<div className="transition-material-decelerated">Decelerated</div>

// Accelerated transition
<div className="transition-material-accelerated">Accelerated</div>
```

## 📱 Responsive Design

The system includes responsive utilities:

```jsx
// Responsive grid
<MaterialGrid cols={3} gap={6}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</MaterialGrid>

// Responsive container
<MaterialContainer maxWidth="lg">
  <p>Content with max width</p>
</MaterialContainer>
```

## 🎨 Best Practices

1. **Consistency**: Always use the defined color palette
2. **Accessibility**: Ensure sufficient contrast ratios
3. **Hierarchy**: Use elevation to create visual hierarchy
4. **States**: Include hover, focus, and active states
5. **Typography**: Use the defined typography scale
6. **Spacing**: Use consistent spacing values (4, 8, 16, 24, 32, 48)

## 🔧 Customization

To customize colors, edit the `tailwind.config.js` file:

```js
colors: {
  "primary": {
    50: "#f0f9ff",
    100: "#e0f2fe",
    // ... customize these values
  }
}
```

## 📚 Examples

Check the updated components for real-world usage:
- `About.js` - Uses Material Design 3 cards and buttons
- `Hero.js` - Uses surface colors and typography
- `Header.js` - Uses elevation and state layers

## 🚀 Getting Started

1. Import the component library:
```jsx
import { MaterialButton, MaterialCard } from './Components/MaterialComponents';
```

2. Use the predefined color classes:
```jsx
<div className="bg-surface-50 text-surface-900">
  Content with Material Design 3 colors
</div>
```

3. Apply the typography scale:
```jsx
<h1 className="text-display-medium">Your Title</h1>
```

4. Add elevation and interactions:
```jsx
<div className="bg-white rounded-xl shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-200">
  Interactive Card
</div>
```

This system provides a professional, consistent, and accessible design foundation for your portfolio website.
