import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Navigation,
  Shield,
  Heart
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 40 1234 5678", "+91 40 1234 5679"],
      description: "24/7 Emergency & Appointments"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@sravanthihospital.com", "emergency@sravanthihospital.com"],
      description: "Get in touch with us"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Plot No 12, Saptagiri Colony", "Sainikpuri, Hyderabad - 500056"],
      description: "Telangana, India"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: ["24/7 Emergency Care", "OPD: 9:00 AM - 6:00 PM"],
      description: "Mon - Sat"
    }
  ];

  const departments = [
    "General Inquiry",
    "Emergency Services",
    "Appointments",
    "Patient Services",
    "Insurance & Billing",
    "Feedback & Complaints"
  ];

  const quickActions = [
    {
      icon: Navigation,
      title: "Get Directions",
      description: "Find us on Google Maps",
      action: () => window.open("https://maps.app.goo.gl/UVmdbZzcDmdy1xh58?g_st=aw", '_blank')
    },
    {
      icon: Shield,
      title: "Emergency Care",
      description: "24/7 Emergency Services",
      action: () => window.open("tel:+914012345678")
    },
    {
      icon: Heart,
      title: "Book Appointment",
      description: "Schedule your visit",
      action: () => window.location.href = "/book-appointment"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Sravanthi Hospital</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help you with any questions or concerns about your healthcare needs. 
            Reach out to us anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="medical-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Department</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept} value={dept}>
                              {dept}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="medical-card border-0">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Multiple ways to reach us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </div>
                      ))}
                      <div className="text-xs text-muted-foreground mt-1">
                        {info.description}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="medical-card border-0">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Fast access to important services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start h-auto p-4"
                    onClick={action.action}
                  >
                    <div className="flex items-center gap-3">
                      <action.icon className="h-5 w-5 text-primary" />
                      <div className="text-left">
                        <div className="font-semibold">{action.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {action.description}
                        </div>
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Emergency Notice */}
            <Card className="medical-hero text-primary-foreground border-0">
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Medical Emergency?</h3>
                <p className="text-sm mb-4">
                  For immediate medical attention, call our emergency hotline
                </p>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => window.open("tel:+914012345678")}
                  className="w-full"
                >
                  Call Emergency: +91 40 1234 5678
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="mt-12 medical-card border-0 overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Find Us on Map
            </CardTitle>
            <CardDescription>
              Located in the heart of Sainikpuri, Hyderabad
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.7983654128967!2d78.50616737501936!3d17.498515383441676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99a3f5e68df9%3A0x8c8e2c4b0c5b9a1e!2sSaptagiri%20Colony%2C%20Sainikpuri%2C%20Secunderabad%2C%20Telangana%20500094!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sravanthi Hospital Location"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;