/** @type {import('tailwindcss').Config} */
/**
 * Royal Horizon — Tailwind preset
 *
 * يربط توكنات النظام بـ Tailwind utility classes.
 * مثال: bg-lavender-600  text-lavender-800  bg-cream  text-bronze
 */

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        // اللون الأساسي
        lavender: {
          50:  '#F7F4FC',
          100: '#EDE7F8',
          200: '#D6C8EE',
          300: '#B0A0DC',
          400: '#9580CC',
          500: '#7C5FCC',
          600: '#6B4FB8',   // الأساسي
          700: '#5A3FA0',
          800: '#3D2A6B',
          900: '#2D1E5C',
        },
        // ألوان سعودية دافئة مساندة
        cream:  '#F8F3EA',
        sand:   '#E8DCC4',
        bronze: {
          DEFAULT: '#B07A3D',
          dark:    '#8B5E2A',
        },
        sage:   '#7A9485',
        // محايدات
        ink:    '#1B1530',
        slate: {
          DEFAULT: '#4A4458',
        },
        mist:   '#DCD5E8',
        fog:    '#F0EDF5',
      },
      fontFamily: {
        ar:      ['Tajawal', 'system-ui', 'sans-serif'],
        en:      ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Tajawal', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // مقاييس مخصصة تطابق توكنات النظام
        xs:   ['12px', { lineHeight: '1.5' }],
        sm:   ['14px', { lineHeight: '1.6' }],
        base: ['16px', { lineHeight: '1.7' }],
        lg:   ['18px', { lineHeight: '1.6' }],
        xl:   ['22px', { lineHeight: '1.4' }],
        '2xl': ['28px', { lineHeight: '1.3' }],
        '3xl': ['36px', { lineHeight: '1.2' }],
        '4xl': ['48px', { lineHeight: '1.1' }],
        '5xl': ['64px', { lineHeight: '1.05' }],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(45, 30, 92, 0.06)',
        md: '0 4px 12px rgba(45, 30, 92, 0.08)',
        lg: '0 12px 32px rgba(45, 30, 92, 0.12)',
        xl: '0 24px 60px rgba(45, 30, 92, 0.16)',
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
    },
  },
  plugins: [],
};
