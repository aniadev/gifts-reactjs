-- Create orders table to store customer form submissions
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  shipping_address TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  notes TEXT,
  selected_product TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert orders (public form)
CREATE POLICY "Anyone can submit orders"
  ON public.orders
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX idx_orders_created_at ON public.orders(created_at DESC);