<template>
  <div>
    <p v-if="message" class="tw-text-red-500 tw-flex tw-items-center tw-text-sm tw-mt-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="tw-h-5 tw-w-5 tw-mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: null
    }
  }
}
</script>
