import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { AppButton } from "~/components/shared/buttons/app-button";
import { AppButtonText } from "~/components/shared/buttons/app-button-text";

export type TileItem = {
  title: string;
  description: string;
  mainAction: {
    text: string;
    href: string;
  };
  additionalActions: {
    text: string;
    href: string;
  }[];
  iconUrl?: string;
};

type AdminHomeTileProps = {
  item: TileItem;
};

export const AdminHomeTile = component$(({ item }: AdminHomeTileProps) => {
  return (
    <>
      <div class="flex items-start justify-between p-4">
        <div class="space-y-2">
          {item.iconUrl && <img class="w-12 h-12" src={item.iconUrl} alt="" />}
          <h4 class="font-semibold">{item.title}</h4>
          <p class="text-sm">{item.description}</p>
        </div>
        <Link href={item.mainAction.href}>
          <AppButton variant="secondary">{item.mainAction.text}</AppButton>
        </Link>
      </div>
      <div class="py-5 px-4 border-t text-right">
        {item.additionalActions.map((action) => (
          <AppButtonText key={action.href}>
            <Link
              href={action.href}
              class="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
            >
              {action.text}
            </Link>
          </AppButtonText>
        ))}
      </div>
    </>
  );
});
