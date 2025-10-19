import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderForm from "@/components/OrderForm";
import ProductGrid from "@/components/ProductGrid";
import { menuData } from "@/data/menuData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Coffee, Package } from "lucide-react";

export type SelectedProduct = {
  productId: string;
  storeName: string;
  categoryTitle: string;
  productName: string;
  productPrice: string;
  productImage: string;
};

const Index = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null);
  const [selectedStore, setSelectedStore] = useState<string>("");

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary py-6 px-6 text-center">
        <h1 className="text-2xl font-serif italic text-primary-foreground">
          20-10 . Gift store . Ania.99
        </h1>
      </header>
      
      <main className="pb-8 relative">
        <OrderForm selectedProduct={selectedProduct} />
        {/* Dropdown chọn quán */}
        <div className="w-full max-w-md mx-auto px-6 mb-6">
          <label className="text-sm font-medium text-foreground mb-2 block">
            Chọn quán
          </label>
          <Select onValueChange={setSelectedStore} value={selectedStore}>
            <SelectTrigger className="h-12 bg-card border-border rounded-2xl">
              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Chọn quán nè" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {menuData.map((store) => (
                <SelectItem key={store.name} value={store.name}>
                  {store.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <ProductGrid 
          onProductSelect={setSelectedProduct} 
          selectedProduct={selectedProduct}
          selectedStore={selectedStore}
        />
      </main>
    </div>
  );
};

export default Index;
