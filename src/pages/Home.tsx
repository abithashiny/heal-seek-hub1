import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Shield, 
  Clock, 
  Award,
  Users,
  Building,
  Star,
  ChevronRight,
  Phone,
  MapPin
} from "lucide-react";
import hospitalExterior from "@/assets/hospital-exterior.jpg";
import gynecologyImg from "@/assets/gynecology.jpg";
import orthopedicsImg from "@/assets/orthopedics.jpg";
import pediatricsImg from "@/assets/pediatrics.jpg";

const Home = () => {
  const specialties = [
    {
      name: "Gynecology",
      description: "Expert care for women's health, from pregnancy to menopause",
      image: gynecologyImg,
      link: "/specialties#gynecology"
    },
    {
      name: "Orthopedics", 
      description: "Advanced treatments for bones, joints, and spine",
      image: orthopedicsImg,
      link: "/specialties#orthopedics"
    },
    {
      name: "Pediatrics",
      description: "Comprehensive care for children's health",
      image: pediatricsImg,
      link: "/specialties#pediatrics"
    }
  ];

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
        className="medical-hero text-primary-foreground relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 94, 167, 0.85), rgba(33, 94, 167, 0.85)), url(${hospitalExterior})`,
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Sravanthi Hospital
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Delivering World-Class Healthcare in Hyderabad, Telangana
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book-appointment">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                  Book Appointment
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/find-hospital">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                  Find Hospital
                  <MapPin className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Centres of Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced medical care across multiple specialties with state-of-the-art equipment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="medical-card border-0 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={specialty.image} 
                    alt={specialty.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{specialty.name}</CardTitle>
                  <CardDescription className="text-base">
                    {specialty.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={specialty.link}>
                    <Button variant="outline" className="w-full">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Sravanthi Hospital</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Since 2010, Sravanthi Hospital has been a beacon of healthcare excellence in Hyderabad, 
                offering advanced treatments with compassion. Our commitment to patient care and medical 
                innovation has made us a trusted healthcare partner for thousands of families.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold">Advanced Technology</div>
                    <div className="text-sm text-muted-foreground">Latest medical equipment</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold">24/7 Emergency</div>
                    <div className="text-sm text-muted-foreground">Round the clock care</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={hospitalExterior} 
                alt="Hospital Interior"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from our valued patients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="medical-card border-0">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="font-semibold text-primary">- {testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 medical-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience world-class healthcare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-appointment">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Book Appointment Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;