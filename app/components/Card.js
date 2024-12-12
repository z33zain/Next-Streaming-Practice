import React, { Suspense } from "react";

// Utility Function
function getRandomWholeNumberInRange(min, max, mul = 1, views = 0) {
  if (mul) {
    return Math.floor(Math.random() * (max - min + 1 * mul)) + min;
  }
  if (views) {
    return Math.floor(Math.random() * (max - min * views)) + min;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Async Details Component
const Details = async ({ when, num, views }) => {
  await new Promise((resolve) => setTimeout(resolve, num));

  return (
    <>
      <h2 className="text-xl font-bold mb-2">This is the Title</h2>
      <p className="text-gray-600 mb-2">Channel name</p>
      <div className="text-gray-500 text-sm">
        {views}K Views . <span className="text-gray-400">{when} months ago</span>
      </div>
    </>
  );
};

// Skeleton Component
function Skeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
      <div className="h-6 w-1/2 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
    </div>
  );
}

// Card Component
const Card = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6">
      <div className="h-60 w-full bg-gray-200 rounded-lg mb-4"></div>
      <Suspense fallback={<Skeleton />}>
        {/* Pass dynamic props */}
        <Details
          when={getRandomWholeNumberInRange(3, 10)}
          num={getRandomWholeNumberInRange(3, 10, 1000)}
          views={getRandomWholeNumberInRange(1, 1, 1000)}
        />
      </Suspense>
    </div>
  );
};

export default Card;
