import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import { 
  User, 
  GraduationCap, 
  Award, 
  Clock,
  Phone,
  Mail
} from "lucide-react";

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. T. Chaitany Sravanthi",
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
      email: "dr.chaitany@sravanthihospital.com"
    },
    {
      id: 2,
      name: "Dr. S. Praveen Kumar",
      specialty: "Laparoscopy & General Surgery",
      qualifications: ["MBBS", "MS General Surgery", "Fellowship in Laparoscopic Surgery"],
      experience: "18+ years",
      specializations: [
        "Laparoscopic Surgery",
        "General Surgery",
        "Minimally Invasive Surgery",
        "Hernia Repair"
      ],
      achievements: [
        "Pioneer in Laparoscopic Surgery",
        "Performed 1000+ Laparoscopic Procedures",
        "Excellence in Patient Care Award"
      ],
      consultationTime: "Mon-Fri: 2:00 PM - 6:00 PM",
      languages: ["English", "Hindi", "Telugu"],
      email: "dr.praveen@sravanthihospital.com"
    }
  ];

  const specialtyGroups = [
    { name: "Gynecology & Obstetrics", count: 1 },
    { name: "Laparoscopy & General Surgery", count: 1 }
  ];

  const handleCall = () => {
    alert("Calling hospital...");
  };

  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2C4C9E] to-[#8C3E8C] bg-clip-text text-transparent">
            Our Expert Doctors
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet our team of experienced medical professionals dedicated to providing 
            exceptional healthcare services with compassion and expertise
          </p>
        </div>

        {/* Specialty Overview */}
        <div className="grid grid-cols-2 gap-4 mb-12 max-w-md mx-auto">
          {specialtyGroups.map((group, index) => (
            <Card key={index} className="text-center shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-4">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#2C4C9E] to-[#8C3E8C] bg-clip-text text-transparent mb-1">
                  {group.count}
                </div>
                <div className="text-sm text-slate-600">{group.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="shadow-xl border-0 overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:rotate-1 group">
              <CardHeader className="pb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C4C9E]/5 to-[#8C3E8C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2C4C9E] to-[#8C3E8C] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl bg-gradient-to-r from-[#2C4C9E] to-[#8C3E8C] bg-clip-text text-transparent mb-1">
                      {doctor.name}
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-slate-700">
                      {doctor.specialty}
                    </CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs bg-gradient-to-r from-[#2C4C9E]/10 to-[#8C3E8C]/10 text-[#2C4C9E] border border-[#2C4C9E]/20">
                        {doctor.experience}
                      </Badge>
                      <Badge variant="outline" className="text-xs border-[#8C3E8C]/30 text-[#8C3E8C]">
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
                    <GraduationCap className="h-4 w-4 text-[#2C4C9E]" />
                    <h3 className="font-semibold text-slate-800">Qualifications</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {doctor.qualifications.map((qual, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-[#2C4C9E]/30 text-[#2C4C9E] hover:bg-[#2C4C9E]/10 transition-colors">
                        {qual}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Specializations */}
                <div>
                  <h3 className="font-semibold mb-3 text-slate-800">Specializations</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {doctor.specializations.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#2C4C9E] to-[#8C3E8C] rounded-full shadow-sm" />
                        <span className="text-sm text-slate-600">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-4 w-4 text-[#8C3E8C]" />
                    <h3 className="font-semibold text-slate-800">Key Achievements</h3>
                  </div>
                  <div className="space-y-2">
                    {doctor.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-sm" />
                        <span className="text-sm text-slate-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-xl p-4 space-y-3 border border-slate-200/50">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-[#2C4C9E]" />
                    <div>
                      <div className="text-sm font-medium text-slate-800">Consultation Hours</div>
                      <div className="text-sm text-slate-600">{doctor.consultationTime}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#8C3E8C]" />
                    <div className="text-sm text-slate-600">{doctor.email}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-[#2C4C9E]/30 text-[#2C4C9E] hover:bg-gradient-to-r hover:from-[#2C4C9E] hover:to-[#8C3E8C] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg" 
                    onClick={handleCall}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-16 bg-gradient-to-r from-[#2C4C9E] to-[#8C3E8C] text-white border-0 shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20"></div>
          <CardContent className="p-12 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-4">Schedule Your Consultation</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Our expert doctors are here to provide personalized medical care. 
              Book an appointment with the specialist that matches your healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 border-white bg-transparent text-white hover:bg-white hover:text-[#2C4C9E] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                onClick={handleContact}
              >
                Contact Hospital
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Doctors;