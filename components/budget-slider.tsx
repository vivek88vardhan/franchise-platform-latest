"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

export default function BudgetSlider() {
  const [budget, setBudget] = useState([150000])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="budget" className="text-base text-white">
          Your Investment Budget
        </Label>
        <div className="flex items-center justify-between mt-2 text-gray-400">
          <span className="text-sm">$50,000</span>
          <span className="text-sm">$500,000+</span>
        </div>
        <Slider
          id="budget"
          min={50000}
          max={500000}
          step={10000}
          value={budget}
          onValueChange={setBudget}
          className="mt-2"
        />
      </div>

      <motion.div
        className="bg-gradient-to-br from-blue-900/30 to-violet-900/30 p-6 rounded-lg border border-white/10 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <p className="text-sm text-gray-400">Your Budget</p>
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
            {formatCurrency(budget[0])}
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-xs text-gray-400">AI Success Prediction</span>
              <span className="text-xs font-medium text-blue-400">
                {budget[0] < 100000 ? "72%" : budget[0] < 200000 ? "86%" : budget[0] < 300000 ? "93%" : "97%"}
              </span>
            </div>
            <div className="w-full bg-gray-700/30 rounded-full h-2 mb-4">
              <div
                className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full"
                style={{
                  width: `${budget[0] < 100000 ? "72%" : budget[0] < 200000 ? "86%" : budget[0] < 300000 ? "93%" : "97%"}`,
                }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-xs text-gray-400">Market Opportunity</span>
              <span className="text-xs font-medium text-blue-400">
                {budget[0] < 100000
                  ? "Limited"
                  : budget[0] < 200000
                    ? "Good"
                    : budget[0] < 300000
                      ? "Excellent"
                      : "Outstanding"}
              </span>
            </div>
            <div className="w-full bg-gray-700/30 rounded-full h-2 mb-4">
              <div
                className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full"
                style={{
                  width: `${budget[0] < 100000 ? "60%" : budget[0] < 200000 ? "75%" : budget[0] < 300000 ? "90%" : "98%"}`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-300">
          <p>AI-recommended franchise types:</p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            {budget[0] < 100000 ? (
              <>
                <li>
                  Small beverage kiosks <span className="text-blue-400">(87% match)</span>
                </li>
                <li>
                  Mobile franchise units <span className="text-blue-400">(82% match)</span>
                </li>
                <li>
                  Quick-service snack outlets <span className="text-blue-400">(78% match)</span>
                </li>
              </>
            ) : budget[0] < 200000 ? (
              <>
                <li>
                  Medium-sized beverage franchises <span className="text-blue-400">(94% match)</span>
                </li>
                <li>
                  Small food franchises <span className="text-blue-400">(91% match)</span>
                </li>
                <li>
                  Retail kiosks <span className="text-blue-400">(88% match)</span>
                </li>
              </>
            ) : budget[0] < 300000 ? (
              <>
                <li>
                  Full-service restaurants <span className="text-blue-400">(96% match)</span>
                </li>
                <li>
                  Premium beverage chains <span className="text-blue-400">(95% match)</span>
                </li>
                <li>
                  Small retail stores <span className="text-blue-400">(92% match)</span>
                </li>
              </>
            ) : (
              <>
                <li>
                  Large format restaurants <span className="text-blue-400">(98% match)</span>
                </li>
                <li>
                  Premium retail franchises <span className="text-blue-400">(97% match)</span>
                </li>
                <li>
                  Multi-unit opportunities <span className="text-blue-400">(96% match)</span>
                </li>
              </>
            )}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
