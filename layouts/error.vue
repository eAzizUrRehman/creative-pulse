<template>
  <div class="flex-center h-screen bg-gray-200">
    <div class="text-center">
      <p class="text-6xl font-bold text-red-500">404</p>
      <p class="mt-2 text-4xl">Page Not Found</p>
      <p class="mt-4 max-w-lg text-lg text-gray-700">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <NuxtLink
        to="/"
        class="mt-6 inline-block rounded bg-gray-700 px-6 py-3 text-lg font-semibold text-white hover:bg-gray-600"
      >
        Go to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'none'
}
</script>
