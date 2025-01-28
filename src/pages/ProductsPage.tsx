'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart } from 'lucide-react'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

const Image = ({ src, alt, fill, className }) => (
    <img src={src} alt={alt} className={`object-cover w-full h-full ${className}`} />
)

// Mock product data
const products = [
    { id: 1, name: "Classic Token", price: 29.99, image: "https://placehold.co/420x420?text=Classic+Token" },
    { id: 2, name: "Premium Token", price: 49.99, image: "https://placehold.co/420x420?text=Premium+Token" },
    { id: 3, name: "Deluxe Token", price: 69.99, image: "https://placehold.co/420x420?text=Deluxe+Token" },
    { id: 4, name: "Limited Edition Token", price: 99.99, image: "https://placehold.co/420x420?text=Limited+Edition+Token" },
    { id: 5, name: "Gold Token", price: 119.99, image: "https://placehold.co/420x420?text=Gold+Token" },
    { id: 6, name: "Silver Token", price: 89.99, image: "https://placehold.co/420x420?text=Silver+Token" },
    { id: 7, name: "Bronze Token", price: 59.99, image: "https://placehold.co/420x420?text=Bronze+Token" },
    { id: 8, name: "Diamond Token", price: 149.99, image: "https://placehold.co/420x420?text=Diamond+Token" },
    { id: 9, name: "Platinum Token", price: 199.99, image: "https://placehold.co/420x420?text=Platinum+Token" },
    { id: 10, name: "Emerald Token", price: 129.99, image: "https://placehold.co/420x420?text=Emerald+Token" },
    { id: 11, name: "Ruby Token", price: 139.99, image: "https://placehold.co/420x420?text=Ruby+Token" },
    { id: 12, name: "Sapphire Token", price: 159.99, image: "https://placehold.co/420x420?text=Sapphire+Token" },
    { id: 13, name: "Opal Token", price: 109.99, image: "https://placehold.co/420x420?text=Opal+Token" },
    { id: 14, name: "Pearl Token", price: 179.99, image: "https://placehold.co/420x420?text=Pearl+Token" },
    { id: 15, name: "Amethyst Token", price: 169.99, image: "https://placehold.co/420x420?text=Amethyst+Token" },
    { id: 16, name: "Topaz Token", price: 139.99, image: "https://placehold.co/420x420?text=Topaz+Token" },
    { id: 17, name: "Quartz Token", price: 119.99, image: "https://placehold.co/420x420?text=Quartz+Token" },
    { id: 18, name: "Jade Token", price: 149.99, image: "https://placehold.co/420x420?text=Jade+Token" },
    { id: 19, name: "Onyx Token", price: 99.99, image: "https://placehold.co/420x420?text=Onyx+Token" },
]

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  return (

    <>
            <Navbar />

     <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      {/* Main product display */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative aspect-square">
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">{selectedProduct.name}</h2>
          <p className="text-xl mb-4">${selectedProduct.price.toFixed(2)}</p>
          <p className="mb-6">
            Experience the beauty of preserving memories with our {selectedProduct.name}. 
            This token is designed to capture and store your most precious moments, 
            allowing you to revisit them whenever you want.
          </p>
          <Button className="w-full sm:w-auto">
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </div>
      </div>
      
      {/* Other products */}
      <h2 className="text-2xl font-semibold mb-4">Other Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card 
            key={product.id} 
            className={`cursor-pointer transition-all duration-300 ${
              selectedProduct.id === product.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setSelectedProduct(product)}
          >
            <CardContent className="p-4">
              <div className="relative aspect-square mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="font-semibold">{product.name}</h3>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <p className="text-sm">${product.price.toFixed(2)}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    <Footer />
    </>
   
  )
}

