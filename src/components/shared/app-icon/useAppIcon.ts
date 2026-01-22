import { computed, defineAsyncComponent } from "vue";

export default function useAppIcon(name: string) {
  // Bu yerda slot orqali AppIcon ni image xolatda render qilsa ham bo'ladi
  const isSlot = computed(() => typeof name !== "string");

  // Bu yerda svg file async xolatda import bo'ladi, name ga qarab
  const SVGComponent = computed(() => name && defineAsyncComponent(() => import(`@/assets/icons/${name}.svg`)));

  return {
    SVGComponent,
    isSlot,
  };
}
