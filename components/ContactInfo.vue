<template>
  <div :class="props.wrapperClass">
    <a :href="`tel:${props.phone}`" :class="props.phoneClass">
      {{ formatPhone(props.phone) }}
      <Icon :name="props.iconName" :class="props.iconClass" />
    </a>
    <a :href="props.mapUrl" :class="props.addressClass">
      {{ props.address }}
    </a>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  phone?: string
  address?: string
  mapUrl?: string
  wrapperClass?: string
  phoneClass?: string
  iconClass?: string
  addressClass?: string
  iconName?: string
}>(), {
  phone: '88003021333',
  address: 'г. Липецк, ул. Крайняя 6, офис 309',
  mapUrl: 'https://yandex.uz/maps/-/CHsliHK1',
  wrapperClass: 'flex flex-col items-start sm:text-right',
  phoneClass: 'font-semibold text-black flex items-center xs:text-3xl',
  iconClass: 'p-0 xs:text-4xl text-primary',
  addressClass: '',
  iconName: 'solar:phone-bold'
})

function formatPhone(raw: string) {
  // Простой форматтер: '88003021333' → '8 800 302 13 33'
  return raw.replace(/^8?(\d{3})(\d{3})(\d{2})(\d{2})$/, '8 $1 $2 $3 $4')
}
</script>
