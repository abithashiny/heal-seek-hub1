import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import { 
  Heart, 
  Baby, 
  Zap, 
  Scissors,
  Activity,
  ChevronRight,
  Users
} from "lucide-react";

const Specialties = () => {
  const specialties = [
    {
      id: "fertility",
      name: "Fertility Treatments",
      icon: Heart,
      description: "Advanced fertility solutions and reproductive healthcare for couples seeking to start a family",
      services: [
        "IVF (In Vitro Fertilization)",
        "IUI (Intrauterine Insemination)", 
        "Fertility Assessment",
        "Ovulation Induction",
        "Male Fertility Treatment",
        "Fertility Counseling"
      ],
      doctors: ["Dr. T. Chaitany Sravanthi"],
      features: ["Advanced IVF Lab", "High Success Rates", "Personalized Treatment Plans"],
      color: "from-pink-500 to-rose-500"
    },
    {
      id: "maternity",
      name: "Maternity Care",
      icon: Baby,
      description: "Comprehensive pregnancy care from conception to delivery with expert maternal-fetal medicine",
      services: [
        "Prenatal Care",
        "High-Risk Pregnancy Management",
        "Normal & Cesarean Delivery",
        "Postnatal Care",
        "Breastfeeding Support",
        "Newborn Care"
      ],
      doctors: ["Dr. T. Chaitany Sravanthi"],
      features: ["24/7 Maternity Care", "Advanced NICU", "Comfortable Labor Rooms"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "laser-surgery",
      name: "Laser Surgery",
      icon: Zap,
      description: "Minimally invasive laser procedures for precise and effective surgical treatments",
      services: [
        "Laser Gynecological Surgery",
        "Laser Skin Treatments",
        "Laser Hemorrhoid Treatment",
        "Laser Varicose Vein Surgery",
        "Cosmetic Laser Procedures",
        "Laser Therapy"
      ],
      doctors: ["Dr. S. Praveen Kumar"],
      features: ["Minimal Scarring", "Quick Recovery", "Precision Treatment"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "laparoscopy",
      name: "Laparoscopy Surgery",
      icon: Scissors,
      description: "Advanced minimally invasive surgical techniques for faster recovery and better outcomes",
      services: [
        "Laparoscopic Gynecological Surgery",
        "Laparoscopic General Surgery",
        "Hernia Repair",
        "Gallbladder Surgery",
        "Appendectomy",
        "Diagnostic Laparoscopy"
      ],
      doctors: ["Dr. S. Praveen Kumar"],
      features: ["Minimally Invasive", "Faster Recovery", "Reduced Pain"],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const handleBookAppointment = () => {
    alert("Redirecting to book appointment page...");
  };

  const handleViewDoctors = () => {
    alert("Redirecting to doctors page...");
  };

 const navigate = useNavigate();

const handleContact = () => {
  navigate("/contact");  // this assumes your route is set as /contact → contact.tsx
};


  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-slate-800">Our Medical Specialties</h1>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#6B8E23" }}>
            Fertility, Maternity, Laser & Laparoscopy Surgery Center
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive specialized healthcare services with state-of-the-art equipment 
            and experienced medical professionals dedicated to women's health and advanced surgical care
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center shadow-sm bg-white">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-pink-600 mb-1">100+</div>
              <div className="text-sm text-slate-600">Successful Pregnancies</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-sm bg-white">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-sm text-slate-600">Deliveries</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-sm bg-white">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600 mb-1">300+</div>
              <div className="text-sm text-slate-600">Laser Procedures</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-sm bg-white">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-purple-600 mb-1">1000+</div>
              <div className="text-sm text-slate-600">Laparoscopic Surgeries</div>
            </CardContent>
          </Card>
        </div>

        {/* Specialties Grid - Row by Row */}
        <div className="space-y-12">
          {/* First Row: Fertility & Maternity */}
          <div className="grid lg:grid-cols-2 gap-8">
            {specialties.slice(0, 2).map((specialty) => (
              <Card key={specialty.id} className="shadow-lg border-0 overflow-hidden bg-white">
                {/* Visual Section */}
                <div className="relative overflow-hidden">
                  <div className={`w-full h-48 bg-gradient-to-br ${specialty.color} flex items-center justify-center`}>
                    <specialty.icon className="h-20 w-20 text-white/80" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${specialty.color} rounded-lg flex items-center justify-center`}>
                      <specialty.icon className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">{specialty.name}</h2>
                  </div>

                  <p className="text-base text-slate-600 mb-4 leading-relaxed">
                    {specialty.description}
                  </p>

                  {/* Services */}
                  <div className="mb-4">
                    <h3 className="text-base font-semibold mb-2 text-slate-800">Services Offered</h3>
                    <div className="grid grid-cols-1 gap-1">
                      {specialty.services.slice(0, 4).map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          <span className="text-sm text-slate-600">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h3 className="text-base font-semibold mb-2 text-slate-800">Key Features</h3>
                    <div className="flex flex-wrap gap-1">
                      {specialty.features.map((feature, idx) => (
                        <Badge key={idx} className="text-xs bg-slate-100 text-slate-700 hover:bg-slate-200">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Doctors */}
                  <div className="mb-4">
                    <h3 className="text-base font-semibold mb-2 text-slate-800">Our Specialists</h3>
                    <div className="space-y-1">
                      {specialty.doctors.map((doctor, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="h-3 w-3 text-blue-600" />
                          </div>
                          <span className="text-sm text-slate-700 font-medium">{doctor}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 border-slate-200 text-slate-700 hover:bg-slate-50 text-sm" onClick={handleViewDoctors}>
                      View Doctors
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Second Row: Laser & Laparoscopy */}
          <div className="grid lg:grid-cols-2 gap-8">
            {specialties.slice(2, 4).map((specialty) => (
              <Card key={specialty.id} className="shadow-lg border-0 overflow-hidden bg-white">
                {/* Visual Section */}
                <div className="relative overflow-hidden">
                  <div className={`w-full h-48 bg-gradient-to-br ${specialty.color} flex items-center justify-center`}>
                    <specialty.icon className="h-20 w-20 text-white/80" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${specialty.color} rounded-lg flex items-center justify-center`}>
                      <specialty.icon className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">{specialty.name}</h2>
                  </div>

                  <p className="text-base text-slate-600 mb-4 leading-relaxed">
                    {specialty.description}
                  </p>

                  {/* Services */}
                  <div className="mb-4">
                    <h3 className="text-base font-semibold mb-2 text-slate-800">Services Offered</h3>
                    <div className="grid grid-cols-1 gap-1">
                      {specialty.services.slice(0, 4).map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          <span className="text-sm text-slate-600">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h3 className="text-base font-semibold mb-2 text-slate-800">Key Features</h3>
                    <div className="flex flex-wrap gap-1">
                      {specialty.features.map((feature, idx) => (
                        <Badge key={idx} className="text-xs bg-slate-100 text-slate-700 hover:bg-slate-200">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Doctors */}
                  <div className="mb-4">
                    <h3 className="text-base font-semibold mb-2 text-slate-800">Our Specialists</h3>
                    <div className="space-y-1">
                      {specialty.doctors.map((doctor, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="h-3 w-3 text-blue-600" />
                          </div>
                          <span className="text-sm text-slate-700 font-medium">{doctor}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 border-slate-200 text-slate-700 hover:bg-slate-50 text-sm" onClick={handleViewDoctors}>
                      View Doctors
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {/* CTA Section */}
          <Card className="mt-16 bg-gradient-to-r from-[hsl(85,35%,35%)] to-[hsl(85,35%,25%)] text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Need Specialized Medical Care?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Our experienced specialists are ready to provide you with the best medical care 
                in fertility, maternity, laser and laparoscopic surgery. Book an appointment today 
                for personalized treatment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white hover:border-[hsl(var(--primary-dark))] transition-all duration-300"
                onClick={handleContact}
              >
                Contact Us
              </Button>
              </div>
            </CardContent>
          </Card>
      </div>
    </div>
  );
};

export default Specialties;