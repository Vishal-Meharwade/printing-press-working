import React, { useState } from "react";
import { motion } from "framer-motion";

const MulticolorSection = () => {
  const [formData, setFormData] = useState({
    partyName: "",
    phone: "",
    size: "",
    quantity: "",
    gsm: "",
    lamination: "Yes",
    laminationType: "",
    laminationSides: "",
    creasing: "", // Changed to allow any custom input for creasing
    design: "", // Design input
  });

  const [loading, setLoading] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState(null);

  // Pricing Configuration
  const PRICE_CONFIG = {
    sizes: {
      "15*20": {
        "90 GSM": 2.1,
        "130 GSM": 3.15,
        "170 GSM": 3.75,
        "210 GSM": 4.5,
        "250 GSM": 5.3,
        "300 GSM": 6,
        "Maplitho 70 GSM": 2,
        "Maplitho 80 GSM": 2.5,
        "Maplitho 90 GSM": 3,
        Sticker: 9.5,
        lamination: {
          Gloss: 2,
          Matt: 2.75,
        },
      },
      "18*23": {
        "90 GSM": 2.3,
        "130 GSM": 3.9,
        "170 GSM": 4.75,
        "210 GSM": 5.8,
        "250 GSM": 6.9,
        "300 GSM": 7.75,
        "Maplitho 70 GSM": 2,
        "Maplitho 80 GSM": 2.5,
        "Maplitho 90 GSM": 3,
        Sticker: 11.5,
        lamination: {
          Gloss: 3.25,
          Matt: 4,
        },
      },
    },
  };

  const calculatePrice = () => {
    setLoading(true);

    setTimeout(() => {
      const sizeData = PRICE_CONFIG.sizes[formData.size] || {};
      const gsmPrice = sizeData[formData.gsm] || 0;
      const laminationPrice =
        formData.lamination === "Yes"
          ? (sizeData.lamination?.[formData.laminationType] || 0) *
            (formData.laminationSides === "Both Sides" ? 2 : 1)
          : 0;
      const quantity = parseInt(formData.quantity, 10) || 0;

      // Design price based on quantity
      // let designPrice = 0;

      // if(quantity >= 1 && quantity <= 1000) designPrice = 2500;

      // if(quantity >= 1001 && quantity <= 2000) designPrice = 3500;

      // if(quantity >= 2001 && quantity <= 3000) designPrice = 4500;

      // if(quantity >= 3001 && quantity <= 4000) designPrice = 5500;

      // if(quantity >= 4001 && quantity <= 5000) designPrice = 6500;
      // if(quantity >= 5001 && quantity <= 6000) designPrice = 7500;
      // if(quantity >= 6001 && quantity <= 7000) designPrice = 8500;

      let designPrice = 0;
      const pricePerRange = 1000; // Price increases every 1000 units
      const basePrice = 2500; // Starting price for the first range

      // Calculate the design price based on quantity ranges
      if (quantity >= 1) {
        const priceIndex = Math.min(
          Math.floor((quantity - 1) / pricePerRange),
          6
        ); // Max index for 6000 quantity (0-based, so max 6)
        designPrice = basePrice + priceIndex * 1000;
      }






      // if (quantity <= 1000 && quantity > 0) designPrice = 2500;
      // else if (quantity >= 1001 && quantity <= 2000) designPrice = 3500;
      // else if (quantity <= 3000) designPrice = 4500;
      // else if (quantity > 3000)
      //   designPrice = Math.ceil((quantity - 3000) / 1000) * 1000 + 4500;

      
      let customDesignAmount = parseFloat(formData.design) || 0;
      designPrice += customDesignAmount;


      // Creasing price (custom input value is added directly)
      let creasingPrice = 0;
      if (formData.creasing && !isNaN(formData.creasing)) {
        creasingPrice = parseInt(formData.creasing, 10) || 0;
      }      


      // let designPrice = 0;

      const totalPrice =
        gsmPrice * quantity +
        laminationPrice * quantity +
        creasingPrice +
        designPrice;

      setCalculatedPrice(totalPrice || "N/A");
      setLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden"
      >
        <div className="p-8">
          <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-8">
            Multicolor Printing Price Calculator
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Party Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Party Name
              </label>
              <input
                type="text"
                name="partyName"
                value={formData.partyName}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                maxLength="10"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Size
              </label>
              <select
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select Size</option>
                <option value="15*20">15*20</option>
                <option value="18*23">18*23</option>
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* GSM */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                GSM
              </label>
              <select
                name="gsm"
                value={formData.gsm}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select GSM</option>
                <option value="90 GSM">90 GSM</option>
                <option value="130 GSM">130 GSM</option>
                <option value="170 GSM">170 GSM</option>
                <option value="210 GSM">210 GSM</option>
                <option value="250 GSM">250 GSM</option>
                <option value="300 GSM">300 GSM</option>
                <option value="Maplitho 70 GSM">Maplitho 70 GSM</option>
                <option value="Maplitho 80 GSM">Maplitho 80 GSM</option>
                <option value="Maplitho 90 GSM">Maplitho 90 GSM</option>
                <option value="Sticker">Sticker</option>
              </select>
            </div>

            {/* Lamination */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Lamination
              </label>
              <select
                name="lamination"
                value={formData.lamination}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
              {formData.lamination === "Yes" && (
                <>
                  <select
                    name="laminationType"
                    value={formData.laminationType}
                    onChange={handleChange}
                    className="mt-2 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Lamination Type</option>
                    <option value="Gloss">Gloss</option>
                    <option value="Matt">Matt</option>
                  </select>
                  <select
                    name="laminationSides"
                    value={formData.laminationSides}
                    onChange={handleChange}
                    className="mt-2 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Lamination Sides</option>
                    <option value="Single Side">Single Side</option>
                    <option value="Both Sides">Both Sides</option>
                  </select>
                </>
              )}
            </div>

            {/* Creasing */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Creasing (Enter Amount)
              </label>
              <input
                type="text"
                name="creasing"
                value={formData.creasing}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Design */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Design (Enter Amount)
              </label>
              <input
                type="text"
                name="design"
                value={formData.design}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={calculatePrice}
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {loading ? "Calculating..." : "Calculate Price"}
            </button>
          </div>

          {calculatedPrice !== null && (
            <div className="mt-8 text-center">
              <p className="text-xl font-bold text-green-600">
                Total Price: ₹{calculatedPrice}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default MulticolorSection;






