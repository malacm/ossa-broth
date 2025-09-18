"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function BrothPage() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
       <section
         className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
         style={{
           backgroundImage: "url('/stock-bg.jpg')",
         }}
       >
        <div className="relative h-full w-full">
          {/* Animated Background Text Band */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Left band - vertical on desktop, horizontal on mobile */}
            <motion.div
              animate={{ 
                y: [0, "-50%"],
                x: [0, "-50%"]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-8 top-0 text-4xl sm:text-6xl md:text-7xl font-black whitespace-nowrap px-4 py-2 rounded-lg md:block hidden"
              style={{
                color: "#442727",
                backgroundColor: "rgba(233, 231, 217, 0.9)",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              OSSA BROTH • OSSA BROTH • OSSA BROTH • OSSA BROTH • OSSA BROTH •
              OSSA BROTH • OSSA BROTH • OSSA BROTH •
            </motion.div>
            {/* Right band - vertical on desktop, horizontal on mobile */}
            <motion.div
              animate={{ 
                y: ["-50%", 0],
                x: [0, "-50%"]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute right-8 top-0 text-4xl sm:text-6xl md:text-7xl font-black whitespace-nowrap px-4 py-2 rounded-lg md:block hidden"
              style={{
                color: "#442727",
                backgroundColor: "rgba(233, 231, 217, 0.9)",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              OSSA BROTH • OSSA BROTH • OSSA BROTH • OSSA BROTH • OSSA BROTH •
              OSSA BROTH • OSSA BROTH • OSSA BROTH •
            </motion.div>
            {/* Mobile horizontal band - top */}
            <motion.div
              animate={{ x: [0, "-50%"] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-8 left-0 text-4xl font-black whitespace-nowrap px-4 py-2 rounded-lg md:hidden block"
              style={{
                color: "#442727",
                backgroundColor: "rgba(233, 231, 217, 0.9)",
              }}
            >
              OSSA BROTH • OSSA BROTH • OSSA BROTH • OSSA BROTH • OSSA BROTH •
              OSSA BROTH • OSSA BROTH • OSSA BROTH •
            </motion.div>
            {/* Mobile horizontal band - bottom */}
            <motion.div
              animate={{ x: ["-50%", 0] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-8 left-0 text-4xl font-black whitespace-nowrap px-4 py-2 rounded-lg md:hidden block"
              style={{
                color: "#442727",
                backgroundColor: "rgba(233, 231, 217, 0.9)",
              }}
            >
              OSSA BROTH • OSSA BROTH • OSSA BROTH • OSSA BROTH • OSSA BROTH •
              OSSA BROTH • OSSA BROTH • OSSA BROTH •
            </motion.div>
          </div>

          {/* Product Image - Centered */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              initial={{ opacity: 0, y: 100, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.8,
                type: "spring",
                damping: 20,
                stiffness: 100,
              }}
              className="relative"
            >
              {/* OSSA BROTH Product Image */}
              <motion.div
                className="w-[400px] h-[500px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[700px] lg:w-[700px] lg:h-[800px] xl:w-[1000px] xl:h-[1100px]"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2, // Start levitating after initial reveal completes
                }}
              >
                <Image
                  src="/ossa-broth.png"
                  alt="OSSA BROTH - Premium Medicinal Bone Broth in Mason Jar"
                  width={800}
                  height={900}
                  className="w-full h-full object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Order Now Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.5,
            }}
            className="absolute bottom-16 md:bottom-16 bottom-32 left-1/2 -translate-x-1/2 z-20"
          >
            <div className="text-center">
              <motion.button
                onClick={() => setIsOrderModalOpen(true)}
                className="px-8 py-4 rounded-2xl font-bold text-white shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer"
                style={{ backgroundColor: "#E9E7D9" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(233, 231, 217, 0.8)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#E9E7D9";
                }}
              >
                <div className="text-base md:text-xl mb-1 text-[#442727]">ORDER NOW</div>
                <div className="text-sm opacity-90 text-[#442727]">$15/JAR</div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section
        className="py-20 px-8 md:px-16"
        style={{ backgroundColor: "#D2C6B2" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "#442727" }}
            >
              Pure Ingredients
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "#442727" }}
            >
              Crafted with the finest, all-natural ingredients sourced from
              trusted suppliers. Our broth is made with love and care, using
              traditional methods passed down through generations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              "Organic Grass-Fed Beef Bones",
              "Fresh Vegetables & Herbs",
              "Natural Sea Salt",
              "Black Pepper",
              "Bay Leaves",
              "Garlic & Onion",
              "Celery & Carrots",
              "Fresh Thyme",
              "Rosemary",
            ].map((ingredient, index) => (
              <motion.div
                key={ingredient}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                style={{ backgroundColor: "#E9E7D9" }}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: "#927D14" }}
                  ></div>
                  <span className="font-medium" style={{ color: "#442727" }}>
                    {ingredient}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-20 px-8 md:px-16"
        style={{ backgroundColor: "#E9E7D9" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "#442727" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-xl" style={{ color: "#442727" }}>
              Everything you need to know about our premium bone broth
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                question:
                  "What makes OSSA Broth different from store-bought broth?",
                answer:
                  "Our broth is simmered for 24+ hours using traditional methods, extracting maximum collagen and nutrients from grass-fed beef bones. Unlike store-bought versions, we use no preservatives, artificial flavors, or fillers - just pure, natural ingredients.",
              },
              {
                question: "How long does the broth stay fresh?",
                answer:
                  "When refrigerated, our broth stays fresh for up to 7 days. For longer storage, you can freeze it for up to 6 months. Always check for any off odors or changes in appearance before consuming.",
              },
              {
                question: "Can I drink this broth daily?",
                answer:
                  "Absolutely! Our bone broth is rich in collagen, amino acids, and minerals that support joint health, gut health, and overall wellness. Many people enjoy a warm cup daily as part of their wellness routine.",
              },
              {
                question:
                  "Is this suitable for people with dietary restrictions?",
                answer:
                  "Our broth is gluten-free, dairy-free, and contains no added sugars. However, it does contain beef, so it's not suitable for vegetarians or vegans. Always check with your healthcare provider if you have specific dietary concerns.",
              },
              {
                question: "How should I heat and serve the broth?",
                answer:
                  "Gently heat the broth on the stove or in a microwave until warm (not boiling). You can drink it plain, add herbs and spices, or use it as a base for soups, stews, and sauces. The collagen content makes it naturally thicken when cooled.",
              },
              {
                question: "Where do you source your ingredients?",
                answer:
                  "We source our beef bones from local, grass-fed farms that practice sustainable and ethical farming. All vegetables and herbs are organic and locally sourced when possible, ensuring the highest quality and freshness.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FAQItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Forms Section */}
      <section
        className="py-20 px-8 md:px-16"
        style={{ backgroundColor: "#D2C6B2" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "#442727" }}
            >
              Get In Touch
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "#442727" }}
            >
              Ready to experience the benefits of our premium bone broth? Place
              an order or reach out with any questions.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto">
            {/* Order Button */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              onClick={() => setIsOrderModalOpen(true)}
              className="flex-1 py-6 px-8 rounded-2xl font-semibold text-white transition-all duration-200 hover:scale-105 shadow-lg cursor-pointer"
              style={{ backgroundColor: "#442727" }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Place an Order</h3>
                <p className="text-sm opacity-90">
                  Ready to order our premium bone broth?
                </p>
              </div>
            </motion.button>

            {/* Inquiry Button */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              onClick={() => setIsInquiryModalOpen(true)}
              className="flex-1 py-6 px-8 rounded-2xl font-semibold text-white transition-all duration-200 hover:scale-105 shadow-lg cursor-pointer"
              style={{ backgroundColor: "#442727" }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Send Inquiry</h3>
                <p className="text-sm opacity-90">
                  Interested in a larger order or subscription? Reach out!
                </p>
              </div>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {isOrderModalOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setIsOrderModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold" style={{ color: "#442727" }}>
                  Place an Order
                </h2>
                <button
                  onClick={() => setIsOrderModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form action="/api/order" method="POST" className="space-y-4">
                <div>
                  <label
                    htmlFor="modal-order-name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#442727" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="modal-order-name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 transition-colors placeholder-gray-600 text-black"
                    style={{
                      focusRingColor: "#927D14",
                      borderColor: "#D2C6B2",
                    }}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="modal-order-email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#442727" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="modal-order-email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 transition-colors placeholder-gray-600 text-black"
                    style={{
                      focusRingColor: "#927D14",
                      borderColor: "#D2C6B2",
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="modal-order-quantity"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#442727" }}
                  >
                    Quantity
                  </label>
                  <select
                    id="modal-order-quantity"
                    name="quantity"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 transition-colors text-black"
                    style={{
                      focusRingColor: "#927D14",
                      borderColor: "#D2C6B2",
                    }}
                  >
                    <option value="">Select quantity</option>
                    <option value="1">1 bottle</option>
                    <option value="2">2 bottles</option>
                    <option value="3">3 bottles</option>
                    <option value="4">4 bottles</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsOrderModalOpen(false)}
                    className="flex-1 py-3 px-6 rounded-lg font-semibold border-2 transition-colors duration-200 cursor-pointer"
                    style={{
                      borderColor: "#442727",
                      color: "#442727",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#442727";
                      e.target.style.color = "#E9E7D9";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#442727";
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 px-6 rounded-lg font-semibold text-white transition-colors duration-200 cursor-pointer"
                    style={{ backgroundColor: "#927D14" }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#442727";
                      e.target.style.color = "#E9E7D9";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#927D14";
                      e.target.style.color = "white";
                    }}
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}

      {/* Inquiry Modal */}
      {isInquiryModalOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setIsInquiryModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold" style={{ color: "#442727" }}>
                  Send Inquiry
                </h2>
                <button
                  onClick={() => setIsInquiryModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form action="/api/inquiry" method="POST" className="space-y-4">
                <div>
                  <label
                    htmlFor="modal-inquiry-name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#442727" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="modal-inquiry-name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 transition-colors placeholder-gray-600 text-black"
                    style={{
                      focusRingColor: "#927D14",
                      borderColor: "#D2C6B2",
                    }}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="modal-inquiry-email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#442727" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="modal-inquiry-email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 transition-colors placeholder-gray-600 text-black"
                    style={{
                      focusRingColor: "#927D14",
                      borderColor: "#D2C6B2",
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="modal-inquiry-type"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#442727" }}
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="modal-inquiry-type"
                    name="inquiryType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 transition-colors text-black"
                    style={{
                      focusRingColor: "#927D14",
                      borderColor: "#D2C6B2",
                    }}
                  >
                    <option value="">Select inquiry type</option>
                    <option value="batch-order">Batch Order</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="general">General Question</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="modal-inquiry-message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#442727" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="modal-inquiry-message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 transition-colors resize-none placeholder-gray-600 text-black"
                    style={{
                      focusRingColor: "#927D14",
                      borderColor: "#D2C6B2",
                    }}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsInquiryModalOpen(false)}
                    className="flex-1 py-3 px-6 rounded-lg font-semibold border-2 transition-colors duration-200 cursor-pointer"
                    style={{
                      borderColor: "#442727",
                      color: "#442727",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#927D14";
                      e.target.style.color = "#442727";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#442727";
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 px-6 rounded-lg font-semibold text-white transition-colors duration-200 cursor-pointer"
                    style={{ backgroundColor: "#442727" }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#927D14";
                      e.target.style.color = "#442727";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#442727";
                      e.target.style.color = "white";
                    }}
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

// FAQ Accordion Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-6 cursor-pointer select-none hover:bg-gray-50 transition-colors duration-200 text-left"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 pr-4">
              {question}
            </h3>
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-gray-500"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </motion.div>
          </div>
        </button>

        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="overflow-hidden"
        >
          <motion.div
            className="px-6 pb-6 text-gray-600 leading-relaxed"
            initial={{ y: -10 }}
            animate={{ y: isOpen ? 0 : -10 }}
            transition={{
              duration: 0.3,
              delay: isOpen ? 0.1 : 0,
            }}
          >
            {answer}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
