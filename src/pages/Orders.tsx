import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  ArrowLeft, 
  Package, 
  Phone, 
  MapPin, 
  FileText, 
  Calendar, 
  Search,
  Download,
  Trash2,
  RefreshCcw
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Order = Tables<"orders">;

const Orders = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch orders từ Supabase
  const { data: orders, isLoading, error, refetch } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      console.log("🔍 Fetching orders from Supabase...");
      
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("❌ Error fetching orders:", error);
        throw error;
      }
      
      console.log("✅ Orders fetched successfully:", data?.length || 0, "records");
      console.log("📦 Data:", data);
      
      return data as Order[];
    },
  });

  // Delete order mutation
  const deleteOrderMutation = useMutation({
    mutationFn: async (orderId: string) => {
      const { error } = await supabase
        .from("orders")
        .delete()
        .eq("id", orderId);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast({
        title: "✅ Đã xóa đơn hàng",
        description: "Đơn hàng đã được xóa thành công",
      });
    },
    onError: (error) => {
      toast({
        title: "❌ Lỗi",
        description: `Không thể xóa đơn hàng: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  // Export to CSV
  const exportToCSV = () => {
    if (!filteredOrders || filteredOrders.length === 0) {
      toast({
        title: "⚠️ Không có dữ liệu",
        description: "Không có đơn hàng nào để xuất",
        variant: "destructive",
      });
      return;
    }

    const headers = ["ID", "Ngày đặt", "Tên khách hàng", "SĐT", "Sản phẩm", "Địa chỉ", "Ghi chú"];
    const csvData = filteredOrders.map(order => [
      order.id.slice(0, 8),
      format(new Date(order.created_at), "dd/MM/yyyy HH:mm", { locale: vi }),
      order.customer_name,
      order.phone_number,
      order.selected_product,
      order.shipping_address,
      order.notes || ""
    ]);

    const csvContent = [
      headers.join(","),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(","))
    ].join("\n");

    const blob = new Blob(["\ufeff" + csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `orders_${format(new Date(), "yyyyMMdd_HHmmss")}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "✅ Xuất file thành công",
      description: `Đã xuất ${filteredOrders.length} đơn hàng ra file CSV`,
    });
  };

  // Filter orders theo search query
  const filteredOrders = orders?.filter(
    (order) =>
      order.customer_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.phone_number.includes(searchQuery) ||
      order.selected_product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="hover:bg-orange-100"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">Đơn Hàng</h1>
              <p className="text-sm text-gray-500">
                Quản lý và theo dõi đơn hàng
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => refetch()}
                className="gap-2"
              >
                <RefreshCcw className="h-4 w-4" />
                <span className="hidden sm:inline">Làm mới</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={exportToCSV}
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Xuất CSV</span>
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Tìm theo tên, SĐT hoặc sản phẩm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Tổng đơn hàng</CardDescription>
              <CardTitle className="text-3xl">{orders?.length || 0}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Hôm nay</CardDescription>
              <CardTitle className="text-3xl">
                {orders?.filter(
                  (order) =>
                    new Date(order.created_at).toDateString() ===
                    new Date().toDateString()
                ).length || 0}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Kết quả tìm kiếm</CardDescription>
              <CardTitle className="text-3xl">
                {filteredOrders?.length || 0}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Error State */}
        {error && (
          <Card className="border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <p className="text-red-600">
                ❌ Lỗi khi tải đơn hàng: {error.message}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-4 w-1/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredOrders && filteredOrders.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Package className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {searchQuery ? "Không tìm thấy đơn hàng" : "Chưa có đơn hàng"}
              </h3>
              <p className="text-gray-500 mb-4">
                {searchQuery
                  ? "Thử tìm kiếm với từ khóa khác"
                  : "Đơn hàng sẽ hiển thị ở đây khi khách hàng đặt hàng"}
              </p>
              <Button onClick={() => navigate("/")}>Về trang chủ</Button>
            </CardContent>
          </Card>
        )}

        {/* Orders List */}
        {!isLoading && filteredOrders && filteredOrders.length > 0 && (
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <Card
                key={order.id}
                className="hover:shadow-lg transition-shadow duration-200"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 flex items-center gap-2">
                        <Package className="h-5 w-5 text-orange-500" />
                        {order.customer_name}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4" />
                        {format(new Date(order.created_at), "PPp", {
                          locale: vi,
                        })}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                        #{order.id.slice(0, 8)}
                      </Badge>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Xác nhận xóa đơn hàng</AlertDialogTitle>
                            <AlertDialogDescription>
                              Bạn có chắc chắn muốn xóa đơn hàng của <strong>{order.customer_name}</strong>?
                              <br />
                              Hành động này không thể hoàn tác.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Hủy</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => deleteOrderMutation.mutate(order.id)}
                              className="bg-red-500 hover:bg-red-600"
                            >
                              Xóa
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {/* Sản phẩm */}
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm font-semibold text-orange-700 mb-1">
                      Sản phẩm đã chọn:
                    </p>
                    <p className="text-gray-900 font-medium">
                      {order.selected_product}
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <Phone className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">Số điện thoại</p>
                        <p className="text-sm font-medium">{order.phone_number}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">Địa chỉ giao hàng</p>
                        <p className="text-sm font-medium">
                          {order.shipping_address}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  {order.notes && (
                    <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                      <FileText className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Ghi chú</p>
                        <p className="text-sm text-gray-700">{order.notes}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
