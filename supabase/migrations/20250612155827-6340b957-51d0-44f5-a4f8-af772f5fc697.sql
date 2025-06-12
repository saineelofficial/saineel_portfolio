
-- Create a table to store project view counts
CREATE TABLE public.project_views (
  id SERIAL PRIMARY KEY,
  project_id INTEGER NOT NULL UNIQUE,
  view_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert initial data for the 4 projects
INSERT INTO public.project_views (project_id, view_count) VALUES
(1, 0),
(2, 0),
(3, 0),
(4, 0);

-- Create a function to increment view count
CREATE OR REPLACE FUNCTION increment_project_view(p_project_id INTEGER)
RETURNS INTEGER AS $$
DECLARE
  new_count INTEGER;
BEGIN
  UPDATE public.project_views 
  SET view_count = view_count + 1,
      updated_at = now()
  WHERE project_id = p_project_id;
  
  SELECT view_count INTO new_count
  FROM public.project_views
  WHERE project_id = p_project_id;
  
  RETURN new_count;
END;
$$ LANGUAGE plpgsql;

-- Enable Row Level Security (but allow public access for view counts)
ALTER TABLE public.project_views ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read view counts
CREATE POLICY "Anyone can view project counts" 
  ON public.project_views 
  FOR SELECT 
  USING (true);

-- Create policy to allow everyone to update view counts
CREATE POLICY "Anyone can update project counts" 
  ON public.project_views 
  FOR UPDATE 
  USING (true);
