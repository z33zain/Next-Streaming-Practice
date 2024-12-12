import Card from "./components/Card";

export const metadata = {
  title: "Hello Home",
  description: "Hi Dev"
}


const Page = () => {
  // Array of 18 items to map over
  const cards = new Array(18).fill(null);
 

  return (
   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {cards.map((_, index) => (
          <Card key={index} />
        ))}
      </div>
 
  );
};

export default Page;
