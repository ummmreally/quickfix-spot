import { Button } from "@/components/ui/button";
import { Phone, Menu, Play, Pause, Volume2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Helmet } from "react-helmet";

const DIYRepair = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        <title>DIY iPhone Repair Guide | Fix Water Damage | Tech Medics Macon</title>
        <meta name="description" content="Free DIY repair tools and guides for iPhone water damage. Use our water ejection sound to help remove water from iPhone speakers in Macon, GA." />
        <meta name="keywords" content="iPhone water damage, DIY iPhone repair, water ejection, speaker repair, Macon GA" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-background sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Link to="/macon">
                <img src={logo} alt="Tech Medics logo" className="h-12 w-auto" />
              </Link>

              <nav className="hidden md:flex items-center gap-8">
                <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                  Home
                </a>
                <a href="/macon" className="text-foreground hover:text-primary transition-colors font-medium">
                  Macon
                </a>
                <a href="/macon/pricing-chart" className="text-foreground hover:text-primary transition-colors font-medium">
                  Price List
                </a>
                <a href="/macon/business" className="text-foreground hover:text-primary transition-colors font-medium">
                  Business
                </a>
                <a href="/macon/education" className="text-foreground hover:text-primary transition-colors font-medium">
                  Education
                </a>
                <a href="/macon/diy-repair" className="text-primary font-medium">
                  DIY Repair
                </a>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="tel:(478)259-6371">
                    <Phone className="mr-2 h-4 w-4" />
                    (478) 259-6371
                  </a>
                </Button>
              </nav>

              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <nav className="flex flex-col gap-6 mt-8">
                    <a href="/" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                      Home
                    </a>
                    <a href="/macon" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                      Macon
                    </a>
                    <a href="/macon/pricing-chart" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                      Price List
                    </a>
                    <a href="/macon/business" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                      Business
                    </a>
                    <a href="/macon/education" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                      Education
                    </a>
                    <a href="/macon/diy-repair" className="text-primary font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                      DIY Repair
                    </a>
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                      <a href="tel:(478)259-6371">
                        <Phone className="mr-2 h-4 w-4" />
                        (478) 259-6371
                      </a>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

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
