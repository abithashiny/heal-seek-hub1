import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Navigation, Car, Bus, Train } from "lucide-react";

const FindHospital = () => {
  const googleMapsLink = "https://maps.app.goo.gl/UVmdbZzcDmdy1xh58?g_st=aw";

  const transportOptions = [
  {
    icon: Car,
    title: "By Car",
    description: "Parking available on-site",
    time: "15-20 minutes from city center"
  },
  {
    icon: Bus,
    title: "By Bus",
    description: "Bus stop 200m away",
    time: "Route 45, 67 directly to hospital"
  },
  {
    icon: Train,
    title: "By Metro",
    description: "Nearest metro: Sainikpuri",
    time: "Currently not available",
    alternatives: [
      {
        icon: Car,
        title: "Alternative: Car",
        description: "Parking available on-site",
        time: "15-20 minutes from city center"
      },
      {
        icon: Bus,
        title: "Alternative: Bus",
        description: "Bus stop 200m away",
        time: "Route 45, 67 directly to hospital"
      }
    ]
  }
];


  const landmarks = [
    "Near Saptagiri Colony Main Road",
    "Opposite SBI Bank Branch",
    "Behind Reliance Fresh Store",
    "Close to Sainikpuri Police Station"
  ];

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Find Our Hospital</h1>
            <p className="text-xl text-muted-foreground">
              Easily locate Sravanthi Hospital in Hyderabad
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Section */}
            <Card className="medical-card border-0 overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Hospital Location
                </CardTitle>
                <CardDescription>
                  Click on the map or button below to get directions
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.452191644138!2d79.6236377!3d17.148200700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a34db00585b6c1b%3A0x5ed038b73f159324!2sSravanthi%20Hospital!5e0!3m2!1sen!2sin!4v1756374812714!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sravanthi Hospital Location"
                />


                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => window.open(googleMapsLink, '_blank')}
                  >
                    <Navigation className="mr-2 h-5 w-5" />
                    Get Directions in Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Hospital Information */}
            <div className="space-y-6">
              {/* Address */}
              <Card className="medical-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Hospital Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-lg">Sravanthi Hospital</div>
                      <div className="text-muted-foreground">
                        Sravanthi Hospital <br />

                        Area: Vidyanagar, Suryapet<br />

                        Pincode: 508213 (Telangana, India)
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 pt-2">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-semibold">Contact</div>
                        <div className="text-muted-foreground">+91 40 1234 5678</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-semibold">Operating Hours</div>
                        <div className="text-muted-foreground">
                          24/7 Emergency Care<br />
                          OPD: 9:00 AM - 6:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Landmarks */}
              <Card className="medical-card border-0">
                <CardHeader>
                  <CardTitle>Nearby Landmarks</CardTitle>
                  <CardDescription>
                    These landmarks will help you locate us easily
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {landmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{landmark}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Transportation Options */}
          <div className="grid md:grid-cols-3 gap-6">
  {transportOptions.map((option, index) => (
    <Card key={index} className="medical-card border-0 text-center">
      <CardHeader>
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <option.icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <CardTitle>{option.title}</CardTitle>
        <CardDescription>{option.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Badge variant="secondary" className="text-sm">
          {option.time}
        </Badge>

        {/* Render fallback options if available */}
        {option.alternatives && (
          <div className="mt-4 space-y-3 text-left">
            <h4 className="font-semibold text-sm">Alternatives:</h4>
            {option.alternatives.map((alt, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 border-l-2 pl-3 border-muted-foreground/40"
              >
                <alt.icon className="h-4 w-4 text-primary mt-1" />
                <div>
                  <div className="font-medium">{alt.title}</div>
                  <div className="text-muted-foreground text-sm">{alt.description}</div>
                  <Badge variant="outline" className="text-xs mt-1">{alt.time}</Badge>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  ))}
</div>


          {/* Emergency Contact */}
          <Card className="mt-12 medical-hero text-primary-foreground border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Need Emergency Care?</h3>
              <p className="text-lg mb-6">
                Our emergency department is available 24/7 for urgent medical care
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Emergency: +91 40 1234 5678
                </Button>
                <Button 
                variant="outline" 
                size="lg" 
                className="text-lg border-black text-black hover:bg-black hover:text-white"
                onClick={() => window.open(googleMapsLink, '_blank')}
              >
                <Navigation className="mr-2 h-5 w-5" />
                Get Quick Directions
              </Button>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FindHospital;