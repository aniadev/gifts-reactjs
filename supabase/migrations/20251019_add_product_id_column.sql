-- Add product_id column to orders table
ALTER TABLE public.orders 
ADD COLUMN product_id TEXT;

-- Add index for faster queries on product_id
CREATE INDEX idx_orders_product_id 
ON public.orders(product_id);

-- Add comment to describe the column
COMMENT ON COLUMN public.orders.product_id IS 'Unique slug-based identifier for the product (format: store-category-product)';
