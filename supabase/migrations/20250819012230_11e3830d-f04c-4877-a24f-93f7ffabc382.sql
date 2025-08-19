-- Create storage bucket for project photos
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('project-photos', 'project-photos', true, 52428800, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/jpg']);

-- Create RLS policies for project photos bucket
CREATE POLICY "Public can view project photos" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'project-photos');

CREATE POLICY "Only authenticated users can upload project photos" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'project-photos' AND auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can update project photos" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'project-photos' AND auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can delete project photos" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'project-photos' AND auth.role() = 'authenticated');