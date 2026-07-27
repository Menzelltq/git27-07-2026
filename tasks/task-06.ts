/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */
const productInfo = {
    product: (productCode: string, productName: string, sellingPrice: number, stockQuantity: number, productWeight: number, averageCustomerRating: number, isDiscounted: boolean) => ({
        productCode, productName, sellingPrice, stockQuantity, productWeight, averageCustomerRating, isDiscounted
    })
};

const productData = [
    productInfo.product("PRD001", "Wireless Earbuds", 49.99, 150, 0.2, 4.5, true),
    productInfo.product("PRD002", "Smartphone Case", 19.99, 300, 0.1, 4.2, false),
    productInfo.product("PRD003", "Bluetooth Speaker", 79.99, 100, 1.5, 4.8, true)
];

console.log(productData);