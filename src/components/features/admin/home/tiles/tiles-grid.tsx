import { component$ } from "@builder.io/qwik";
import type { TileItem } from "./tile";
import { AdminHomeTile } from "./tile";

interface TilesGridProps {
  items: TileItem[];
}

export const AdminHomeTilesGrid = component$((props: TilesGridProps) => {
  return (
    <ul class="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {props.items.map((item) => (
        <li key={item.title} class="border rounded-lg">
          <AdminHomeTile item={item} />
        </li>
      ))}
    </ul>
  );
});
