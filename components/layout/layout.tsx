import { Fragment, type ReactNode } from "react";
import NavigationBar from "./navigation-bar";
import Footer from "./footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen">
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
