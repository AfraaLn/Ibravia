import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import {ThemeToggle} from "./ThemeTooggle";

const navItems = [
  { name: "Home", href: "/#Home" },
  { name: "Properties", href: "/Properties" },
  { name: "Reservation", href: "/Reservation" },
  { name: "About Us", href: "/AboutUs" },
  { name: "Login", href: "/Login", type: "button" },
  { name: "Sign Up", href: "/Signup", type: "button" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-6xl">
          {/* Logo */}
          <a
            className="text-xl font-bold text-primary flex items-center leading-none"
            href="/#home"
          >
            <span className="relative z-10 text-foreground">IBRAVIA</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems
              .filter((item) => !item.type)
              .map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems
              .filter((item) => item.type === "button")
              .map((item, key) =>
                item.name === "Login" ? (
                  <a
                    key={key}
                    href={item.href}
                    className="px-4 py-2 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    key={key}
                    href={item.href}
                    className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
                  >
                    {item.name}
                  </a>
                )
              )}
            <ThemeToggle/>  
          </div>
          
        </div>


        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center space-y-6 text-lg">
          {navItems
            .filter((item) => !item.type)
            .map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

          {/* Pemisah */}
          <div className="w-32 border-t border-border my-4"></div>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-3 w-40">
            {navItems
              .filter((item) => item.type === "button")
              .map((item, key) =>
                item.name === "Login" ? (
                  <a
                    key={key}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="ibravia-button bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground text-center"
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    key={key}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="ibravia-button text-center"
                  >
                    {item.name}
                  </a>
                )
              )}
          </div>

        </div>
      </div>
    </nav>
  );
};
