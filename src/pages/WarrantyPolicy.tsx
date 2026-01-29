import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Shield, Droplets, ShoppingBag, XCircle, FileCheck, Phone, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";

const WarrantyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Warranty & Return Policy | Tech Medics Macon</title>
        <meta 
          name="description" 
          content="Tech Medics Macon warranty and return policy. 30-day warranty on repairs, 14-day limited warranty on water damage repairs, and 30-day return policy on accessories."
        />
        <link rel="canonical" href="https://techmedicsmacon.com/warranty-policy" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Warranty & Return Policy
              </h1>
              <p className="text-xl text-muted-foreground">
                Your satisfaction is our priority. Learn about our warranty coverage and return policies.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Repair Warranty */}
              <div className="bg-card rounded-xl p-8 shadow-sm border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground">Repair Warranty (30 Days)</h2>
                    <p className="text-muted-foreground">Coverage for all standard device repairs</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-card-foreground">
                  <p>
                    All repairs performed by Tech Medics are backed by a <strong>30-day warranty</strong> covering 
                    defects in workmanship and replacement parts.
                  </p>
                  
                  <h3 className="text-lg font-semibold mt-6">What's Covered:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Defects in parts we installed</li>
                    <li>Issues with our workmanship</li>
                    <li>Component failures related to our repair</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold mt-6">Our Commitment:</h3>
                  <p>
                    If an issue arises that's covered under warranty, Tech Medics will re-service your device 
                    <strong> up to 3 times</strong> at no additional cost. If we cannot resolve the issue after 
                    3 attempts, we'll work with you on an alternative solution.
                  </p>
                  
                  <div className="bg-muted/50 rounded-lg p-4 mt-6">
                    <p className="text-sm">
                      <strong>Important:</strong> The warranty period begins on the date of your original repair. 
                      Bring your receipt when making a warranty claim.
                    </p>
                  </div>
                </div>
              </div>

              {/* Water Damage Warranty */}
              <div className="bg-card rounded-xl p-8 shadow-sm border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Droplets className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground">Water Damage Repairs (Limited 14-Day Warranty)</h2>
                    <p className="text-muted-foreground">Special terms for water-damaged devices</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-card-foreground">
                  <p>
                    Water damage repairs are performed on a <strong>best-effort basis</strong> due to the 
                    unpredictable nature of liquid damage and ongoing corrosion.
                  </p>
                  
                  <h3 className="text-lg font-semibold mt-6">Limited Coverage:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>14-day limited warranty</strong> on component failures directly related to our repair</li>
                    <li>Coverage applies only to parts we replaced during the water damage service</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold mt-6">Why Limited Coverage?</h3>
                  <p>
                    Water and other liquids cause corrosion that can continue to spread even after cleaning 
                    and repair. New issues may develop days or weeks later that weren't visible during the 
                    initial repair. This is why we cannot guarantee full functionality restoration for 
                    water-damaged devices.
                  </p>
                  
                  <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 mt-6">
                    <p className="text-sm">
                      <strong>Note:</strong> We always provide an honest assessment before beginning water damage 
                      repair and will inform you of the risks involved.
                    </p>
                  </div>
                </div>
              </div>

              {/* Accessory Returns */}
              <div className="bg-card rounded-xl p-8 shadow-sm border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <ShoppingBag className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground">Accessory Returns (30 Days)</h2>
                    <p className="text-muted-foreground">Return policy for purchased accessories</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-card-foreground">
                  <p>
                    Accessories purchased from Tech Medics may be returned within <strong>30 days</strong> of 
                    purchase, subject to the following conditions:
                  </p>
                  
                  <h3 className="text-lg font-semibold mt-6">Return Requirements:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Item must be in <strong>original condition</strong></li>
                    <li>No physical damage or defects caused by the customer</li>
                    <li>No missing parts or components</li>
                    <li>No clear signs of use</li>
                    <li>Original packaging preferred (not required)</li>
                    <li>Original receipt required</li>
                  </ul>
                  
                  <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4 mt-6">
                    <p className="text-sm">
                      <strong>Refunds:</strong> Approved returns will be refunded to the original payment method 
                      within 5-7 business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* What's NOT Covered */}
              <div className="bg-card rounded-xl p-8 shadow-sm border border-destructive/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-destructive/10 rounded-lg">
                    <XCircle className="w-8 h-8 text-destructive" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground">What's NOT Covered</h2>
                    <p className="text-muted-foreground">Exclusions from our warranty</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-card-foreground">
                  <p>
                    Our warranty does <strong>not</strong> cover damage resulting from:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Drops, impacts, or physical damage after repair</li>
                    <li>Water or liquid damage occurring after repair</li>
                    <li>New cracks or breaks to screens or housings</li>
                    <li>Physical abuse or neglect</li>
                    <li>Unauthorized modifications or repairs by third parties</li>
                    <li>Software issues unrelated to our repair</li>
                    <li>Normal wear and tear</li>
                    <li>Damage caused by accessories (chargers, cases, etc.)</li>
                  </ul>
                  
                  <div className="bg-destructive/5 rounded-lg p-4 mt-6">
                    <p className="text-sm">
                      <strong>No Returns on Services:</strong> Repair services cannot be returned or refunded 
                      once the work has been completed. If you're unsatisfied with a repair, please contact us 
                      to discuss warranty options.
                    </p>
                  </div>
                </div>
              </div>

              {/* How to Make a Claim */}
              <div className="bg-card rounded-xl p-8 shadow-sm border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FileCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground">How to Make a Warranty Claim</h2>
                    <p className="text-muted-foreground">Simple steps to get your device serviced</p>
                  </div>
                </div>
                
                <div className="space-y-6 text-card-foreground">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl font-bold text-primary">1</span>
                      </div>
                      <h3 className="font-semibold mb-2">Bring Your Device</h3>
                      <p className="text-sm text-muted-foreground">
                        Visit our store with your device and original repair receipt
                      </p>
                    </div>
                    
                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl font-bold text-primary">2</span>
                      </div>
                      <h3 className="font-semibold mb-2">We'll Inspect</h3>
                      <p className="text-sm text-muted-foreground">
                        Our technicians will examine the device to determine warranty eligibility
                      </p>
                    </div>
                    
                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl font-bold text-primary">3</span>
                      </div>
                      <h3 className="font-semibold mb-2">Get It Fixed</h3>
                      <p className="text-sm text-muted-foreground">
                        If covered, we'll service your device at no additional charge
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-primary/5 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Questions About Our Warranty?</h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <Phone className="w-8 h-8 text-primary mb-2" />
                    <p className="font-semibold">Call Us</p>
                    <a href="tel:+14782570088" className="text-primary hover:underline">(478) 257-0088</a>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-8 h-8 text-primary mb-2" />
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-muted-foreground text-sm">4494 Forsyth Rd, Macon, GA</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Clock className="w-8 h-8 text-primary mb-2" />
                    <p className="font-semibold">Hours</p>
                    <p className="text-muted-foreground text-sm">Mon-Sat: 10AM-7PM</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-muted py-8 border-t">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p className="mb-2">© {new Date().getFullYear()} Tech Medics Macon. All rights reserved.</p>
            <div className="flex justify-center gap-4 text-sm">
              <Link to="/" className="hover:text-primary">Home</Link>
              <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link to="/macon/contact" className="hover:text-primary">Contact</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default WarrantyPolicy;
