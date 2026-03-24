#!/usr/bin/env python3
import os
from pathlib import Path
from PIL import Image

def convert_png_to_webp(png_path, quality=95):
    """Convert a PNG file to WebP format."""
    try:
        webp_path = str(png_path).replace('.png', '.webp').replace('.PNG', '.webp')
        img = Image.open(png_path)
        img.save(webp_path, 'WEBP', quality=quality)
        print(f"✓ Converted: {os.path.basename(png_path)} -> {os.path.basename(webp_path)}")
        return True
    except Exception as e:
        print(f"✗ Error converting {os.path.basename(png_path)}: {e}")
        return False

def main():
    root_dir = Path(__file__).parent.parent
    
    # Directories to scan
    scan_dirs = [
        root_dir / 'src' / 'assets',
        root_dir / 'public' / 'lovable-uploads'
    ]
    
    converted = 0
    failed = 0
    
    print("PNG to WebP Conversion\n")
    print(f"Quality: 95%\n")
    
    for scan_dir in scan_dirs:
        if not scan_dir.exists():
            continue
            
        print(f"Scanning: {scan_dir}")
        png_files = list(scan_dir.glob('*.png')) + list(scan_dir.glob('*.PNG'))
        print(f"Found {len(png_files)} PNG file(s)\n")
        
        for png_file in png_files:
            # Skip icon files
            if 'icons' in str(png_file):
                continue
                
            if convert_png_to_webp(png_file):
                converted += 1
            else:
                failed += 1
    
    print(f"\n{'='*50}")
    print(f"Conversion Summary:")
    print(f"{'='*50}")
    print(f"Successfully converted: {converted}")
    print(f"Failed: {failed}")
    print(f"\nConversion complete!")

if __name__ == '__main__':
    main()

