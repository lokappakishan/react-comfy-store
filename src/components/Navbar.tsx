import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../app/hooks';

const themes = { dracula: 'dracula', winter: 'winter' } as const;
type Theme = 'dracula' | 'winter';

const getThemeFromLocalStorage = (): Theme => {
  const storedTheme = localStorage.getItem('theme');
  return storedTheme === 'winter' || storedTheme === 'dracula'
    ? storedTheme
    : themes.winter;
};

const Navbar: FC = () => {
  const [theme, setTheme] = useState<Theme>(getThemeFromLocalStorage);
  const numItemsInCart = useAppSelector(
    (state) => state.cartState.numItemsInCart
  );

  const handleTheme = () => {
    const { winter, dracula } = themes;
    const newTheme = theme === winter ? dracula : winter;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className="bg-base-200">
      <div className="navbar max-w-6xl mx-auto p-2">
        <div className="navbar-start">
          {/* TITLE */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center "
          >
            C
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEME ICONS */}
          <label className="swap">
            <input
              type="checkbox"
              onClick={handleTheme}
              aria-label="Toggle theme"
            />
            <div className="swap-on h-4 w-4">
              <BsSunFill />
            </div>
            <div className="swap-off h-4 w-4">
              <BsMoonFill />
            </div>
          </label>
          {/* CART LINK*/}
          <NavLink to="cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
