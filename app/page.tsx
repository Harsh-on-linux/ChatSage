"use client";

import { motion } from "framer-motion";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FloatingElements from "@/components/landing/FloatingElements";
import StatsCounter from "@/components/landing/StatsCounter";

const LandingPage = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 overflow-hidden relative">
      {/* Cursor-following gradient */}
      <motion.div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-0 cursor-gradient-primary gradient-blur-1"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
          scale: [1, 1.1, 1],
          background: [
            `radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.3) 30%, rgba(236, 72, 153, 0.25) 50%, rgba(139, 92, 246, 0.15) 70%, rgba(59, 130, 246, 0.05) 85%, transparent 100%)`,
            `radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(236, 72, 153, 0.3) 30%, rgba(59, 130, 246, 0.25) 50%, rgba(168, 85, 247, 0.15) 70%, rgba(147, 51, 234, 0.05) 85%, transparent 100%)`,
            `radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(59, 130, 246, 0.3) 30%, rgba(139, 92, 246, 0.25) 50%, rgba(147, 51, 234, 0.15) 70%, rgba(236, 72, 153, 0.05) 85%, transparent 100%)`,
            `radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.3) 30%, rgba(236, 72, 153, 0.25) 50%, rgba(139, 92, 246, 0.15) 70%, rgba(59, 130, 246, 0.05) 85%, transparent 100%)`,
          ],
        }}
        transition={{
          x: { type: "spring", stiffness: 50, damping: 30 },
          y: { type: "spring", stiffness: 50, damping: 30 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          background: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Secondary cursor gradient */}
      <motion.div
        className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0 cursor-gradient-secondary gradient-blur-2"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
          scale: [1.2, 1, 1.2],
          background: [
            `radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(139, 92, 246, 0.25) 40%, rgba(59, 130, 246, 0.15) 60%, rgba(236, 72, 153, 0.08) 80%, transparent 100%)`,
            `radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.25) 40%, rgba(236, 72, 153, 0.15) 60%, rgba(139, 92, 246, 0.08) 80%, transparent 100%)`,
            `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(236, 72, 153, 0.25) 40%, rgba(139, 92, 246, 0.15) 60%, rgba(59, 130, 246, 0.08) 80%, transparent 100%)`,
            `radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(139, 92, 246, 0.25) 40%, rgba(59, 130, 246, 0.15) 60%, rgba(236, 72, 153, 0.08) 80%, transparent 100%)`,
          ],
        }}
        transition={{
          x: { type: "spring", stiffness: 30, damping: 40, delay: 0.1 },
          y: { type: "spring", stiffness: 30, damping: 40, delay: 0.1 },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          background: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          },
        }}
      />

      {/* Third gradient layer for extra depth */}
      <motion.div
        className="fixed w-[800px] h-[800px] rounded-full pointer-events-none z-0 cursor-gradient-tertiary gradient-blur-3 soft-glow"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
          scale: [0.8, 1.3, 0.8],
          background: [
            `radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.15) 25%, rgba(236, 72, 153, 0.12) 45%, rgba(59, 130, 246, 0.08) 65%, rgba(139, 92, 246, 0.05) 80%, transparent 100%)`,
            `radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.15) 25%, rgba(99, 102, 241, 0.12) 45%, rgba(139, 92, 246, 0.08) 65%, rgba(59, 130, 246, 0.05) 80%, transparent 100%)`,
            `radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(59, 130, 246, 0.15) 25%, rgba(168, 85, 247, 0.12) 45%, rgba(99, 102, 241, 0.08) 65%, rgba(236, 72, 153, 0.05) 80%, transparent 100%)`,
            `radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.15) 25%, rgba(236, 72, 153, 0.12) 45%, rgba(59, 130, 246, 0.08) 65%, rgba(139, 92, 246, 0.05) 80%, transparent 100%)`,
          ],
        }}
        transition={{
          x: { type: "spring", stiffness: 20, damping: 50, delay: 0.2 },
          y: { type: "spring", stiffness: 20, damping: 50, delay: 0.2 },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 },
          background: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          },
        }}
      />

      {/* Enhanced animated background elements */}
      <FloatingElements />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 p-4 rounded-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          className="text-center"
        >
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-6 border border-blue-200/50"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span className="text-sm font-medium text-gray-700">
                AI-Powered Learning Revolution
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Learn Through
              </span>
              <br />
              <motion.span
                className="relative inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Conversations
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.span>
            </h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform your learning experience with AI companions that adapt
              to your style, making education feel like natural conversations
              with a brilliant friend.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <SignedOut>
              <SignInButton mode="modal">
                <motion.button
                  className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Start Learning Free</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId="button-bg"
                  />
                  <motion.div
                    className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500"
                    style={{ transform: "skewX(-20deg)" }}
                  />
                </motion.button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Link href="/dashboard">
                <motion.button
                  className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Go to Dashboard</span>
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>
            </SignedIn>

            <motion.div
              className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <Image
                src="/icons/science.svg"
                alt="AI Learning"
                width={24}
                height={24}
                className="opacity-70"
              />
              <div className="text-left">
                <div className="text-sm font-bold text-blue-600">
                  AI-Powered
                </div>
                <div className="text-xs text-gray-600">
                  Personalized Learning
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                icon: "/icons/science.svg",
                title: "Personalized Learning",
                description:
                  "AI companions adapt to your learning style and pace",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: "/icons/language.svg",
                title: "Natural Conversations",
                description:
                  "Learn through voice conversations that feel natural",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: "/icons/maths.svg",
                title: "Multiple Subjects",
                description: "From math to science, language to coding",
                color: "from-green-500 to-teal-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative p-6 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className="invert"
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <StatsCounter />

          {/* Learning Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-16 border border-blue-100 relative overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Experience Learning Like Never Before
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  See how ChatSage makes complex topics simple through natural
                  conversation. Our AI companions adapt to your learning pace
                  and style.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Voice Conversations
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    Adaptive Learning
                  </span>
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Instant Feedback
                  </span>
                </div>
              </div>
              <motion.div
                className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <Image
                    src="/images/conversation-demo.svg"
                    alt="Conversation Learning Interface"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                  <motion.div
                    className="absolute bottom-4 right-4 w-3 h-3 bg-green-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Live Conversation Learning
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Real-time voice interaction with AI tutors
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center relative"
          >
            {/* Background glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-3xl blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4"
                whileInView={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  background:
                    "linear-gradient(90deg, #1f2937, #3b82f6, #8b5cf6, #1f2937)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Ready to revolutionize your learning?
              </motion.h2>
              <p className="text-xl text-gray-700 mb-8 font-medium">
                Join thousands of students already learning smarter with
                ChatSage
              </p>

              <SignedOut>
                <SignInButton mode="modal">
                  <motion.button
                    className="group relative overflow-hidden px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl"
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      boxShadow: [
                        "0 20px 25px -5px rgba(147, 51, 234, 0.1)",
                        "0 20px 25px -5px rgba(147, 51, 234, 0.3)",
                        "0 20px 25px -5px rgba(147, 51, 234, 0.1)",
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started Now
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </span>
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      style={{ transform: "skewX(-20deg)" }}
                    />
                  </motion.button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <Link href="/dashboard">
                  <motion.button
                    className="group relative overflow-hidden px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl"
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Continue Learning
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </span>
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </Link>
              </SignedIn>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        className="relative z-10 mt-20 border-t border-gray-200 bg-white/80 backdrop-blur-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                className="flex items-center gap-2 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/images/logo.svg"
                  alt="ChatSage Logo"
                  width={32}
                  height={32}
                />
                <span className="text-xl font-bold text-gray-900">
                  ChatSage
                </span>
              </motion.div>
              <p className="text-gray-600 mb-4 max-w-md">
                Revolutionizing education through AI-powered conversations.
                Learn faster, retain more, and enjoy the journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2 text-gray-600">
                <motion.li
                  className="hover:text-gray-900 cursor-pointer transition-all duration-200"
                  whileHover={{ x: 5, color: "#1f2937" }}
                >
                  Features
                </motion.li>
                <motion.li
                  className="hover:text-gray-900 cursor-pointer transition-all duration-200"
                  whileHover={{ x: 5, color: "#1f2937" }}
                >
                  AI Companions
                </motion.li>
                <motion.li
                  className="hover:text-gray-900 cursor-pointer transition-all duration-200"
                  whileHover={{ x: 5, color: "#1f2937" }}
                >
                  Subjects
                </motion.li>
                <motion.li
                  className="hover:text-gray-900 cursor-pointer transition-all duration-200"
                  whileHover={{ x: 5, color: "#1f2937" }}
                >
                  Pricing
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <motion.li
                  className="hover:text-gray-900 cursor-pointer transition-all duration-200"
                  whileHover={{ x: 5, color: "#1f2937" }}
                >
                  Help Center
                </motion.li>
                <motion.li
                  className="hover:text-gray-900 cursor-pointer transition-all duration-200"
                  whileHover={{ x: 5, color: "#1f2937" }}
                >
                  Contact Us
                </motion.li>
                <motion.li
                  className="hover:text-gray-900 cursor-pointer transition-all duration-200"
                  whileHover={{ x: 5, color: "#1f2937" }}
                >
                  Privacy Policy
                </motion.li>
                <motion.li
                  className="hover:text-gray-900 cursor-pointer transition-all duration-200"
                  whileHover={{ x: 5, color: "#1f2937" }}
                >
                  Terms of Service
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.p
              className="text-gray-600 text-sm"
              whileHover={{ scale: 1.02 }}
            >
              © 2024 ChatSage. All rights reserved.
            </motion.p>
            <motion.p
              className="text-gray-600 text-sm mt-2 md:mt-0 flex items-center gap-1"
              whileHover={{ scale: 1.02 }}
            >
              Made with
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ❤️
              </motion.span>
              for learners worldwide
            </motion.p>
            <a
              href="https://www.linkedin.com/in/harshkumar-yadav-b10935371"
              target="_blank"
              rel="noopener noreferrer"
            >
              By Harshkumar Yadav
            </a>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default LandingPage;
