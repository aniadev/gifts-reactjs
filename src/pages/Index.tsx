import OrderForm from "@/components/OrderForm";
import ProductGrid from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary py-6 px-6 text-center">
        <h1 className="text-2xl font-serif italic text-primary-foreground">
          20-10 . Gift store . Ania.99
        </h1>
      </header>
      
      <main className="py-8">
        <OrderForm />
        <ProductGrid />
      </main>
    </div>
  );
};

export default Index;
