

const Details = async ( {when, num, views} ) => {
    

    await new Promise((resolve)=> setTimeout(resolve, num))
  return (
    <>
    <h2 className="text-xl font-bold mb-2">This is the Title</h2>
      <p className="text-gray-600 mb-2">Channel name</p>
      <div className="text-gray-500 text-sm">
        {views}K Views . <span className="text-gray-400">{when} months ago</span>
      </div>
      </>
  )
}

export default Details