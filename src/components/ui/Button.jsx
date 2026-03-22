// src/components/ui/Button.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  ...props
}) {
  const base = `inline-flex items-center justify-center gap-2 font-accent font-700 tracking-widest uppercase transition-all duration-300 relative overflow-hidden group`;

  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'bg-transparent text-white/70 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10',
  };

  const sizes = {
    sm: 'text-xs py-2 px-5',
    md: 'text-sm py-3.5 px-8',
    lg: 'text-base py-4 px-10',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-[inherit]" />
      )}
    </>
  );

  if (to) return <Link to={to} className={classes} {...props}>{inner}</Link>;
  if (href) return <a href={href} className={classes} {...props}>{inner}</a>;
  return <button onClick={onClick} className={classes} {...props}>{inner}</button>;
}
