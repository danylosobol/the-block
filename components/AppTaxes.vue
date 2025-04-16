<script setup lang="ts">
import { NuxtLink } from "#components";
import type { Tag } from "~/src/generated/prisma";

interface IAppTaxesProps {
  taxes: Tag[];
  selectedTaxes?: Tag[];
  isLink?: boolean;
  isClickable?: boolean;
}

interface IAppTaxesEmits {
  (e: "click:tax", value: Tag): void;
}

const props = withDefaults(defineProps<IAppTaxesProps>(), {
  isLink: false,
  isClickable: false,
});
const emits = defineEmits<IAppTaxesEmits>();
const taxes = computed(() => props.taxes);
const selectedTaxes = computed<Tag[] | undefined>(() => props.selectedTaxes);
const isSelected = (taxItem: Tag): boolean => {
  if (!selectedTaxes.value) {
    return false;
  }

  return !!selectedTaxes.value.find((tax) => tax.id === taxItem.id);
};
</script>

<template>
  <ul class="flex gap-2 flex-wrap" v-if="taxes && taxes.length > 0">
    <li
      v-for="tax in taxes"
      :key="tax.id"
      :class="{
        'bg-base-dark text-base-light': !isSelected(tax),
        'bg-base-light text-base-dark': isSelected(tax),
      }"
      class="rounded-sm leading-none p-2 border-1 border-base-dark"
    >
      <Component
        :class="{ 'cursor-pointer': props.isClickable }"
        @click="() => emits('click:tax', tax)"
        :is="props.isLink ? NuxtLink : 'span'"
        >{{ tax.name }}</Component
      >
    </li>
  </ul>
</template>
