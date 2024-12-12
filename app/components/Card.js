import Details from "./Details";
import { Suspense } from "react";


function getRandomWholeNumberInRange(min, max, mul) {
  if(mul) {
    return Math.floor(Math.random() * (max - min + 1 * mul)) + min;
  }
  else{return Math.floor(Math.random() * (max - min + 1)) + min;}
  
}


function Skeleton() {
  return (
<>
<div className="animate-pulse">
  <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
  <div className="h-6 w-1/2 bg-gray-200 rounded mb-2"></div>
  <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
</div>
      </>
  )
}

const Card =  () => {


  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6">
      <div className="h-60 w-full bg-gray-200 rounded-lg mb-4"></div>
      <Suspense fallback={<Skeleton/>}>
      <Details when={getRandomWholeNumberInRange(3,10)} num={getRandomWholeNumberInRange(3,10,1000)}/>
      </Suspense>
    </div>
  );
};

export default Card;
