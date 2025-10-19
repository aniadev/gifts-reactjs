import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Heart, MapPin, Phone, MessageSquare, Coffee } from "lucide-react";

const formSchema = z.object({
  customerName: z.string().trim().min(1, "Tên không được để trống").max(100),
  shippingAddress: z.string().trim().min(1, "Địa chỉ không được để trống").max(300),
  phoneNumber: z.string().trim().min(1, "Số điện thoại không được để trống").max(20),
  notes: z.string().max(500).optional(),
  selectedProduct: z.string().min(1, "Vui lòng chọn sản phẩm"),
});

type FormData = z.infer<typeof formSchema>;

const products = [
  "Freeze Sô-cô-la",
  "Freeze Trà Xanh", 
  "Freeze Caramel",
  "Freeze Dâu",
  "Freeze Vanilla",
  "Freeze Matcha",
];

export default function OrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from("orders").insert({
        customer_name: data.customerName,
        shipping_address: data.shippingAddress,
        phone_number: data.phoneNumber,
        notes: data.notes || null,
        selected_product: data.selectedProduct,
      });

      if (error) throw error;

      toast.success("Đơn hàng đã được gửi thành công!");
      form.reset();
    } catch (error) {
      console.error("Error submitting order:", error);
      toast.error("Có lỗi xảy ra. Vui lòng thử lại!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
                      placeholder="eg. Làng hạ,..." 
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
                      placeholder="eg. đường đá, size SML các thứ" 
                      className="pl-10 min-h-[80px] bg-card border-border rounded-2xl resize-none"
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
            name="selectedProduct"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="h-12 bg-card border-border rounded-2xl">
                      <div className="flex items-center gap-2">
                        <Coffee className="h-4 w-4 text-muted-foreground" />
                        <SelectValue placeholder="Chọn quán nè" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {products.map((product) => (
                        <SelectItem key={product} value={product}>
                          {product}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-medium transition-all"
          >
            {isSubmitting ? "Đang gửi..." : "Đặt hàng"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
