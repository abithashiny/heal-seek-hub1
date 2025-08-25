import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Baby, 
  Bone, 
  Brain, 
  Eye, 
  Stethoscope,
  Activity,
  ChevronRight
} from "lucide-react";
import gynecologyImg from "@/assets/gynecology.jpg";
import orthopedicsImg from "@/assets/orthopedics.jpg";
import pediatricsImg from "@/assets/pediatrics.jpg";

const Specialties = () => {
  const specialties = [
    {
      id: "gynecology",
      name: "Gynecology & Obstetrics",
      icon: Heart,
      image: gynecologyImg,
      description: "Comprehensive women's health services from adolescence through menopause",
      services: [
        "Pregnancy Care & Delivery",
        "Fertility Treatments",
        "Gynecological Surgery",
        "Menopause Management",
        "Family Planning",
        "High-Risk Pregnancy Care"
      ],
      doctors: ["Dr. Anjali Reddy", "Dr. Priya Sharma"],
      features: ["24/7 Maternity Care", "Advanced NICU", "Minimally Invasive Surgery"]
    },
    {
      id: "orthopedics",
      name: "Orthopedics & Joint Care",
      icon: Bone,
      image: orthopedicsImg,
      description: "Advanced treatment for bones, joints, spine and sports injuries",
      services: [
        "Joint Replacement Surgery",
        "Spine Surgery",
        "Sports Medicine",
        "Trauma Care",
        "Arthroscopic Surgery", 
        "Physiotherapy"
      ],
      doctors: ["Dr. Ravi Kumar", "Dr. Suresh Babu"],
      features: ["Robotic Surgery", "Advanced Imaging", "Pain Management"]
    },
    {
      id: "pediatrics",
      name: "Pediatrics & Child Care", 
      icon: Baby,
      image: pediatricsImg,
      description: "Specialized medical care for infants, children and adolescents",
      services: [
        "Newborn Care",
        "Vaccination Programs",
        "Growth & Development",
        "Pediatric Surgery",
        "Child Psychology",
        "Emergency Pediatric Care"
      ],
      doctors: ["Dr. Meera Shah", "Dr. Arun Patel"],
      features: ["Child-Friendly Environment", "Specialized PICU", "Development Screening"]
    },
    {
      id: "cardiology",
      name: "Cardiology",
      icon: Activity,
      image: "/api/placeholder/400/300",
      description: "Complete cardiac care from prevention to advanced interventions",
      services: [
        "Cardiac Catheterization",
        "Angioplasty & Stenting",
        "Heart Surgery",
        "Arrhythmia Treatment",
        "Preventive Cardiology",
        "Cardiac Rehabilitation"
      ],
      doctors: ["Dr. Rajesh Gupta", "Dr. Sita Devi"],
      features: ["24/7 Cardiac Care", "Advanced Cath Lab", "Heart Health Programs"]
    },
    {
      id: "neurology",
      name: "Neurology",
      icon: Brain,
      image: "/api/placeholder/400/300", 
      description: "Expert care for brain, spine and nervous system disorders",
      services: [
        "Stroke Treatment",
        "Epilepsy Management",
        "Headache Treatment",
        "Neurological Surgery",
        "Memory Disorders",
        "Movement Disorders"
      ],
      doctors: ["Dr. Vikram Singh", "Dr. Lakshmi Naidu"],
      features: ["Advanced Neuroimaging", "Stroke Unit", "Neuro Rehabilitation"]
    },
    {
      id: "general",
      name: "General Medicine",
      icon: Stethoscope,
      image: "/api/placeholder/400/300",
      description: "Primary healthcare and management of common medical conditions",
      services: [
        "Health Check-ups",
        "Diabetes Management",
        "Hypertension Care",
        "Preventive Medicine",
        "Chronic Disease Management",
        "Health Counseling"
      ],
      doctors: ["Dr. Prakash Reddy", "Dr. Sunita Jain"],
      features: ["Comprehensive Care", "Health Monitoring", "Lifestyle Counseling"]
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Medical Specialties</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive healthcare services across multiple specialties with state-of-the-art 
            equipment and experienced medical professionals
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="space-y-12">
          {specialties.map((specialty, index) => (
            <div key={specialty.id} id={specialty.id}>
              <Card className="medical-card border-0 overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={specialty.image} 
                      alt={specialty.name}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <specialty.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h2 className="text-3xl font-bold text-primary">{specialty.name}</h2>
                    </div>

                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {specialty.description}
                    </p>

                    {/* Services */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Services Offered</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {specialty.services.map((service, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm text-muted-foreground">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                      <div className="flex flex-wrap gap-2">
                        {specialty.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Doctors */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Our Specialists</h3>
                      <div className="space-y-2">
                        {specialty.doctors.map((doctor, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                              <span className="text-xs font-semibold text-primary">
                                {doctor.split(' ')[1]?.[0]}
                              </span>
                            </div>
                            <span className="text-muted-foreground">{doctor}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link to="/book-appointment">
                        <Button>
                          Book Appointment
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link to="/doctors">
                        <Button variant="outline">
                          View Doctors
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-16 medical-hero text-primary-foreground border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Medical Consultation?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Our experienced specialists are ready to provide you with the best medical care. 
              Book an appointment today for personalized treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-appointment">
                <Button variant="secondary" size="lg" className="text-lg px-8">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Specialties;