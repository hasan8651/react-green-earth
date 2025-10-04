
import PlantCard from "./PlantCard";

const PlantList = ({ plants, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default PlantList;