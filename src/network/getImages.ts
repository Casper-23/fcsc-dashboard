function getProductImageUrl(productName: string): string {
    const baseUrl = "https://fcsc-bucket.blr1.cdn.digitaloceanspaces.com/images/products/";
    const fileExtension = ".webp";
    const fullUrl = `${baseUrl}${productName}${fileExtension}`;
    return fullUrl;
}