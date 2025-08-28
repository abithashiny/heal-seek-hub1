import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Find Hospital", path: "/find-hospital" },
    { name: "Specialties", path: "/specialties" },
    { name: "Doctors", path: "/doctors" },
    { name: "Contact", path: "/contact" },
  ];

  const isActivePage = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background shadow-md border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="logo1.png"   // replace with your combined logo file
            alt="Sravanthi Hospital Logo" 
            className="h-14 object-contain" // adjust height/width as needed
          />
        </Link>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActivePage(item.path) ? "default" : "ghost"}
                  className={`text-sm ${isActivePage(item.path) ? 'bg-[hsl(85,35%,35%)] text-white hover:bg-[hsl(85,35%,25%)]' : 'hover:bg-[hsl(85,35%,95%)] hover:text-[hsl(85,35%,35%)]'}`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Search and Emergency */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search doctors, specialties..."
                className="pl-10 w-64 border-[hsl(85,35%,88%)] focus:ring-[hsl(85,35%,35%)] focus:border-[hsl(85,35%,35%)]"
              />
            </div>
            <Button variant="destructive" size="sm" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Emergency
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-[hsl(85,35%,95%)] hover:text-[hsl(85,35%,35%)]">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button
                      variant={isActivePage(item.path) ? "default" : "ghost"}
                      className={`w-full justify-start ${isActivePage(item.path) ? 'bg-[hsl(85,35%,35%)] text-white hover:bg-[hsl(85,35%,25%)]' : 'hover:bg-[hsl(85,35%,95%)] hover:text-[hsl(85,35%,35%)]'}`}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <Input placeholder="Search..." className="mb-3 border-[hsl(85,35%,88%)] focus:ring-[hsl(85,35%,35%)] focus:border-[hsl(85,35%,35%)]" />
                  <Button variant="destructive" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Emergency Call
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;