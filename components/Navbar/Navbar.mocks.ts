import { NavbarProps } from './Navbar';

const LoggedIn: NavbarProps = {
  isLoggedIn: true,
  isLoading: false
};

const LoggedOut: NavbarProps = {
  isLoggedIn: false,
  isLoading: false
};

const Loading: NavbarProps = {
  isLoggedIn: false,
  isLoading: true
};

export const mockNavbarProps = {
  LoggedIn,
  LoggedOut,
  Loading
};
