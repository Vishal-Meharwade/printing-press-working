import React, { useState } from "react";
import { motion } from "framer-motion";

const PrintingSection = () => {
  const [formData, setFormData] = useState({
    partyName: "",
    phone: "",
    size: "",
    quantity: "",
    paperType1: "",
    paperType2: "",
    paperType3: "",
    paperType4: "",
    dtpColor: "Single Color",
    miscellaneousPrice: 0,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState(null);

  // Pricing Configuration
  const PRICE_CONFIG = {
    paperPrices: {
      Maplitho: 3,
      SPB: 2.5,
      GVG: 1.65,
      "7.2KG White": 2.5,
    },
    dtpCharges: {
      "Single Color": 350,
      "Double Color": 550,
    },
    sizes: {
      "1/2 - A3": 2,
      "1/4 - A4": 4,
      "1/5 - A5": 5,
      "1/6": 6,
      "1/8": 8,
    },
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.partyName) {
      newErrors.partyName = "Party Name is required";
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculatePrice = () => {
    if (!validateForm()) return;

    setLoading(true);

    setTimeout(() => {
      let totalPrice = 0;

      const paperTypes = [
        formData.paperType1,
        formData.paperType2,
        formData.paperType3,
        formData.paperType4,
      ].filter((type) => type);

      const quantity = parseInt(formData.quantity) || 0;
      const sizeFactor = formData.size ? PRICE_CONFIG.sizes[formData.size] : 1;

      // Calculate paper price
      const paperPrice = paperTypes.reduce((total, type) => {
        const sheetsRequired = Math.ceil(quantity / sizeFactor);
        const pricePerSheet = PRICE_CONFIG.paperPrices[type] || 0;
        return total + sheetsRequired * pricePerSheet;
      }, 0);

      // DTP Charges
      const dtpCharges = PRICE_CONFIG.dtpCharges[formData.dtpColor] || 0;

      // Calculate Total Price
      totalPrice = Math.round(
        paperPrice + dtpCharges + (parseInt(formData.miscellaneousPrice) || 0)
      );

      setCalculatedPrice(totalPrice);
      setLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden"
      >
        <div className="p-5">
          <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-8">
            Printing Price Calculator
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
                className={`mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  errors.partyName ? "border-red-500" : ""
                }`}
              />
              {errors.partyName && (
                <p className="mt-1 text-sm text-red-600">{errors.partyName}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                // maxLength="10"
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
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
                className={`mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500`}
              >
                <option value="">Select Size</option>
                <option value="1/2 - A3">1/2 - A3</option>
                <option value="1/4 - A4">1/4 - A4</option>
                <option value="1/5 - A5">1/5 - A5</option>
                <option value="1/6">1/6</option>
                <option value="1/8">1/8</option>
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
                placeholder="Enter Quantity"
                className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Paper Types */}
            {Array.from({ length: 4 }, (_, i) => (
              <div key={`paperType${i + 1}`}>
                <label className="block text-sm font-medium text-gray-700">
                  Paper Type {i + 1}
                </label>
                <select
                  name={`paperType${i + 1}`}
                  value={formData[`paperType${i + 1}`]}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select Paper Type</option>
                  <option value="Maplitho">Maplitho</option>
                  <option value="SPB">SPB</option>
                  <option value="GVG">GVG</option>
                  <option value="7.2KG White">7.2KG White</option>
                </select>
              </div>
            ))}

            {/* DTP Color */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                DTP Color
              </label>
              <select
                name="dtpColor"
                value={formData.dtpColor}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="Single Color">Single Color</option>
                <option value="Double Color">Double Color</option>
              </select>
            </div>

            {/* Miscellaneous Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Miscellaneous Price
              </label>
              <input
                type="number"
                name="miscellaneousPrice"
                value={formData.miscellaneousPrice}
                onChange={handleChange}
                placeholder="Enter Miscellaneous Price"
                className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={calculatePrice}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              disabled={loading}
            >
              {loading ? "Calculating..." : "Calculate Price"}
            </button>
          </div>

          {calculatedPrice !== null && (
            <div className="mt-8 bg-green-100 text-green-800 p-4 rounded-md text-center font-bold">
              Total Price: ₹{calculatedPrice}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PrintingSection;
