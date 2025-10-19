import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import OrderForm from "@/components/OrderForm";
import ProductGrid from "@/components/ProductGrid";
import { menuData } from "@/data/menuData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Coffee, Package, Volume2, VolumeX } from "lucide-react";

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
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Auto-play music on mount
  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/background-music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.8; // Set volume to 30%

    // Try to autoplay (might be blocked by browser)
    const playPromise = audioRef.current.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMusicPlaying(true);
        })
        .catch((error) => {
          console.log("Autoplay prevented:", error);
          // Autoplay was prevented, user needs to interact first
          setIsMusicPlaying(false);
        });
    }

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        audioRef.current.play();
        setIsMusicPlaying(true);
      }
    }
  };

  const playAudioOnInteraction = () => {
    setTimeout(() => {
      if (audioRef.current && !isMusicPlaying) {
        audioRef.current.play();
        setIsMusicPlaying(true);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background" onClick={playAudioOnInteraction}>
      {/* Music toggle button - Fixed top right */}
      <Button
        onClick={toggleMusic}
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 z-50 rounded-full shadow-lg bg-white/90 backdrop-blur-sm hover:bg-white/95 !size-6"
        title={isMusicPlaying ? "Tắt nhạc" : "Bật nhạc"}
      >
        {isMusicPlaying ? (
          <Volume2 className="h-2.5 w-2.5 text-primary" />
        ) : (
          <VolumeX className="h-2.5 w-2.5 text-muted-foreground" />
        )}
      </Button>

      <header className="bg-primary py-6 px-6 text-center">
        <h1 className="text-2xl font-serif italic text-primary-foreground">
          20-10 . Gift store . Ania.99
        </h1>
      </header>
      
      <main className="pb-8 relative">
        <OrderForm selectedProduct={selectedProduct} />
        {/* Dropdown chọn quán */}
        <div className="w-full max-w-md mx-auto px-4 mb-6 mt-4">
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
