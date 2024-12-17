import React from "react";

const AdminPanel = () => {
  const handleUpdatePrices = () => {
    alert("Price settings updated! (This is just a placeholder action.)");
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center mb-4">Admin Panel</h2>
      <p className="text-gray-600 text-center mb-6">
        Comming Soon
      </p>
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
  );
};

export default AdminPanel;




