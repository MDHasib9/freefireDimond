import { useState } from "react";

const DIAMONDS = [
  { value: " 100 Diamonds", price: 40 },
  { value: "700 Diamonds", price: 300 },
  { value: "90000 Diamonds", price: 600 },
  { value: "6700 Diamonds", price: 800 },
  { value: "monthly Membership", price: 800 },
];

export default function Hero() {
  const [selectedDiamond, setSelectedDiamond] = useState(100);
  const [quantity, setQuantity] = useState(1);
  const [playerId, setPlayerId] = useState("");

  return (
    <section className="bg-white py-12 mt-60">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT IMAGE */}
        <div className="w-full">
          <img
            src="sideImage.webp"
            alt="Free Fire Top-Up Event"
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Free Fire New Top-Up Event: No Sweat
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">{"★★★★★"}</div>
            <span className="text-sm text-gray-500">
              (12342 customer reviews)
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            Event Date: <span className="font-medium">30 Jan – 22 Feb</span>
          </p>

          {/* Diamond Selection */}
          <div className="mb-6">
            <p className="font-semibold mb-2">
              Choose Diamond :{" "}
              <span className=" text-blue-700 font-bold">
                {selectedDiamond} Diamonds
              </span>
            </p>
            <div className="flex flex-wrap gap-3">
              {DIAMONDS.map((d) => (
                <button
                  key={d.value}
                  onClick={() => setSelectedDiamond(d.value)}
                  className={`px-4 py-2 border rounded-md text-sm font-medium transition
                    ${
                      selectedDiamond === d.value
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-blue-500"
                    }`}
                >
                  {d.value}
                </button>
              ))}
            </div>
            <div className="mt-20 flex text-2xl font-bold ">
              
              Price: ৳ 
              
              {DIAMONDS.find((d) => d.value === selectedDiamond)?.price || 0}
            </div>
          </div>

          {/* Player ID */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">
              Player ID / UID <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={playerId}
              onChange={(e) => setPlayerId(e.target.value)}
              placeholder="গেমের Player ID/UID লিখুন"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Quantity + Actions */}
          <div className="flex items-center gap-4 mb-6">
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-20 px-3 py-2 border rounded-md text-center"
            />

            <button className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>

          <button className="w-full py-3 bg-blue-400 text-white font-semibold rounded-md hover:bg-blue-500 transition">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
