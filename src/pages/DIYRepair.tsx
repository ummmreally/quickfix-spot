import { Button } from "@/components/ui/button";
import { Phone, Play, Pause, Volume2, Wrench, Battery, Smartphone, Hammer } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";

const DIYRepair = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I eject water from my iPhone speaker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use our water ejection sound tool by turning your iPhone volume to maximum, placing it speaker-down, and playing the 165Hz frequency sound for 15-30 seconds to vibrate water out of the speakers."
        }
      },
      {
        "@type": "Question",
        "name": "Can I replace my iPhone screen myself?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, with the right tools and careful attention to detail. However, DIY screen replacement requires precision. Damage to internal cables can cause permanent issues, so consider professional repair if unsure."
        }
      },
      {
        "@type": "Question",
        "name": "Is DIY iPhone battery replacement safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It can be done safely if you follow proper procedures: discharge battery below 25%, use heat to soften adhesive, never force removal, and be careful not to puncture the battery. Swollen batteries require immediate professional help."
        }
      }
    ]
  };
  

  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const playWaterEjectionSound = () => {
    if (isPlaying) {
      stopSound();
      return;
    }

    // Create audio context
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    audioContextRef.current = audioContext;

    // Create oscillator for water ejection frequency
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(165, audioContext.currentTime); // Optimal frequency for water ejection
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillatorRef.current = oscillator;
    gainNodeRef.current = gainNode;
    setIsPlaying(true);

    // Auto-stop after 30 seconds
    setTimeout(() => {
      if (isPlaying) {
        stopSound();
      }
    }, 30000);
  };

  const stopSound = () => {
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current.disconnect();
      oscillatorRef.current = null;
    }
    if (gainNodeRef.current) {
      gainNodeRef.current.disconnect();
      gainNodeRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    setIsPlaying(false);
  };

  return (
    <>
      <Helmet>
        <title>DIY iPhone Repair Tools & Guides | Water Ejection | Tech Medics Macon</title>
        <meta name="description" content="Free DIY iPhone repair tools including water ejection sound, screen replacement guide, and battery replacement tutorial. When to seek professional help in Macon, GA." />
        <meta name="keywords" content="iPhone water damage, DIY iPhone repair, water ejection sound, iPhone screen replacement guide, battery replacement tutorial" />
        <link rel="canonical" href="https://techmedicsmacon.com/macon/diy-repair" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                DIY iPhone Repair Tools
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Free tools and guides to help you fix common iPhone issues at home
              </p>
            </div>
          </div>
        </section>

        {/* Water Damage Tool Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Volume2 className="h-16 w-16 text-primary" />
                </div>
                <CardTitle className="text-3xl mb-2">Water Ejection Sound</CardTitle>
                <CardDescription className="text-lg">
                  Use this sound to help remove water from your iPhone speakers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">How it works:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Turn your iPhone volume to maximum</li>
                    <li>Place your iPhone with speakers facing down</li>
                    <li>Press play and let the sound run for 15-30 seconds</li>
                    <li>The specific frequency will help vibrate water out of the speakers</li>
                    <li>Wipe away any water that comes out</li>
                    <li>Repeat if necessary</li>
                  </ol>
                </div>

                <div className="flex justify-center">
                  <Button
                    size="lg"
                    onClick={playWaterEjectionSound}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-6"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="mr-2 h-6 w-6" />
                        Stop Sound
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-6 w-6" />
                        Play Water Ejection Sound
                      </>
                    )}
                  </Button>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg">
                  <p className="text-sm text-amber-700 dark:text-amber-400">
                    <strong>Important:</strong> This tool helps remove water from speakers, but does not fix internal water damage. 
                    If your iPhone has significant water exposure, visit Tech Medics for professional water damage repair.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* iPhone Repair Guides */}
        <section className="py-20 px-4 bg-secondary/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">iPhone Repair Guides</h2>
              <p className="text-xl text-muted-foreground">
                Step-by-step instructions for common iPhone repairs
              </p>
            </div>

            <Tabs defaultValue="screen" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="screen">Screen Replacement</TabsTrigger>
                <TabsTrigger value="battery">Battery Replacement</TabsTrigger>
              </TabsList>

              <TabsContent value="screen" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Smartphone className="h-8 w-8 text-primary" />
                      <CardTitle className="text-2xl">Screen Replacement Guide</CardTitle>
                    </div>
                    <CardDescription>Replace a cracked or damaged iPhone screen</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Hammer className="h-5 w-5 text-primary" />
                        Tools Needed:
                      </h3>
                      <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Pentalobe screwdriver (0.8mm)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Phillips #000 screwdriver</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Suction cup tool</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Plastic opening tools</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Spudger tool</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Replacement screen assembly</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-secondary/30 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3">Step-by-Step Instructions:</h3>
                      <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                        <li><strong className="text-foreground">Power off your iPhone</strong> - Completely shut down the device before starting</li>
                        <li><strong className="text-foreground">Remove pentalobe screws</strong> - Take out the two screws at the bottom near the charging port</li>
                        <li><strong className="text-foreground">Apply suction cup</strong> - Place near home button and gently pull up while inserting opening tool</li>
                        <li><strong className="text-foreground">Disconnect battery</strong> - Remove battery connector first for safety</li>
                        <li><strong className="text-foreground">Disconnect display cables</strong> - Carefully remove the screen digitizer and LCD connectors</li>
                        <li><strong className="text-foreground">Transfer components</strong> - Move home button, camera, and earpiece to new screen</li>
                        <li><strong className="text-foreground">Connect new screen</strong> - Attach all cables and test before final assembly</li>
                        <li><strong className="text-foreground">Reassemble</strong> - Replace all screws and close the device</li>
                      </ol>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
                      <p className="text-sm text-red-700 dark:text-red-400">
                        <strong>Warning:</strong> Screen replacement requires precision and patience. Damage to internal cables can cause permanent issues. Consider professional repair if you're unsure.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="battery" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Battery className="h-8 w-8 text-primary" />
                      <CardTitle className="text-2xl">Battery Replacement Guide</CardTitle>
                    </div>
                    <CardDescription>Replace a worn-out iPhone battery</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Hammer className="h-5 w-5 text-primary" />
                        Tools Needed:
                      </h3>
                      <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Pentalobe screwdriver (0.8mm)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Phillips #000 screwdriver</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Suction cup tool</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Plastic opening tools</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Adhesive remover or hair dryer</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Replacement battery with adhesive</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-secondary/30 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3">Step-by-Step Instructions:</h3>
                      <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                        <li><strong className="text-foreground">Discharge battery below 25%</strong> - Reduces fire risk if punctured</li>
                        <li><strong className="text-foreground">Remove screen</strong> - Follow screen removal steps (see Screen tab)</li>
                        <li><strong className="text-foreground">Disconnect battery</strong> - Remove battery connector bracket and disconnect cable</li>
                        <li><strong className="text-foreground">Remove adhesive strips</strong> - Gently pull the white adhesive tabs at an angle</li>
                        <li><strong className="text-foreground">Remove old battery</strong> - If adhesive breaks, use heat to soften and pry carefully</li>
                        <li><strong className="text-foreground">Clean surface</strong> - Remove any remaining adhesive from the phone</li>
                        <li><strong className="text-foreground">Install new battery</strong> - Apply new adhesive strips and press battery firmly</li>
                        <li><strong className="text-foreground">Reconnect and test</strong> - Connect battery, test power on, then close device</li>
                      </ol>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
                      <p className="text-sm text-red-700 dark:text-red-400">
                        <strong>Safety Warning:</strong> Lithium-ion batteries are dangerous if punctured or bent. Never force removal. If battery is swollen, seek professional help immediately.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

            </Tabs>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">When to Seek Professional Help</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>DIY Solutions Work For:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Minor water in speakers</li>
                    <li>Surface moisture</li>
                    <li>Quick water exposure</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Professional Help Needed For:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Phone won't turn on</li>
                    <li>Screen flickering/distortion</li>
                    <li>Complete water submersion</li>
                    <li>Charging issues</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg mb-4">Need professional water damage repair in Macon?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="tel:(478)259-6371">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Tech Medics
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/macon">
                    Visit Our Location
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border">
          <div className="max-w-7xl mx-auto text-center text-muted-foreground">
            <p>
              © 2024 MyTechMedics. All rights reserved. |{" "}
              <Link to="/macon/about" className="hover:text-primary transition-colors">
                About
              </Link>
              {" | "}
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DIYRepair;
