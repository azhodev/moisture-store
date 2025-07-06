<template>
  <div>
    <input
      type="checkbox"
      id="burger-checkbox"
      class="burger-checkbox"
      v-model="checked"
    />
    <label class="burger" for="burger-checkbox"></label>
  </div>
</template>

<script setup lang="ts">
const checked = defineModel<boolean>({ default: false })
</script>

<style scoped>
.burger-checkbox {
  position: absolute;
  visibility: hidden;
}

.burger {
  cursor: pointer;
  display: block;
  position: relative;
  border: none;
  background: transparent;
  width: 24px;
  height: 24px;
}

.burger::before,
.burger::after {
  content: '';
  left: 3px;
  position: absolute;
  display: block;
  width: calc(100% - 6px);
  height: 2px;
  border-radius: 10px;
  background: #2F3334;
}

.burger::before {
  top: 11px;
  box-shadow: 0 6px 0 #2F3334;
  transition: box-shadow 0.3s 0.15s, top 0.3s 0.15s, transform 0.3s;
}

.burger::after {
  top: 5px;
  bottom: 0px;
  transition: bottom 0.3s 0.15s, transform 0.3s;
}

.burger-checkbox:checked + .burger::before {
  top: 11px;
  transform: rotate(45deg);
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
  transition: box-shadow 0.15s, top 0.3s, transform 0.3s 0.15s;
}

.burger-checkbox:checked + .burger::after {
  bottom: 11px;
  top: unset;
  transform: rotate(-45deg);
  transition: bottom 0.3s, transform 0.3s 0.15s;
}
</style>
