import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Heart, MapPin, Phone, MessageSquare } from "lucide-react";
import { SelectedProduct } from "@/pages/Index";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const formSchema = z.object({
  customerName: z.string().trim().min(1, "Tên không được để trống").max(100),
  shippingAddress: z.string().trim().min(1, "Địa chỉ không được để trống").max(300),
  phoneNumber: z.string().trim().min(1, "Số điện thoại không được để trống").max(20),
  notes: z.string().max(500).optional(),
  selectedProduct: z.string().min(1, "Vui lòng chọn sản phẩm từ danh sách bên dưới"),
});

type FormData = z.infer<typeof formSchema>;

type OrderFormProps = {
  selectedProduct: SelectedProduct | null;
};

export default function OrderForm({ selectedProduct }: OrderFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [customerName, setCustomerName] = useState("");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerName: "",
      shippingAddress: "",
      phoneNumber: "",
      notes: "",
      selectedProduct: "",
    },
  });

  // Tự động cập nhật form khi selectedProduct thay đổi
  useEffect(() => {
    if (selectedProduct) {
      const productString = `${selectedProduct.storeName} > ${selectedProduct.categoryTitle} > ${selectedProduct.productName}`;
      form.setValue("selectedProduct", productString, { shouldValidate: true });
    }
  }, [selectedProduct, form]);

  const onSubmit = async (data: FormData) => {
    if (!selectedProduct) {
      toast.error("Vui lòng chọn sản phẩm từ danh sách bên dưới!");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from("orders").insert({
        customer_name: data.customerName,
        shipping_address: data.shippingAddress,
        phone_number: data.phoneNumber,
        notes: data.notes || null,
        selected_product: data.selectedProduct,
        product_id: selectedProduct.productId, // Thêm product_id
      });

      if (error) throw error;

      toast.success("Đơn hàng đã được gửi thành công!");
      
      // Hiển thị popup chúc mừng 20/10
      setCustomerName(data.customerName);
      setShowCongrats(true);
      form.reset();
      
    } catch (error) {
      console.error("Error submitting order:", error);
      toast.error("Có lỗi xảy ra. Vui lòng thử lại!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto  space-y-4">
      {/* Hiển thị sản phẩm đã chọn */}
      {selectedProduct && (
        <div className="sticky top-0 p-4 z-50 bg-white">
          <Card className="p-4 bg-card border-2 border-primary ">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                <img 
                  src={selectedProduct.productImage} 
                  alt={selectedProduct.productName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">{selectedProduct.storeName}</p>
                <p className="text-sm font-semibold text-foreground">{selectedProduct.productName}</p>
                <p className="text-sm font-bold text-primary">{selectedProduct.productPrice}</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 px-4">
          <FormField
            control={form.control}
            name="customerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-foreground">Tên...</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Heart className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="eg. Ngoc Quyen" 
                      className="pl-10 h-12 bg-card border-border rounded-2xl"
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="shippingAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-foreground">Địa chỉ nhận ship được</FormLabel>
                <FormControl>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="eg. Láng hạ,..." 
                      className="pl-10 h-12 bg-card border-border rounded-2xl"
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-foreground">Số điện thoại nhận ship</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="eg. 034..." 
                      className="pl-10 h-12 bg-card border-border rounded-2xl"
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-foreground">Ghi chú</FormLabel>
                <FormControl>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea 
                      placeholder="eg. đường đá, size SML các thứ, nếu biết quán nào ở gần thì note địa chỉ quán luôn nhée..." 
                      className="pl-10 min-h-[80px] bg-card border-border rounded-2xl resize-none"
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isSubmitting || !selectedProduct}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-medium transition-all disabled:opacity-50"
          >
            {isSubmitting ? "Đang gửi..." : "Nhận quà từ Hảiii"}
          </Button>
        </form>
      </Form>

      {/* Popup chúc mừng 20/10 */}
      <Dialog open={showCongrats} onOpenChange={setShowCongrats}>
        <DialogContent className="max-w-sm mx-auto rounded-3xl p-0 overflow-hidden border-0">
          <div className="bg-gradient-to-br from-pink-50 via-white to-rose-50 p-6">
            <DialogHeader className="space-y-4">
              <div className="flex justify-center gap-2 text-4xl">
                🌷 🌸 🌹 🌺 🌷
              </div>
              
              <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Chúc mừng 20-10! 🎉
              </DialogTitle>
            </DialogHeader>
            
            <div className="mt-6 space-y-4 text-center">
              <p className="text-sm text-gray-700 leading-relaxed">
                Chúc {customerName} xinh đẹp 20-10 tràn ngập niềm vui, luôn rạng rỡ và thành công trong mọi lĩnh vực. 
                Chúc luôn tươi trẻ, xinh tươi và gặt hái nhiều thành tựu trong cuộc sống! 🥰
                Quà sẽ sớm được gửi nhaaaa!!!!
              </p>
              
              <Button
                onClick={() => setShowCongrats(false)}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full py-6 text-base font-semibold shadow-lg"
              >
                From Ania with ❤️
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
