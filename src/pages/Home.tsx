import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { 
  Heart, 
  Shield, 
  Clock, 
  Award,
  Users,
  Building,
  Star,
  Phone,
  MapPin
} from "lucide-react";
import hospitalExterior from "@/assets/hospital-exterior.jpg";
import gynecologyImg from "@/assets/gynecology.jpg";
import maternitycareImg from "@/assets/maternitycare.jpg";
import laser_surgeryImg from "@/assets/laser_surgery.jpg";
import Laparoscopy_SurgeryImg from "@/assets/Laparoscopy_Surgery.jpg";

const Home = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Add CSS to hide scrollbars
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  const specialties = [
    {
      name: "Fertility Treatments",
      description: "Advanced fertility solutions and reproductive healthcare for couples seeking to start a family",
      image: gynecologyImg,
      link: "/specialties"
    },
    {
      name: "Maternity Care", 
      description: "Comprehensive pregnancy care from conception to delivery with expert maternal-fetal medicine",
      image: maternitycareImg,
      link: "/specialties#orthopedics"
    },
    {
      name: "Laser Surgery",
      description: "Minimally invasive laser procedures for precise and effective surgical treatments",
      image: laser_surgeryImg,
      link: "/specialties#pediatrics"
    },
    {
      name: "Laparoscopy Surgery",
      description: "Advanced minimally invasive surgical techniques for faster recovery and better outcomes",
      image: Laparoscopy_SurgeryImg,
      link: "/specialties#pediatrics"
    }
  ];

  // Auto-scroll functionality for specialties
  useEffect(() => {
    if (!isAutoScrolling) return;
    
    const autoScrollInterval = setInterval(() => {
      if (scrollRef.current) {
        const cardWidth = 400; // Updated for larger cards to fit 3 on screen
        const nextIndex = (currentIndex + 1) % specialties.length;
        
        if (nextIndex === 0) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollTo({ left: nextIndex * cardWidth, behavior: "smooth" });
        }
        
        setCurrentIndex(nextIndex);
      }
    }, 3000);
    
    return () => clearInterval(autoScrollInterval);
  }, [isAutoScrolling, currentIndex, specialties.length]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    setIsAutoScrolling(false);
    
    if (direction === 'left') {
      scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
    } else {
      scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
    }
    
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const stats = [
    { icon: Building, value: "50+", label: "Beds" },
    { icon: Users, value: "20+", label: "Expert Doctors" },
    { icon: Award, value: "10+", label: "Years Serving" },
    { icon: Heart, value: "5000+", label: "Patients Treated" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      content: "Dr. Anjali's care during my pregnancy was exceptional. The staff was so supportive. I'm now a proud mother!",
      rating: 5
    },
    {
      name: "Ravi Kumar",
      content: "The orthopedic team fixed my knee pain with robotic surgery. Walking pain-free now! Highly recommend.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="medical-hero text-white relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(44,76,158,0.85), rgba(140,62,140,0.85)), url(${hospitalExterior})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '600px'
        }}
      >
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl animate-fadeInUp">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Trusted Healthcare Since 2010
            </Badge>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight 
                          bg-gradient-to-r from-white via-blue-200 to-purple-300 
                          bg-clip-text text-transparent drop-shadow-lg tracking-wide">
              Sravanthi Hospital
            </h1>

            <p className="text-xl md:text-2xl mb-8 leading-relaxed 
                          text-gray-100/90 font-light italic tracking-wide drop-shadow">
              Delivering World-Class Healthcare in Telangana
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/find-hospital">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 bg-white text-[#2C4C9E] border-white hover:bg-gray-100 hover:text-[#2C4C9E] transition-all duration-300"
                >
                  Find Hospital
                  <MapPin className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-white text-[#2C4C9E] border-white hover:bg-gray-100 hover:text-[#2C4C9E] transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-br from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white shadow-xl rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#2C4C9E] to-[#8C3E8C] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#2C4C9E] to-[#8C3E8C] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auto-scrolling Specialties Section */}
      <section className="py-16 relative bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2C4C9E] to-[#8C3E8C] bg-clip-text text-transparent">
              Our Centres of Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Advanced medical care across multiple specialties with state-of-the-art equipment
            </p>
          </div>

          {/* Left Button */}
          <button
            onClick={() => handleManualScroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-3 z-10 border border-[#2C4C9E]/20 hover:bg-gradient-to-r hover:from-[#2C4C9E] hover:to-[#8C3E8C] hover:text-white transition-all duration-300 hover:scale-110 group"
          >
            <ChevronLeft className="h-6 w-6 text-[#2C4C9E] group-hover:text-white transition-colors" />
          </button>

          {/* Scrollable Row */}
          <div className="overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {[...specialties, ...specialties].map((specialty, index) => (
                  <Card
                    key={index}
                    className="min-w-[300px] max-w-[300px] border-0 overflow-hidden flex-shrink-0 group shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={specialty.image}
                        alt={specialty.name}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2C4C9E]/10 to-[#8C3E8C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardHeader className="relative">
                      <CardTitle className="text-xl bg-gradient-to-r from-[#2C4C9E] to-[#8C3E8C] bg-clip-text text-transparent">
                        {specialty.name}
                      </CardTitle>
                      <CardDescription className="text-base text-slate-600">
                        {specialty.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to={specialty.link}>
                        <Button 
                          variant="outline" 
                          className="w-full border-[#2C4C9E]/30 text-[#2C4C9E] hover:bg-gradient-to-r hover:from-[#2C4C9E] hover:to-[#8C3E8C] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg"
                        >
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          </div>

          {/* Right Button */}
          <button
            onClick={() => handleManualScroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-3 z-10 border border-[#2C4C9E]/20 hover:bg-gradient-to-r hover:from-[#2C4C9E] hover:to-[#8C3E8C] hover:text-white transition-all duration-300 hover:scale-110 group"
          >
            <ChevronRight className="h-6 w-6 text-[#2C4C9E] group-hover:text-white transition-colors" />
          </button>

          
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#2C4C9E] to-[#8C3E8C] bg-clip-text text-transparent">
                About Sravanthi Hospital
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Since 2010, Sravanthi Hospital has been a beacon of healthcare excellence in Hyderabad, 
                offering advanced treatments with compassion. Our commitment to patient care and medical 
                innovation has made us a trusted healthcare partner for thousands of families.
              </p>
              
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                With over 15 years of dedicated service, we have established ourselves as a leading 
                multi-specialty hospital equipped with state-of-the-art infrastructure and a team of 
                highly qualified medical professionals. Our patient-centric approach ensures that every 
                individual receives personalized care tailored to their specific needs.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Our Mission</h3>
                <p className="text-slate-600">
                  To provide world-class healthcare services that are accessible, affordable, and delivered 
                  with the highest standards of medical excellence and human compassion.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-[#2C4C9E] flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-800">Advanced Technology</div>
                    <div className="text-sm text-slate-600">Latest medical equipment</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-[#8C3E8C] flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-800">24/7 Emergency</div>
                    <div className="text-sm text-slate-600">Round the clock care</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-[#2C4C9E] flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-800">Expert Doctors</div>
                    <div className="text-sm text-slate-600">Qualified specialists</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-[#8C3E8C] flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-800">Compassionate Care</div>
                    <div className="text-sm text-slate-600">Patient-first approach</div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#2C4C9E] to-[#8C3E8C] bg-clip-text text-transparent">15+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#2C4C9E] to-[#8C3E8C] bg-clip-text text-transparent">50,000+</div>
                    <div className="text-sm text-slate-600">Patients Treated</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#2C4C9E] to-[#8C3E8C] bg-clip-text text-transparent">20+</div>
                    <div className="text-sm text-slate-600">Specialties</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={hospitalExterior} 
                alt="Hospital Exterior - Sravanthi Hospital Building" 
                className="rounded-lg shadow-xl w-full hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                <div className="text-sm font-semibold text-[#2C4C9E]">Sravanthi Hospital</div>
                <div className="text-xs text-slate-600">Telangana</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2C4C9E] to-[#8C3E8C] bg-clip-text text-transparent">
              What Our Patients Say
            </h2>
            <p className="text-xl text-slate-600">
              Real experiences from our valued patients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="font-semibold bg-gradient-to-r from-[#2C4C9E] to-[#8C3E8C] bg-clip-text text-transparent">
                    - {testimonial.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
  className="py-16 text-white relative overflow-hidden"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(44,76,158,0.95), rgba(140,62,140,0.95))`,
  }}
>
  <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
    {/* Left Column - About */}
    <div>
      <h3 className="text-2xl font-bold mb-4">Sravanthi Hospital</h3>
      <p className="opacity-90 leading-relaxed mb-4">
        Your trusted healthcare partner in Hyderabad, providing world-class
        medical services with compassion and excellence since 2010.
      </p>
      <div className="flex items-center gap-2 text-pink-200">
        <span className="text-lg">🏥</span>
        <span>NABH Accredited Hospital</span>
      </div>
    </div>

    {/* Middle Column - Contact Info */}
    <div>
      <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
      <ul className="space-y-3 opacity-90">
        <li className="flex items-start gap-3">
          <span>📍</span>
      Vidyanagar, Suryapet
Pincode: 508213 (Telangana, India)
        </li>
        <li className="flex items-start gap-3">
          <span>📞</span>
          +91 40 1234 5678 <br />
          <span className="text-sm opacity-70">24/7 Emergency Hotline</span>
        </li>
        <li className="flex items-start gap-3">
          <span>📧</span>
          info@sravanthihospital.com
        </li>
        <li className="flex items-start gap-3">
          <span>⏰</span>
          24/7 Emergency Services <br />
          <span className="text-sm opacity-70">OPD: 9 AM - 8 PM</span>
        </li>
      </ul>
    </div>

    {/* Right Column - Services & Newsletter */}
    <div>
      <h4 className="text-xl font-semibold mb-4">Our Services</h4>
      <ul className="space-y-2 opacity-90 mb-6">
        <li className="flex items-center gap-2">
          ❤️ Emergency Care
        </li>
        <li className="flex items-center gap-2">
          🩺 Specialist Consultations
        </li>
        <li className="flex items-center gap-2">
          🛡 Preventive Care
        </li>
      </ul>
      <h5 className="text-lg font-semibold mb-3">Stay Updated</h5>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md w-full text-black focus:outline-none"
        />
        <Button
          className="bg-gradient-to-r from-[#2C4C9E] to-[#8C3E8C] text-white font-semibold px-6 rounded-md shadow-lg hover:opacity-90"
        >
          Subscribe
        </Button>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="mt-12 border-t border-white/20 pt-6 px-6 lg:px-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 opacity-80">
    <p>© 2025 Sravanthi Hospital. All rights reserved.</p>
    <p className="text-sm italic">
      Medical Disclaimer: Please consult with a qualified healthcare professional for medical advice.
    </p>
  </div>
</section>
</div>
  );
};

export default Home;