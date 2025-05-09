import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowRight, Sparkles, Brain, Zap, BarChart3, Globe, Users } from "lucide-react"
import FranchiseGrid from "@/components/franchise-grid"
import BudgetSlider from "@/components/budget-slider"
import Chatbot from "@/components/chatbot"
import AiRecommendations from "@/components/ai-recommendations"
import ParticleBackground from "@/components/particle-background"
import FeatureCard from "@/components/feature-card"
import HeroStatic from "@/components/hero-static"
import ThemeToggle from "@/components/theme-toggle"
import AIMarketInsights from "@/components/ai-market-insights"
import FoundersSection from "@/components/founders-section"
import SimpleLogo from "@/components/simple-logo"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
        <div className="container flex h-16 items-center justify-between">
          <SimpleLogo />
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#franchises"
              className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              Franchises
            </Link>
            <Link
              href="#ai-insights"
              className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              AI Insights
            </Link>
            <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">
              Features
            </Link>
            <Link
              href="#recommendations"
              className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              Smart Recommendations
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex border-pink-500/50 text-pink-400 hover:text-pink-300 hover:border-pink-500 hover:bg-pink-500/10"
            >
              Log In
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 border-0"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <ParticleBackground />

          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                  <span>AI-POWERED FRANCHISE PLATFORM</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                  Bring Indian Franchises to the{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                    United States
                  </span>
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  Our AI analyzes market trends, predicts success rates, and creates a personalized roadmap for your
                  franchise journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-6 shadow-lg shadow-blue-700/20 border-0 group">
                    <span>Explore AI Recommendations</span>
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-6 border-white/20 text-pink-400 hover:text-pink-300 hover:border-white/40"
                  >
                    Schedule AI Consultation
                  </Button>
                </div>

                <div className="mt-12 grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="text-2xl font-bold text-blue-400 mb-1">99%</div>
                    <div className="text-xs text-gray-400">Prediction Accuracy</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="text-2xl font-bold text-blue-400 mb-1">50+</div>
                    <div className="text-xs text-gray-400">AI-Vetted Franchises</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
                    <div className="text-xs text-gray-400">AI Assistant</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <HeroStatic />
              </div>
            </div>
          </div>
        </section>

        {/* AI Insights Section */}
        <section id="ai-insights" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-violet-900/20 z-0"></div>
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Brain className="h-3.5 w-3.5 mr-1.5" />
                <span>AI MARKET INSIGHTS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                  Real-time Market Analysis
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our AI continuously analyzes US market trends to identify optimal franchise opportunities
              </p>
            </div>

            <AIMarketInsights />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 relative">
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Zap className="h-3.5 w-3.5 mr-1.5" />
                <span>AI-POWERED FEATURES</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                  Advanced AI Capabilities
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our platform leverages cutting-edge AI to streamline your franchise journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Brain className="h-10 w-10" />}
                title="Predictive Analytics"
                description="Our AI predicts franchise success rates based on location, demographics, and market trends."
              />
              <FeatureCard
                icon={<Globe className="h-10 w-10" />}
                title="Supply Chain AI"
                description="AI-optimized supply chain management for authentic Indian ingredients and materials."
              />
              <FeatureCard
                icon={<BarChart3 className="h-10 w-10" />}
                title="ROI Forecasting"
                description="Advanced AI models forecast your return on investment with 94% accuracy."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10" />}
                title="Staff Training AI"
                description="AI-powered training programs ensure your staff delivers authentic experiences."
              />
              <FeatureCard
                icon={<Sparkles className="h-10 w-10" />}
                title="Sentiment Analysis"
                description="Our AI analyzes customer sentiment to help you refine your franchise experience."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10" />}
                title="Competitive Intelligence"
                description="AI monitors competitors and identifies opportunities to differentiate your franchise."
              />
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section id="founders" className="py-20 relative">
          <div className="container relative z-10">
            <FoundersSection />
          </div>
        </section>

        {/* Franchises Section */}
        <section id="franchises" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-blue-900/20 z-0"></div>
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                <span>AI-VETTED FRANCHISES</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                  Top-Performing Indian Franchises
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our AI has analyzed these franchises and predicted high success rates in the US market
              </p>
            </div>
            <FranchiseGrid />
            <div className="mt-12 text-center">
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 border-0 shadow-lg shadow-blue-700/20 group">
                <span>View All AI-Vetted Franchises</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* AI Recommendations Section */}
        <section id="recommendations" className="py-20 relative">
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Brain className="h-3.5 w-3.5 mr-1.5" />
                <span>PERSONALIZED AI RECOMMENDATIONS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                  Find Your Perfect Franchise Match
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our AI analyzes your preferences, budget, and goals to recommend the ideal franchise opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <BudgetSlider />
                <Button className="mt-8 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 border-0 shadow-lg shadow-blue-700/20 w-full">
                  Generate AI Recommendations
                </Button>
              </div>
              <AiRecommendations />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900/30 to-violet-900/30"></div>
          <div className="container text-center relative z-10">
            <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Zap className="h-3.5 w-3.5 mr-1.5" />
              <span>START YOUR AI JOURNEY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Leverage AI for Your Franchise Success?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Join our platform and let our AI guide you to franchise success in the US market.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-6 shadow-lg shadow-blue-700/20 border-0">
                Start Free AI Analysis
              </Button>
              <Button
                variant="outline"
                className="text-pink-400 border-white/20 hover:border-white/40 hover:text-pink-300 px-8 py-6"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black/50 backdrop-blur-xl text-gray-400 py-12 border-t border-white/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <SimpleLogo size="lg" />
              </div>
              <p className="text-sm">
                Bringing the best of Indian franchises to the United States with AI-powered insights and support.
              </p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">AI Features</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Predictive Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Market Insights
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    ROI Forecasting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Sentiment Analysis
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    AI Recommendations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Franchises</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Chai Point
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    MBA Chai Wala
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Chai Garam
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Tea Trails
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Creamstone
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>ai@franchiseai.com</li>
                <li>+1 (888) 123-4567</li>
                <li>123 AI Avenue, Suite 500</li>
                <li>San Francisco, CA 94103</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-sm text-center">
            <p>© 2025 franchise.ai. All rights reserved. Powered by advanced artificial intelligence.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  )
}
