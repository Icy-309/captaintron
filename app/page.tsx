import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Rocket,
  TrendingUp,
  Shield,
  Users,
  Zap,
  Twitter,
  TextIcon as Telegram,
  Github,
  Globe,
} from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-red-600">
                <span className="sr-only">$TRON</span>
                <div className="flex h-full w-full items-center justify-center text-white font-bold">T</div>
              </div>
              <span className="inline-block font-bold text-xl font-futuristic tracking-wider">$TRON</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link
                href="#how-to-buy"
                className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block font-futuristic"
              >
                How to Buy
              </Link>
              <Button variant="default" className="bg-red-600 hover:bg-red-700 font-futuristic">
                Buy Now
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <AnimatedBackground />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-futuristic tracking-wider text-white">
                    CAPTAIN OF $TRON - JUSTIN SUN
                  </h1>
                  <p className="max-w-[600px] text-red-100 md:text-xl font-futuristic">
                    Join the revolution with the most exciting memecoin on the TRON blockchain. Fast transactions, low
                    fees, and massive potential.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-red-600 hover:bg-gray-100 font-futuristic">
                    Buy $TRON <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm font-futuristic text-white">
                  <div className="flex items-center space-x-1">
                    <Rocket className="h-4 w-4" />
                    <span>Launch: May 2025</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4" />
                    <span>Potential Infinity</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] rounded-full overflow-hidden">
                  <div className="absolute inset-0 rounded-full bg-red-600/20 animate-pulse"></div>
                  <div className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center">
                    <video
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/justinsuntron-u9u9klCBWxpOGaaXAmwjnLfxnijG6y.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-red-600/30 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-futuristic">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-futuristic tracking-wider">
                  BUILT ON TRON FOR SPEED & EFFICIENCY
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-futuristic">
                  $TRON combines the fun of memecoins with the powerful TRON blockchain technology.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="border-red-200 bg-gradient-to-b from-white to-red-50">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                      <Zap className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold font-futuristic">LIGHTNING FAST</h3>
                    <p className="text-sm text-muted-foreground font-futuristic">
                      Transactions in seconds with TRON's high-performance blockchain.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-gradient-to-b from-white to-red-50">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                      <Shield className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold font-futuristic">SECURE & RELIABLE</h3>
                    <p className="text-sm text-muted-foreground font-futuristic">
                      Built on TRON's proven security with audited smart contracts.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-gradient-to-b from-white to-red-50">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                      <Users className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold font-futuristic">COMMUNITY DRIVEN</h3>
                    <p className="text-sm text-muted-foreground font-futuristic">
                      Governance and development decisions made by our vibrant community.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="tokenomics" className="w-full py-12 md:py-24 lg:py-32 bg-red-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-red/20 animate-grid-flow"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-futuristic">
                  Tokenomics
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-futuristic tracking-wider">
                  TOKEN DISTRIBUTION
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-futuristic">
                  Revolutionary token model designed for sustainable growth
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Card className="border-red-200 bg-white/80 backdrop-blur">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center space-y-8 text-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
                      <Rocket className="h-12 w-12 text-red-600" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold font-futuristic">FAIR LAUNCH ON SUNPUMP</h3>
                      <p className="text-muted-foreground font-futuristic">
                        $TRON will launch with a fair distribution mechanism on Sunpump, ensuring equal opportunity for
                        all community members to participate.
                      </p>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-red-200 to-transparent my-4"></div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold font-futuristic">BONDING CURVE IN PROGRESS</h3>
                      <p className="text-muted-foreground font-futuristic">
                        Our innovative bonding curve mechanism is currently in development, designed to create price
                        stability and reward early adopters while ensuring sustainable long-term growth.
                      </p>
                    </div>

                    <Button className="bg-red-600 hover:bg-red-700 font-futuristic mt-4 relative overflow-hidden group">
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-800 animate-gradient-x"></span>
                      <span className="relative z-10">BUY ON SUNPUMP</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
            
        
        </section>

      
        <section id="how-to-buy" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-futuristic">
                  Get Started
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-futuristic tracking-wider">
                  HOW TO BUY $TRON
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-futuristic">
                  Follow these simple steps to join our community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center group">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 text-xl font-bold font-futuristic relative overflow-hidden">
                  <div className="absolute inset-0 bg-red-600 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">1</span>
                </div>
                <h3 className="text-xl font-bold font-futuristic">CREATE A TRON WALLET</h3>
                <p className="text-sm text-muted-foreground font-futuristic">
                  Download TronLink or another TRON-compatible wallet and set up your account.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center group">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 text-xl font-bold font-futuristic relative overflow-hidden">
                  <div className="absolute inset-0 bg-red-600 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">2</span>
                </div>
                <h3 className="text-xl font-bold font-futuristic">BUY TRX</h3>
                <p className="text-sm text-muted-foreground font-futuristic">
                  Purchase TRON (TRX) from an exchange and send it to your wallet.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center group">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 text-xl font-bold font-futuristic relative overflow-hidden">
                  <div className="absolute inset-0 bg-red-600 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">3</span>
                </div>
                <h3 className="text-xl font-bold font-futuristic">SWAP FOR $TRON</h3>
                <p className="text-sm text-muted-foreground font-futuristic">
                  Connect to SunSwap or JustSwap and exchange your TRX for $TRON tokens.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 font-futuristic relative overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-800 animate-gradient-x"></span>
                <span className="relative z-10">BUY $TRON NOW</span>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-red-600 to-red-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/20 via-red-900/5 to-black/0"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-futuristic tracking-wider">
                  JOIN OUR COMMUNITY
                </h2>
                <p className="max-w-[900px] text-red-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-futuristic">
                  Be part of the fastest growing memecoin community on TRON.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="#"
                  className="flex items-center space-x-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 font-futuristic group relative overflow-hidden"
                >
                  <span className="absolute inset-0 w-0 bg-red-100 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <Twitter className="h-5 w-5 relative z-10" />
                  <span className="relative z-10">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 font-futuristic group relative overflow-hidden"
                >
                  <span className="absolute inset-0 w-0 bg-red-100 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <Telegram className="h-5 w-5 relative z-10" />
                  <span className="relative z-10">Telegram</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 font-futuristic group relative overflow-hidden"
                >
                  <span className="absolute inset-0 w-0 bg-red-100 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <Github className="h-5 w-5 relative z-10" />
                  <span className="relative z-10">Github</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 font-futuristic group relative overflow-hidden"
                >
                  <span className="absolute inset-0 w-0 bg-red-100 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <Globe className="h-5 w-5 relative z-10" />
                  <span className="relative z-10">Website</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex justify-center px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-red-600">
              <div className="flex h-full w-full items-center justify-center text-white font-bold">T</div>
            </div>
            <p className="text-sm font-medium font-futuristic">© 2025 $TRON. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

