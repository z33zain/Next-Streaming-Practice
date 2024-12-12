import React, { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';

// Utility Function for Random Delays and Values
function getRandomWholeNumberInRange(min, max, mul = 1) {
  // Use Math.random() to ensure different values on each server render
  return Math.floor(Math.random() * (max - min + 1 * mul)) + min;
}

// Async Components with Dynamic Server-Side Generation

// Title Component
async function TitleComponent() {
  // Disable static caching for this component
  noStore();
  
  const delay = getRandomWholeNumberInRange(1000, 3000);
  await new Promise(resolve => setTimeout(resolve, delay));
  
  return (
    <h2 className="text-xl font-bold mb-2">
      {`Video Title ${getRandomWholeNumberInRange(1, 1000)}`}
    </h2>
  );
}

// Title Skeleton
function TitleSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
    </div>
  );
}

// Channel Name Component
async function ChannelComponent() {
  // Disable static caching for this component
  noStore();
  
  const delay = getRandomWholeNumberInRange(1000, 3000);
  await new Promise(resolve => setTimeout(resolve, delay));
  
  return (
    <p className="text-gray-600 mb-2">
      {`Channel ${getRandomWholeNumberInRange(1, 100)}`}
    </p>
  );
}

// Channel Name Skeleton
function ChannelSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-5 w-1/2 bg-gray-200 rounded mb-2"></div>
    </div>
  );
}

// Metadata Component (Views and Time)
async function MetadataComponent() {
  // Disable static caching for this component
  noStore();
  
  const delay = getRandomWholeNumberInRange(1000, 3000);
  await new Promise(resolve => setTimeout(resolve, delay));
  
  const views = getRandomWholeNumberInRange(1, 999);
  const monthsAgo = getRandomWholeNumberInRange(1, 12);
  
  return (
    <div className="text-gray-500 text-sm">
      {views}K Views . <span className="text-gray-400">{monthsAgo} months ago</span>
    </div>
  );
}

// Metadata Skeleton
function MetadataSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
    </div>
  );
}

// Card Component
export default function Card() {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6">
      <div className="h-60 w-full bg-gray-200 rounded-lg mb-4"></div>
      
      <Suspense fallback={<TitleSkeleton />}>
        <TitleComponent />
      </Suspense>
      
      <Suspense fallback={<ChannelSkeleton />}>
        <ChannelComponent />
      </Suspense>
      
      <Suspense fallback={<MetadataSkeleton />}>
        <MetadataComponent />
      </Suspense>
    </div>
  );
}