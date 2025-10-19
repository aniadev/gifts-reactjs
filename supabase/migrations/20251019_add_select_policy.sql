-- Add SELECT policy to allow reading orders
-- This allows anyone to read orders from the public.orders table

CREATE POLICY "Anyone can view orders"
  ON public.orders
  FOR SELECT
  TO public
  USING (true);

-- Optional: Add UPDATE and DELETE policies if needed
CREATE POLICY "Anyone can update orders"
  ON public.orders
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can delete orders"
  ON public.orders
  FOR DELETE
  TO public
  USING (true);
