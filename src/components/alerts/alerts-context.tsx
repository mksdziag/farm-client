import type { QRL } from "@builder.io/qwik";
import { type Signal, component$, useSignal, Slot, $, useContext } from "@builder.io/qwik";
import { useContextProvider, createContextId } from "@builder.io/qwik";
import { v4 } from "uuid";

export type AlertType = "success" | "error" | "warning" | "info";

export type Alert = {
  id: string;
  type: AlertType;
  message: string;
  title?: string;
};

export const AlertsContext = createContextId<{
  alerts: Signal<Alert[]>;
  addAlert: QRL<(alert: Omit<Alert, "id">) => void>;
  removeAlert: QRL<(id: string) => void>;
}>("app.alerts-context");

export const AppAlertsProvider = component$(() => {
  const alerts = useSignal<Alert[]>([]);

  const addAlert = $((alert: Omit<Alert, "id">) => {
    const id = v4();
    alerts.value = [...alerts.value, { ...alert, id }];

    setTimeout(() => {
      alerts.value = alerts.value.filter((item) => item.id !== id);
    }, 3500);
  });

  const removeAlert = $((id: string) => {
    alerts.value = alerts.value.filter((alert) => alert.id !== id);
  });

  useContextProvider(AlertsContext, {
    alerts,
    addAlert,
    removeAlert,
  });

  return <Slot />;
});

export const useAlerts = () => useContext(AlertsContext);
