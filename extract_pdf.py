import sys
import os

try:
    import fitz  # PyMuPDF
    HAS_FITZ = True
except ImportError:
    HAS_FITZ = False
    try:
        from pdf2image import convert_from_path
        from PIL import Image
        HAS_PDF2IMAGE = True
    except ImportError:
        HAS_PDF2IMAGE = False

def extract_with_fitz(pdf_path, output_dir):
    """Extract text and images using PyMuPDF"""
    pdf_document = fitz.open(pdf_path)
    
    # Extract text
    text_content = []
    for page_num in range(len(pdf_document)):
        page = pdf_document.load_page(page_num)
        text = page.get_text()
        text_content.append(f"=== Page {page_num + 1} ===\n{text}\n")
    
    # Extract images
    os.makedirs(output_dir, exist_ok=True)
    image_count = 0
    
    for page_num in range(len(pdf_document)):
        page = pdf_document.load_page(page_num)
        image_list = page.get_images(full=True)
        
        for img_index, img in enumerate(image_list):
            xref = img[0]
            base_image = pdf_document.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            image_filename = f"page{page_num + 1}_img{img_index + 1}.{image_ext}"
            image_filepath = os.path.join(output_dir, image_filename)
            
            with open(image_filepath, "wb") as image_file:
                image_file.write(image_bytes)
            image_count += 1
    
    pdf_document.close()
    return "\n".join(text_content), image_count

def extract_with_pdf2image(pdf_path, output_dir):
    """Extract images using pdf2image (requires poppler)"""
    os.makedirs(output_dir, exist_ok=True)
    images = convert_from_path(pdf_path)
    
    for i, image in enumerate(images):
        image_filename = f"page{i + 1}.png"
        image_filepath = os.path.join(output_dir, image_filename)
        image.save(image_filepath, "PNG")
    
    return len(images)

if __name__ == "__main__":
    pdf_path = r"F:\AndroidWorks\AndoridDataset\ekstra\iot.pdf"
    output_dir = "public/posts/iot-project"
    
    if not os.path.exists(pdf_path):
        print(f"PDF file not found: {pdf_path}")
        sys.exit(1)
    
    if HAS_FITZ:
        print("Using PyMuPDF (fitz)...")
        text, img_count = extract_with_fitz(pdf_path, output_dir)
        print(f"Extracted {img_count} images")
        with open("iot_content.txt", "w", encoding="utf-8") as f:
            f.write(text)
        print("Text saved to iot_content.txt")
    elif HAS_PDF2IMAGE:
        print("Using pdf2image...")
        img_count = extract_with_pdf2image(pdf_path, output_dir)
        print(f"Extracted {img_count} page images")
    else:
        print("No PDF extraction library available. Please install PyMuPDF: pip install PyMuPDF")
        sys.exit(1)

