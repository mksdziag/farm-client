import { component$, $ } from "@builder.io/qwik";
import { AppAlert } from "../shared/alerts/app-alert";
import { useAlerts } from "./alerts-context";

export const AlertsContainer = component$(() => {
  const { alerts, removeAlert } = useAlerts();

  return (
    <div class="fixed top-0 right-0 left-0 z-50 flex justify-center">
      <ul class="max-w-6xl w-full">
        {alerts.value.map((alert) => (
          <li key={alert.id}>
            <AppAlert
              variant={alert.type}
              message={alert.message}
              title={alert.title}
              onClose={$(() => removeAlert(alert.id))}
            />
          </li>
        ))}
      </ul>
    </div>
  );
});
