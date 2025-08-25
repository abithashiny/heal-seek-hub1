import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  User, 
  GraduationCap, 
  Award, 
  Clock,
  Phone,
  Mail,
  ChevronRight
} from "lucide-react";

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Anjali Reddy",
      specialty: "Gynecology & Obstetrics",
      qualifications: ["MBBS", "MD Gynecology", "Fellowship in Reproductive Medicine"],
      experience: "15+ years",
      specializations: [
        "High-Risk Pregnancy",
        "Fertility Treatments", 
        "Minimally Invasive Surgery",
        "Menopause Management"
      ],
      achievements: [
        "Best Gynecologist Award 2022",
        "Published 25+ Research Papers",
        "International Training in Germany"
      ],
      consultationTime: "Mon-Sat: 10:00 AM - 2:00 PM",
      languages: ["English", "Hindi", "Telugu"],
      email: "dr.anjali@sravanthihospital.com"
    },
    {
      id: 2,
      name: "Dr. Ravi Kumar",
      specialty: "Orthopedics & Joint Surgery",
      qualifications: ["MBBS", "MS Orthopedics", "Fellowship in Joint Replacement"],
      experience: "18+ years",
      specializations: [
        "Joint Replacement Surgery",
        "Spine Surgery",
        "Sports Medicine",
        "Robotic Surgery"
      ],
      achievements: [
        "Pioneer in Robotic Surgery",
        "Performed 1000+ Joint Replacements",
        "Excellence in Patient Care Award"
      ],
      consultationTime: "Mon-Fri: 2:00 PM - 6:00 PM",
      languages: ["English", "Hindi", "Telugu"],
      email: "dr.ravi@sravanthihospital.com"
    },
    {
      id: 3,
      name: "Dr. Meera Shah",
      specialty: "Pediatrics & Child Care",
      qualifications: ["MBBS", "MD Pediatrics", "Fellowship in Neonatology"],
      experience: "12+ years",
      specializations: [
        "Newborn Care",
        "Child Development",
        "Vaccination Programs",
        "Pediatric Emergency Care"
      ],
      achievements: [
        "Child-Friendly Doctor Award",
        "Expert in Neonatal Care",
        "Community Health Advocate"
      ],
      consultationTime: "Mon-Sat: 9:00 AM - 1:00 PM",
      languages: ["English", "Hindi", "Gujarati"],
      email: "dr.meera@sravanthihospital.com"
    },
    {
      id: 4,
      name: "Dr. Rajesh Gupta",
      specialty: "Cardiology",
      qualifications: ["MBBS", "MD Medicine", "DM Cardiology"],
      experience: "20+ years",
      specializations: [
        "Interventional Cardiology",
        "Angioplasty & Stenting",
        "Heart Failure Management",
        "Preventive Cardiology"
      ],
      achievements: [
        "Cardiology Excellence Award",
        "500+ Successful Angioplasties",
        "Research in Heart Disease Prevention"
      ],
      consultationTime: "Mon-Fri: 9:00 AM - 1:00 PM",
      languages: ["English", "Hindi"],
      email: "dr.rajesh@sravanthihospital.com"
    },
    {
      id: 5,
      name: "Dr. Priya Sharma",
      specialty: "Gynecology & Women's Health",
      qualifications: ["MBBS", "MS Gynecology", "Diploma in Laparoscopy"],
      experience: "10+ years",
      specializations: [
        "Laparoscopic Surgery",
        "Adolescent Health",
        "Family Planning",
        "Gynecological Oncology"
      ],
      achievements: [
        "Young Achiever Award",
        "Expert in Minimally Invasive Surgery",
        "Women's Health Advocate"
      ],
      consultationTime: "Tue-Sat: 3:00 PM - 7:00 PM",
      languages: ["English", "Hindi", "Telugu"],
      email: "dr.priya@sravanthihospital.com"
    },
    {
      id: 6,
      name: "Dr. Vikram Singh",
      specialty: "Neurology",
      qualifications: ["MBBS", "MD Medicine", "DM Neurology"],
      experience: "16+ years",
      specializations: [
        "Stroke Treatment",
        "Epilepsy Management",
        "Movement Disorders",
        "Headache Treatment"
      ],
      achievements: [
        "Neurological Excellence Award",
        "Stroke Care Specialist",
        "Published Neurological Research"
      ],
      consultationTime: "Mon-Wed-Fri: 11:00 AM - 3:00 PM",
      languages: ["English", "Hindi", "Punjabi"],
      email: "dr.vikram@sravanthihospital.com"
    }
  ];

  const specialtyGroups = [
    { name: "Gynecology & Women's Health", count: 2 },
    { name: "Orthopedics", count: 1 },
    { name: "Pediatrics", count: 1 },
    { name: "Cardiology", count: 1 },
    { name: "Neurology", count: 1 }
  ];

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Expert Doctors</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our team of experienced medical professionals dedicated to providing 
            exceptional healthcare services with compassion and expertise
          </p>
        </div>

        {/* Specialty Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {specialtyGroups.map((group, index) => (
            <Card key={index} className="text-center medical-card border-0">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">{group.count}</div>
                <div className="text-sm text-muted-foreground">{group.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="medical-card border-0 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-primary mb-1">{doctor.name}</CardTitle>
                    <CardDescription className="text-base font-medium">
                      {doctor.specialty}
                    </CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        {doctor.experience}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {doctor.languages.join(", ")}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Qualifications */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold">Qualifications</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {doctor.qualifications.map((qual, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {qual}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Specializations */}
                <div>
                  <h3 className="font-semibold mb-3">Specializations</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {doctor.specializations.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold">Key Achievements</h3>
                  </div>
                  <div className="space-y-2">
                    {doctor.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary" />
                    <div>
                      <div className="text-sm font-medium">Consultation Hours</div>
                      <div className="text-sm text-muted-foreground">{doctor.consultationTime}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <div className="text-sm text-muted-foreground">{doctor.email}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Link to="/book-appointment" className="flex-1">
                    <Button className="w-full">
                      Book Appointment
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" className="flex-1">
                    <Phone className="mr-2 h-4 w-4" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-16 medical-hero text-primary-foreground border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Schedule Your Consultation</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Our expert doctors are here to provide personalized medical care. 
              Book an appointment with the specialist that matches your healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-appointment">
                <Button variant="secondary" size="lg" className="text-lg px-8">
                  Book Appointment Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary"
                >
                  Contact Hospital
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Doctors;