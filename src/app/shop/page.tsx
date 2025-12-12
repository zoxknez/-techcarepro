"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ShoppingCart, 
  Search, 
  Truck, 
  RotateCcw, 
  Shield,
  X,
  SlidersHorizontal,
  Check
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"
import { useCartStore } from "@/store"

const allProducts = [
  { id: "1", name: "HP 206A Black Toner", slug: "hp-206a-black", price: 89.99, compareAtPrice: 129.99, brand: "HP", category: "toner", stock: 15 },
  { id: "2", name: "HP 206A Cyan Toner", slug: "hp-206a-cyan", price: 99.99, compareAtPrice: 139.99, brand: "HP", category: "toner", stock: 8 },
  { id: "3", name: "HP 206A Magenta Toner", slug: "hp-206a-magenta", price: 99.99, compareAtPrice: 139.99, brand: "HP", category: "toner", stock: 12 },
  { id: "4", name: "HP 206A Yellow Toner", slug: "hp-206a-yellow", price: 99.99, compareAtPrice: 139.99, brand: "HP", category: "toner", stock: 10 },
  { id: "5", name: "Brother TN-2450 Toner", slug: "brother-tn2450", price: 79.99, compareAtPrice: 99.99, brand: "Brother", category: "toner", stock: 20 },
  { id: "6", name: "Brother TN-253BK Toner", slug: "brother-tn253bk", price: 69.99, compareAtPrice: 89.99, brand: "Brother", category: "toner", stock: 18 },
  { id: "7", name: "Canon PG-645XL Black Ink", slug: "canon-pg645xl", price: 34.99, compareAtPrice: 44.99, brand: "Canon", category: "ink", stock: 25 },
  { id: "8", name: "Canon CL-646XL Colour Ink", slug: "canon-cl646xl", price: 39.99, compareAtPrice: 49.99, brand: "Canon", category: "ink", stock: 22 },
  { id: "9", name: "Epson 212XL Black Ink", slug: "epson-212xl-black", price: 29.99, compareAtPrice: 39.99, brand: "Epson", category: "ink", stock: 30 },
  { id: "10", name: "Epson 212XL Multipack", slug: "epson-212xl-multi", price: 89.99, compareAtPrice: 119.99, brand: "Epson", category: "ink", stock: 15 },
  { id: "11", name: "Brother DR-2425 Drum", slug: "brother-dr2425", price: 129.99, compareAtPrice: 159.99, brand: "Brother", category: "drum", stock: 8 },
  { id: "12", name: "HP 32A Imaging Drum", slug: "hp-32a-drum", price: 149.99, compareAtPrice: 189.99, brand: "HP", category: "drum", stock: 5 },
  { id: "13", name: "Canon 055 Black Toner", slug: "canon-055-black", price: 109.99, compareAtPrice: 139.99, brand: "Canon", category: "toner", stock: 14 },
  { id: "14", name: "Kyocera TK-5244K Black", slug: "kyocera-tk5244k", price: 89.99, compareAtPrice: 119.99, brand: "Kyocera", category: "toner", stock: 10 },
  { id: "15", name: "Lexmark B221H00 Black", slug: "lexmark-b221h00", price: 149.99, compareAtPrice: 189.99, brand: "Lexmark", category: "toner", stock: 6 },
  { id: "16", name: "Samsung MLT-D116L Black", slug: "samsung-mltd116l", price: 79.99, compareAtPrice: 99.99, brand: "Samsung", category: "toner", stock: 12 },
  { id: "17", name: "HP 965XL Black Ink", slug: "hp-965xl-black", price: 49.99, compareAtPrice: 64.99, brand: "HP", category: "ink", stock: 18 },
  { id: "18", name: "HP 965XL Colour Pack", slug: "hp-965xl-color", price: 89.99, compareAtPrice: 109.99, brand: "HP", category: "ink", stock: 14 },
  { id: "19", name: "Brother LC-3339XL Black", slug: "brother-lc3339xl-black", price: 44.99, compareAtPrice: 59.99, brand: "Brother", category: "ink", stock: 22 },
  { id: "20", name: "Canon DR-2425 Drum Unit", slug: "canon-dr2425", price: 139.99, compareAtPrice: 169.99, brand: "Canon", category: "drum", stock: 7 },
]

const brands = ["HP", "Brother", "Canon", "Epson", "Kyocera", "Lexmark", "Samsung"]

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
]

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("featured")
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  const categories = useMemo(() => [
    { id: "all", name: "All Products", count: allProducts.length },
    { id: "toner", name: "Toner Cartridges", count: allProducts.filter(p => p.category === "toner").length },
    { id: "ink", name: "Ink Cartridges", count: allProducts.filter(p => p.category === "ink").length },
    { id: "drum", name: "Drums & Parts", count: allProducts.filter(p => p.category === "drum").length },
  ], [])

  const filteredProducts = useMemo(() => {
    let result = [...allProducts]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.brand.toLowerCase().includes(query)
      )
    }

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter(p => p.category === selectedCategory)
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand))
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name))
        break
    }

    return result
  }, [searchQuery, selectedCategory, selectedBrands, sortBy])

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSelectedBrands([])
    setSortBy("featured")
  }

  const hasActiveFilters = searchQuery || selectedCategory !== "all" || selectedBrands.length > 0

  const handleAddToCart = (e: React.MouseEvent, product: typeof allProducts[0]) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      slug: product.slug,
      brand: product.brand,
      price: product.price,
    })
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Hero */}
      <section className="py-8 md:py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Shop <span className="text-gradient">Consumables</span>
              </h1>
              <p className="text-muted-foreground">
                Genuine toners, inks, and parts for all major brands
              </p>
            </div>
            <div className="flex gap-2 sm:gap-4">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search products..." 
                  className="pl-10" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <Button 
                variant="secondary" 
                className="lg:hidden"
                onClick={() => setShowMobileFilters(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-50">
              <Truck className="w-6 h-6 text-primary-600" />
              <div>
                <p className="font-semibold text-sm">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-50">
              <RotateCcw className="w-6 h-6 text-primary-600" />
              <div>
                <p className="font-semibold text-sm">30-Day Returns</p>
                <p className="text-xs text-muted-foreground">Hassle-free returns</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-primary-50">
              <Shield className="w-6 h-6 text-primary-600" />
              <div>
                <p className="font-semibold text-sm">Genuine Products</p>
                <p className="text-xs text-muted-foreground">100% authentic guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:w-64 space-y-6">
            {/* Categories */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full flex justify-between items-center px-3 py-2 rounded-lg transition-colors text-left ${
                        selectedCategory === cat.id 
                          ? "bg-primary-100 text-primary-700" 
                          : "hover:bg-secondary"
                      }`}
                    >
                      <span className="text-sm">{cat.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        selectedCategory === cat.id 
                          ? "bg-primary-200 text-primary-700" 
                          : "bg-secondary text-muted-foreground"
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Brands */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Brands</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label 
                      key={brand} 
                      className="flex items-center gap-3 cursor-pointer hover:bg-secondary px-2 py-1.5 rounded-lg transition-colors"
                    >
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        selectedBrands.includes(brand) 
                          ? "bg-primary-500 border-primary-500" 
                          : "border-gray-300"
                      }`}>
                        {selectedBrands.includes(brand) && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <input 
                        type="checkbox" 
                        className="sr-only"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                      />
                      <span className="text-sm">{brand}</span>
                      <span className="text-xs text-muted-foreground ml-auto">
                        ({allProducts.filter(p => p.brand === brand).length})
                      </span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <Button variant="outline" className="w-full" onClick={clearFilters}>
                <X className="w-4 h-4 mr-2" />
                Clear Filters
              </Button>
            )}
          </aside>

          {/* Mobile Category Scroll */}
          <div className="lg:hidden overflow-x-auto pb-2 -mx-4 px-4">
            <div className="flex gap-2 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors whitespace-nowrap text-sm ${
                    selectedCategory === cat.id 
                      ? "bg-primary-500 text-white border-primary-500" 
                      : "bg-white hover:bg-primary-50 hover:border-primary-300"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory === cat.id 
                      ? "bg-primary-600" 
                      : "bg-secondary text-muted-foreground"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 sm:mb-6">
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">
                  Showing <strong>{filteredProducts.length}</strong> products
                </p>
                {hasActiveFilters && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-primary-600 hover:underline lg:hidden"
                  >
                    Clear filters
                  </button>
                )}
              </div>
              <select 
                className="text-sm border rounded-lg px-3 py-2 w-full sm:w-auto bg-white"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            {/* Active Filters Tags */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-4">
                {searchQuery && (
                  <Badge variant="secondary" className="gap-1">
                    Search: {searchQuery}
                    <button onClick={() => setSearchQuery("")}>
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedCategory !== "all" && (
                  <Badge variant="secondary" className="gap-1">
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <button onClick={() => setSelectedCategory("all")}>
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedBrands.map(brand => (
                  <Badge key={brand} variant="secondary" className="gap-1">
                    {brand}
                    <button onClick={() => toggleBrand(brand)}>
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <Button onClick={clearFilters}>Clear All Filters</Button>
              </div>
            ) : (
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
                layout
              >
                <AnimatePresence>
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link href={`/shop/${product.slug}`}>
                        <Card className="group h-full overflow-hidden hover:border-primary-300 hover:shadow-lg transition-all">
                          <div className="aspect-square bg-gradient-to-br from-secondary to-primary-50 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                <span className="text-2xl sm:text-3xl font-bold text-gradient">{product.brand[0]}</span>
                              </div>
                            </div>
                            {product.compareAtPrice && (
                              <Badge variant="destructive" className="absolute top-2 left-2 text-xs">
                                -{Math.round((1 - product.price / product.compareAtPrice) * 100)}%
                              </Badge>
                            )}
                            {product.stock < 10 && (
                              <Badge className="absolute top-2 right-2 text-xs bg-orange-500 hover:bg-orange-500">
                                Low Stock
                              </Badge>
                            )}
                          </div>
                          <CardContent className="p-3 sm:p-4">
                            <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
                            <h3 className="font-medium text-xs sm:text-sm mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                              {product.name}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                              <span className="font-bold text-sm sm:text-base text-primary-600">{formatPrice(product.price)}</span>
                              {product.compareAtPrice && (
                                <span className="text-xs text-muted-foreground line-through">
                                  {formatPrice(product.compareAtPrice)}
                                </span>
                              )}
                            </div>
                            <Button 
                              size="sm" 
                              className="w-full mt-2 sm:mt-3 text-xs sm:text-sm"
                              onClick={(e) => handleAddToCart(e, product)}
                            >
                              <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                              <span className="hidden sm:inline">Add to Cart</span>
                              <span className="sm:hidden">Add</span>
                            </Button>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {showMobileFilters && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setShowMobileFilters(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-4 border-b flex items-center justify-between">
                <h2 className="font-bold text-lg">Filters</h2>
                <button onClick={() => setShowMobileFilters(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-4 space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold mb-3">Categories</h3>
                  <div className="space-y-1">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full flex justify-between items-center px-3 py-2 rounded-lg transition-colors text-left ${
                          selectedCategory === cat.id 
                            ? "bg-primary-100 text-primary-700" 
                            : "hover:bg-secondary"
                        }`}
                      >
                        <span className="text-sm">{cat.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          selectedCategory === cat.id 
                            ? "bg-primary-200 text-primary-700" 
                            : "bg-secondary text-muted-foreground"
                        }`}>
                          {cat.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h3 className="font-semibold mb-3">Brands</h3>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <label 
                        key={brand} 
                        className="flex items-center gap-3 cursor-pointer hover:bg-secondary px-2 py-1.5 rounded-lg transition-colors"
                      >
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                          selectedBrands.includes(brand) 
                            ? "bg-primary-500 border-primary-500" 
                            : "border-gray-300"
                        }`}>
                          {selectedBrands.includes(brand) && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <input 
                          type="checkbox" 
                          className="sr-only"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                        />
                        <span className="text-sm">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 border-t space-y-3">
                {hasActiveFilters && (
                  <Button variant="outline" className="w-full" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                )}
                <Button className="w-full" onClick={() => setShowMobileFilters(false)}>
                  Show {filteredProducts.length} Results
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
