import type { User } from "~/features/auth/types";
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface AppHeaderProps {
  user: User | null;
  logout: () => void;
}

export const AppHeader = component$((_props: AppHeaderProps) => {
  return (
    <div class="navbar bg-base-300">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabIndex={0} class="btn btn-ghost btn-circle">
            <img src="/icons/menu.svg" alt="" />
          </label>
          <ul
            tabIndex={0}
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost normal-case text-xl">Farmero</a>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <img src="/icons/search.svg" alt="" />
        </button>

        <Link class="btn btn-ghost btn-circle" href="/account">
          <img src="/icons/person.svg" alt="" />
        </Link>
      </div>
    </div>
  );
});
