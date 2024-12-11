

const Details = async () => {
    function getRandomWholeNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1 * 1000)) + min;
      }


    await new Promise((resolve)=> setTimeout(resolve,getRandomWholeNumberInRange(3,7)))
  return (
    <>
    <h2 className="text-xl font-bold mb-2">This is the Title</h2>
      <p className="text-gray-600 mb-2">Channel name</p>
      <div className="text-gray-500 text-sm">
        153K Views . <span className="text-gray-400">6 months ago</span>
      </div>
      </>
  )
}

export default Details