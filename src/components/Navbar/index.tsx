import React from "react";
import TopNavbar from "./TopNavbar";
import SideNavbar from "./SideNavbar";

type Props = {
  className?: string;
};

const Navbar = ({ className }: Props) => {
  return (
    <div className={className}>
      <nav className="hidden w-full z-50 fixed md:block">
        <TopNavbar />
      </nav>
      <nav className="md:hidden z-50 fixed w-full">
        <SideNavbar />
      </nav>
    </div>
  );
};
export default Navbar;
