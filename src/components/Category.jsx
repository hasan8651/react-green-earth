
const Category = ({ categories, active, onSelect }) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-2 font-semibold rounded-xl">
      <button 
        className={active === "All Trees" ? "active bg-[#15803D] py-2 text-white" : "bg-green-300 cursor-pointer py-2"}
        onClick={() => onSelect(null, "All Trees")}
      >
        All Trees
      </button>
      {categories.map(cat => (
        <button 
          key={cat.id} 
          className= {active === cat.category_name ? "active bg-[#15803D] py-2 text-white" : "bg-green-300 cursor-pointer py-2"} 
          onClick={() => onSelect(cat.id, cat.category_name)}
        >
          {cat.category_name}
        </button>
      ))}
    </div>
  );
};

export default Category;