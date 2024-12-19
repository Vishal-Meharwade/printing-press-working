import React from "react";

const AdminPanel = () => {
  const handleUpdatePrices = () => {
    alert("Price settings updated! (This is just a placeholder action.)");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-stone-100 to-stone-200 py-12 px-4 sm:px-6 lg:px-8">
      {/* Admin Panel */}
      <div className="z-10 p-8 max-w-lg mx-auto bg-black border rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-center top-5 mb-4 text-white">
          Admin Panel
        </h2>
        <p className="text-gray-300 text-center mb-6">Coming Soon</p>
        <div className="space-y-4">
          <button
            onClick={handleUpdatePrices}
            className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200"
          >
            Update Price Settings
          </button>
          <button
            onClick={() => alert("Log out clicked!")}
            className="w-full py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
