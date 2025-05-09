"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function FoundersSection() {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
            Meet Our Founders
          </span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Visionary leaders bringing AI-powered franchise solutions to the market
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/30 to-violet-600/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                    V
                  </span>
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                    <h3 className="text-2xl font-bold text-white">Vivek</h3>
                    <Badge className="bg-blue-600 md:ml-2">Founders</Badge>
                    
                  </div>
                  <p className="text-gray-300 mb-4">
                  Vivek is the technical genius behind our AI-powered franchise analytics platform. With a
                    background in machine learning and supply chain optimization, he has developed proprietary
                    algorithms that predict franchise success with unprecedented accuracy. His innovations have
                    revolutionized how franchise opportunities are evaluated and optimized.
                    
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/30 to-violet-600/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                    B
                  </span>
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                    <h3 className="text-2xl font-bold text-white">Bharath</h3>
                    <Badge className="bg-violet-600 md:ml-2">Founders</Badge>
                  </div>
                  <p className="text-gray-300 mb-4">
                  With over 15 years of experience in franchise development and AI technology, Bharath leads our vision
                    to transform how Indian franchises establish themselves in the US market. His expertise in
                    cross-cultural business development has helped dozens of brands successfully expand internationally.
                    
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
