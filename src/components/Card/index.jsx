/* eslint-disable prefer-const */
"use client"
import { motion } from "framer-motion"

export default function Card ({ children }) {
    return (
    <div
      className="overflow-hidden p-2 w-max max-w-[310px] md:max-w-[600px] mt-8 lg:max-w-[420px] lg:mt-0 m-auto relative duration-300 border border-zinc-700 rounded-lg hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50" 
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0  transition duration-300" />
        <motion.div
          className="absolute opacity-50 sm:opacity-100 inset-0 z-10  bg-gradient-to-br from-black  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
        />
      </div>
      {children}
    </div>
  )
}
