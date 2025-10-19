import chocolateFreeze from "@/assets/chocolate-freeze.jpg";

const products = [
  { name: "Freeze Sô-cô-la", image: chocolateFreeze },
  { name: "Freeze Sô-cô-la", image: chocolateFreeze },
  { name: "Freeze Sô-cô-la", image: chocolateFreeze },
  { name: "Freeze Sô-cô-la", image: chocolateFreeze },
  { name: "Freeze Sô-cô-la", image: chocolateFreeze },
  { name: "Freeze Sô-cô-la", image: chocolateFreeze },
];

export default function ProductGrid() {
  return (
    <div className="w-full max-w-md mx-auto px-6 pb-8">
      <div className="grid grid-cols-3 gap-3">
        {products.map((product, index) => (
          <div 
            key={index}
            className="bg-card rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-square mb-2 overflow-hidden rounded-xl">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-center font-medium text-foreground">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
