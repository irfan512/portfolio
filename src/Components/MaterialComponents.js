import React from 'react';

// Material 3 Button Components
export const MaterialButton = ({ 
  variant = 'filled', 
  children, 
  className = '', 
  onClick, 
  disabled = false,
  size = 'medium',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    filled: 'bg-primary-600 text-white hover:bg-primary-700 shadow-elevation-2 hover:shadow-elevation-3 focus:ring-primary-200',
    outlined: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 hover:border-primary-700 focus:ring-primary-200',
    tonal: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus:ring-secondary-200',
    text: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-200',
    elevated: 'bg-white text-surface-700 shadow-elevation-2 hover:shadow-elevation-3 border border-surface-200 focus:ring-surface-200'
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button 
      className={classes} 
      onClick={onClick} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Material 3 Card Component
export const MaterialCard = ({ 
  children, 
  className = '', 
  elevation = 1, 
  interactive = false,
  onClick,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-xl border border-surface-100 transition-all duration-200';
  const elevationClasses = `shadow-elevation-${elevation}`;
  const interactiveClasses = interactive ? 'cursor-pointer hover:shadow-elevation-3 active:shadow-elevation-1' : '';
  
  const classes = `${baseClasses} ${elevationClasses} ${interactiveClasses} ${className}`;
  
  return (
    <div 
      className={classes} 
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

// Material 3 Chip Component
export const MaterialChip = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200';
  
  const variants = {
    primary: 'bg-primary-100 text-primary-800 hover:bg-primary-200',
    secondary: 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200',
    success: 'bg-success-100 text-success-800 hover:bg-success-200',
    warning: 'bg-warning-100 text-warning-800 hover:bg-warning-200',
    error: 'bg-error-100 text-error-800 hover:bg-error-200',
    surface: 'bg-surface-100 text-surface-800 hover:bg-surface-200'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${className}`;
  
  return (
    <div 
      className={classes} 
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

// Material 3 Divider Component
export const MaterialDivider = ({ 
  orientation = 'horizontal', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'bg-surface-200';
  const orientationClasses = orientation === 'vertical' ? 'w-px h-full' : 'h-px w-full';
  
  const classes = `${baseClasses} ${orientationClasses} ${className}`;
  
  return <div className={classes} {...props} />;
};

// Material 3 Badge Component
export const MaterialBadge = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  
  const variants = {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-secondary-100 text-secondary-800',
    success: 'bg-success-100 text-success-800',
    warning: 'bg-warning-100 text-warning-800',
    error: 'bg-error-100 text-error-800',
    surface: 'bg-surface-100 text-surface-800'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${className}`;
  
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

// Material 3 Progress Bar Component
export const MaterialProgressBar = ({ 
  value = 0, 
  max = 100, 
  variant = 'primary', 
  className = '', 
  showLabel = false,
  ...props 
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const baseClasses = 'w-full bg-surface-200 rounded-full overflow-hidden';
  const barClasses = 'h-2.5 rounded-full transition-all duration-500';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600',
    secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
    success: 'bg-gradient-to-r from-success-500 to-success-600',
    warning: 'bg-gradient-to-r from-warning-500 to-warning-600',
    error: 'bg-gradient-to-r from-error-500 to-error-600'
  };
  
  const classes = `${baseClasses} ${className}`;
  
  return (
    <div className="space-y-2">
      {showLabel && (
        <div className="flex justify-between text-sm">
          <span className="text-surface-700">Progress</span>
          <span className="text-primary-600 font-medium">{percentage}%</span>
        </div>
      )}
      <div className={classes} {...props}>
        <div 
          className={`${barClasses} ${variants[variant]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

// Material 3 Avatar Component
export const MaterialAvatar = ({ 
  src, 
  alt, 
  size = 'medium', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'rounded-full overflow-hidden bg-surface-200 flex items-center justify-center';
  
  const sizes = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
    xlarge: 'w-24 h-24'
  };
  
  const classes = `${baseClasses} ${sizes[size]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="text-surface-600 font-medium text-lg">
          {alt ? alt.charAt(0).toUpperCase() : 'U'}
        </span>
      )}
    </div>
  );
};

// Material 3 Icon Button Component
export const MaterialIconButton = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  onClick,
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-200',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-200',
    surface: 'bg-surface-100 text-surface-700 hover:bg-surface-200 focus:ring-surface-200',
    tonal: 'bg-primary-100 text-primary-700 hover:bg-primary-200 focus:ring-primary-200'
  };
  
  const sizes = {
    small: 'w-8 h-8',
    medium: 'w-10 h-10',
    large: 'w-12 h-12'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button 
      className={classes} 
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Material 3 Text Field Component
export const MaterialTextField = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  type = 'text',
  error,
  helperText,
  className = '',
  ...props 
}) => {
  const baseClasses = 'w-full px-4 py-3 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-4';
  const stateClasses = error 
    ? 'border-error-500 focus:ring-error-200 focus:border-error-600' 
    : 'border-surface-300 focus:ring-primary-200 focus:border-primary-600';
  
  const classes = `${baseClasses} ${stateClasses} ${className}`;
  
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-surface-700">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classes}
        {...props}
      />
      {helperText && (
        <p className={`text-sm ${error ? 'text-error-600' : 'text-surface-500'}`}>
          {helperText}
        </p>
      )}
    </div>
  );
};

// Material 3 Container Component
export const MaterialContainer = ({ 
  children, 
  maxWidth = 'lg', 
  className = '', 
  ...props 
}) => {
  const maxWidths = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full'
  };
  
  const classes = `mx-auto px-4 sm:px-6 lg:px-8 ${maxWidths[maxWidth]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

// Material 3 Grid Components
export const MaterialGrid = ({ 
  children, 
  cols = 1, 
  gap = 6, 
  className = '', 
  ...props 
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
  };
  
  const gaps = {
    2: 'gap-2',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
    12: 'gap-12'
  };
  
  const classes = `grid ${gridCols[cols]} ${gaps[gap]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default {
  MaterialButton,
  MaterialCard,
  MaterialChip,
  MaterialDivider,
  MaterialBadge,
  MaterialProgressBar,
  MaterialAvatar,
  MaterialIconButton,
  MaterialTextField,
  MaterialContainer,
  MaterialGrid
};
