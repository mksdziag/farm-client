import { $, useSignal } from "@builder.io/qwik";

export const useModalConfirm = () => {
  const isOpen = useSignal(false);

  return {
    isOpen,
    open: $(() => (isOpen.value = true)),
    close: $(() => (isOpen.value = false)),
  };
};
