import type { QRL } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { AppButton } from "../buttons/app-button";

interface AppModalConfirmProps {
  onClose: QRL<() => any>;
  onConfirm: QRL<() => any>;
}

export const AppModalConfirm = component$(({ onClose, onConfirm }: AppModalConfirmProps) => {
  return (
    <div class="fixed top-0 left-0 right-0 bottom-0 z-50 bg-gray-500/40 flex items-center justify-center">
      <div class="rounded-lg bg-white p-8 shadow-2xl">
        <h2 class="text-lg font-bold">Czy jesteś pewny?</h2>

        <p class="mt-2 text-sm text-gray-500">Tej akcji nie mona cofnąć.</p>

        <div class="mt-4 flex gap-2">
          <AppButton variant="error" onClick$={onConfirm}>
            Tak, jestem pewny
          </AppButton>

          <AppButton onClick$={onClose} variant="secondary">
            Nie, wróć
          </AppButton>
        </div>
      </div>
    </div>
  );
});
