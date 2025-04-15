<script setup lang="ts">
const userStore = useUserStore();
const currentUserId = computed(() => userStore.getCurrentUser?.id);
</script>

<template>
  <section class="bg-base-dark">
    <AppContainer>
      <div class="flex items-center flex-col justify-center py-10">
        <IconApp
          class="fill-base-light h-20 w-20 aspect-square animate-bounce mb-5"
        ></IconApp>
        <div class="text-base-light text-center">
          <h1 class="text-3xl mb-3 font-medium">The Block</h1>
          <p class="text-lg">Your favourite blog site</p>
        </div>
      </div>
    </AppContainer>
  </section>
  <section class="bg-base-light p-5">
    <AppContainer>
      <h2 class="text-2xl text-center mb-5">Feed</h2>
      <AppFeed :author-id="currentUserId"></AppFeed>
    </AppContainer>
  </section>
</template>
