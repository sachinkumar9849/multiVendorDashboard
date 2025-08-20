import { useState } from "react";
import { Search } from "lucide-react";

export default function CategoriesList() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories: string[] = [
    "Milks and Dairies",
    "Clothing & beauty",
    "Pet Toy",
    "Baking material",
    "Fresh Fruit",
    "Wines & Drinks",
    "Fresh Seafood",
    "Fast food",
    "Vegetables",
    "Bread and Juice",
    "Cake & Milk",
    "Coffee & Teas",
    "Pet Foods",
  ];

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  return (
    <div className="">
      {/* Search Input */}
      <div className="relative mb-3">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 text-gray-700 placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <Search className="absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
      </div>

      {/* Categories List */}
      <div className="space-y-4">
        {filteredCategories.map((category, index) => (
          <label
            style={{ fontSize: "14px" }}
            key={index}
            className="text[12px] flex cursor-pointer items-center rounded-md px-2 transition-colors hover:bg-gray-50"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryToggle(category)}
              className="h-3 w-3 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <span className="text[12px] ml-3 text-gray-700">{category}</span>
          </label>
        ))}
      </div>

      {/* No results message */}
      {filteredCategories.length === 0 && searchTerm && (
        <div className="py-8 text-center text-gray-500">
          No categories found matching {searchTerm}
        </div>
      )}

      {/* Selected categories count */}
      {selectedCategories.length > 0 && (
        <div className="mt-6 border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-600">
            {selectedCategories.length} categor
            {selectedCategories.length === 1 ? "y" : "ies"} selected
          </p>
        </div>
      )}
    </div>
  );
}
