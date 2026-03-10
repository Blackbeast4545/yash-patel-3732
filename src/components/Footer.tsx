import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="w-4 h-4 text-primary" />
          <span>© 2025 Yash Patel. All rights reserved.</span>
        </div>
        <p className="text-xs text-muted-foreground">
          SOC Analyst & Network Security Engineer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
