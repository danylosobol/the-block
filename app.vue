<template>
  <NuxtLoadingIndicator :duration="50000" :throttle="10000" :color="'white'" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <ClientOnly>
    <Teleport to="#teleports">
      <AppNotifications></AppNotifications>
    </Teleport>
  </ClientOnly>
</template>
