/**
 * Royal Horizon — مكوّن الشعار في React
 * يدعم 3 أشكال: icon, monogram, lockup
 *
 * مثال الاستخدام:
 *   <Logo />                                  → الشعار الكامل (lockup)
 *   <Logo variant="icon" size={32} />         → الأيقونة فقط
 *   <Logo variant="monogram" color="white" /> → الشعار الرئيسي بلون مخصص
 */

import React from 'react';

const Logo = ({
  variant = 'lockup',          // 'icon' | 'monogram' | 'lockup'
  size = 'auto',               // عدد بالبكسل أو 'auto'
  color = 'currentColor',      // أي قيمة CSS color
  showTagline = false,         // إظهار "للسفر والسياحة" تحت الشعار
  className = '',
  ...rest
}) => {

  /* الأيقونة المبسطة — مناسبة للـ favicon والأماكن الصغيرة */
  if (variant === 'icon') {
    const dim = size === 'auto' ? 40 : size;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width={dim}
        height={dim}
        fill="none"
        role="img"
        aria-label="Royal Horizon"
        className={className}
        style={{ color }}
        {...rest}
      >
        <title>Royal Horizon</title>
        <path d="M8 44 Q32 35 56 44" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <circle cx="32" cy="34" r="8" fill="currentColor"/>
      </svg>
    );
  }

  /* الشعار الرئيسي — حرف H + شمس + نجمة */
  if (variant === 'monogram') {
    const dim = size === 'auto' ? 120 : size;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width={dim}
        height={dim}
        fill="none"
        role="img"
        aria-label="Royal Horizon"
        className={className}
        style={{ color }}
        {...rest}
      >
        <title>Royal Horizon</title>
        <path d="M100 24 l2.4 7 l7 2.4 l-7 2.4 l-2.4 7 l-2.4 -7 l-7 -2.4 l7 -2.4 z" fill="currentColor"/>
        <rect x="46" y="56" width="12" height="108" rx="2" fill="currentColor"/>
        <rect x="142" y="56" width="12" height="108" rx="2" fill="currentColor"/>
        <circle cx="100" cy="102" r="11" fill="currentColor"/>
        <path d="M28 124 Q100 112 172 124" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
      </svg>
    );
  }

  /* الشكل الافتراضي: lockup أفقي بالعربي والإنجليزي */
  return (
    <div
      className={`rh-logo-lockup ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '14px',
        color,
        ...rest.style,
      }}
      {...rest}
    >
      <svg
        viewBox="0 0 64 64"
        width={size === 'auto' ? 44 : size}
        height={size === 'auto' ? 44 : size}
        fill="none"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <path d="M8 44 Q32 35 56 44" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <circle cx="32" cy="34" r="8" fill="currentColor"/>
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span
          lang="ar"
          dir="rtl"
          style={{
            fontFamily: "'Tajawal', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: '20px',
          }}
        >
          الأفق الملكي
        </span>
        <span
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontWeight: 500,
            fontSize: '11px',
            letterSpacing: '0.22em',
            marginTop: '5px',
            opacity: 0.82,
          }}
        >
          ROYAL HORIZON
        </span>
        {showTagline && (
          <>
            <span
              style={{
                fontFamily: "'Tajawal', system-ui, sans-serif",
                fontWeight: 400,
                fontSize: '11px',
                marginTop: '6px',
                opacity: 0.6,
              }}
            >
              للسفر والسياحة
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Logo;
