import App from "../App";

const Category = ({ categories, active, onSelect }) => {
  return (
    <div className="grid grid-cols-1 border-4 border-amber-900 gap-4 p-2">
      <button 
        className={active === "All Trees" ? "active bg-amber-400" : ""} 
        onClick={() => onSelect(null, "All Trees")}
      >
        All Trees
      </button>
      {categories.map(cat => (
        <button 
          key={cat.id} 
          className={active === cat.category_name ? "active bg-amber-300" : ""} 
          onClick={() => onSelect(cat.id, cat.category_name)}
        >
          {cat.category_name}
        </button>
      ))}
    </div>
  );
};

export default Category;