/* eslint-disable no-unused-vars */
import React from 'react';
import { Truck, BadgeDollarSign, ShieldCheck } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="bg-[#f5f2ea] py-12 px-6 md:px-20 rounded-xl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-teal-900 mb-4">About E-Shop</h2>
        <p className="text-gray-700 text-lg mb-6">
          At <span className="font-semibold text-teal-700">E-Shop</span>, we believe shopping should be seamless, enjoyable, and empowering.
          Our mission is to provide a curated selection of high-quality products across categories — combining convenience, reliability, and exceptional value.
        </p>
        <p className="text-gray-700 text-lg mb-12">
          Whether you&lsquo;re looking for fashion, electronics, home essentials, or wellness products — every item in our collection is selected with care to enrich your lifestyle.
          E-Shop merges technology with trust to bring you an experience that’s smooth, secure, and satisfying.
        </p>

        {/* Why Choose Us */}
        <h3 className="text-2xl font-semibold text-teal-900 mb-8">Why Choose E-Shop</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#fefcf7] p-6 rounded-lg border border-gray-300 shadow-sm">
            <div className="flex items-center mb-4">
              <ShieldCheck className="text-green-600 mr-2" />
              <h4 className="text-lg font-semibold text-gray-800">Top-Notch Quality</h4>
            </div>
            <p className="text-gray-600">
              We partner with trusted brands and verified sellers to ensure product authenticity and satisfaction.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fefcf7] p-6 rounded-lg border border-gray-300 shadow-sm">
            <div className="flex items-center mb-4">
              <BadgeDollarSign className="text-yellow-500 mr-2" />
              <h4 className="text-lg font-semibold text-gray-800">Competitive Pricing</h4>
            </div>
            <p className="text-gray-600">
              Get the best value for your money with exclusive deals, seasonal sales, and daily discounts.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fefcf7] p-6 rounded-lg border border-gray-300 shadow-sm">
            <div className="flex items-center mb-4">
              <Truck className="text-orange-500 mr-2" />
              <h4 className="text-lg font-semibold text-gray-800">Fast & Reliable Delivery</h4>
            </div>
            <p className="text-gray-600">
              Our logistics network ensures prompt and safe delivery — because you shouldn’t have to wait.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
