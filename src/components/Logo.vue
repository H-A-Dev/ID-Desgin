<!--
  Royal Horizon — مكوّن الشعار في Vue 3
  Composition API + <script setup>

  مثال:
    <Logo />
    <Logo variant="icon" :size="32" />
    <Logo variant="monogram" color="#FFFFFF" />
-->

<template>
  <!-- الأيقونة المبسطة -->
  <svg
    v-if="variant === 'icon'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    :width="resolvedSize"
    :height="resolvedSize"
    fill="none"
    role="img"
    aria-label="Royal Horizon"
    :class="className"
    :style="{ color }"
  >
    <title>Royal Horizon</title>
    <path d="M8 44 Q32 35 56 44" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" />
    <circle cx="32" cy="34" r="8" fill="currentColor" />
  </svg>

  <!-- الشعار الرئيسي -->
  <svg
    v-else-if="variant === 'monogram'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    :width="resolvedSize"
    :height="resolvedSize"
    fill="none"
    role="img"
    aria-label="Royal Horizon"
    :class="className"
    :style="{ color }"
  >
    <title>Royal Horizon</title>
    <path
      d="M100 24 l2.4 7 l7 2.4 l-7 2.4 l-2.4 7 l-2.4 -7 l-7 -2.4 l7 -2.4 z"
      fill="currentColor"
    />
    <rect x="46" y="56" width="12" height="108" rx="2" fill="currentColor" />
    <rect x="142" y="56" width="12" height="108" rx="2" fill="currentColor" />
    <circle cx="100" cy="102" r="11" fill="currentColor" />
    <path d="M28 124 Q100 112 172 124" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
  </svg>

  <!-- الـ lockup الأفقي (الافتراضي) -->
  <div
    v-else
    :class="['rh-logo-lockup', className]"
    :style="{ color }"
  >
    <svg
      viewBox="0 0 64 64"
      :width="resolvedSize"
      :height="resolvedSize"
      fill="none"
      aria-hidden="true"
      class="rh-logo-lockup__icon"
    >
      <path d="M8 44 Q32 35 56 44" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" />
      <circle cx="32" cy="34" r="8" fill="currentColor" />
    </svg>

    <div class="rh-logo-lockup__text">
      <span lang="ar" dir="rtl" class="rh-logo-lockup__ar">الأفق الملكي</span>
      <span class="rh-logo-lockup__en">ROYAL HORIZON</span>
      <span v-if="showTagline" class="rh-logo-lockup__tag">للسفر والسياحة</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: { type: String, default: 'lockup' },     // 'icon' | 'monogram' | 'lockup'
  size: { type: [Number, String], default: 'auto' },
  color: { type: String, default: 'currentColor' },
  showTagline: { type: Boolean, default: false },
  className: { type: String, default: '' },
});

const resolvedSize = computed(() => {
  if (props.size !== 'auto') return props.size;
  if (props.variant === 'icon') return 40;
  if (props.variant === 'monogram') return 120;
  return 44;  // lockup
});
</script>

<style scoped>
.rh-logo-lockup {
  display: inline-flex;
  align-items: center;
  gap: 14px;
}

.rh-logo-lockup__icon {
  flex-shrink: 0;
}

.rh-logo-lockup__text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.rh-logo-lockup__ar {
  font-family: 'Tajawal', system-ui, sans-serif;
  font-weight: 700;
  font-size: 20px;
}

.rh-logo-lockup__en {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.22em;
  margin-top: 5px;
  opacity: 0.82;
}

.rh-logo-lockup__tag {
  font-family: 'Tajawal', system-ui, sans-serif;
  font-weight: 400;
  font-size: 11px;
  margin-top: 6px;
  opacity: 0.6;
}
</style>
