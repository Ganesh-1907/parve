import { Link } from "react-router-dom";
import { Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent border-t border-border mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* BRAND */}
          <div className="space-y-4">
            <h2
              className="text-2xl font-light tracking-[0.35em] uppercase text-foreground"
              style={{ fontFamily: "Inter, Helvetica, Arial, sans-serif" }}
            >
              PARVE
            </h2>
            <p className="text-muted-foreground max-w-sm">
              Nature-inspired beauty for everyone
            </p>
          </div>

          {/* CONTACT */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>

            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="w-4 h-4 " />
              <span>8341998599</span>
            </div>

            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-4 h-4 " />
              <span>parve.world5@gmail.com</span>
            </div>

            <a
              href="https://www.instagram.com/parve.world?igsh=bW1sOW5iMXNzdWps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4 " />
              Instagram
            </a>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-3 text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/about" className="hover:text-primary transition-colors">
                About
              </Link>
            </nav>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 PARVE. All rights reserved.</p>
          <p>
            Developed by{" "}
            <span className="font-medium">
              BuildYourVision
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
