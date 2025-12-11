import Link from "next/link"
import Image from "next/image"
import { 
  Package, 
  Search, 
  Filter, 
  Plus,
  Edit,
  Trash2,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { prisma } from "@/lib/db"

interface ProductType {
  id: string
  name: string
  slug: string
  sku: string
  category: string
  price: number
  stock: number
  images: string[]
  active: boolean
}

const categoryLabels: Record<string, string> = {
  TONER: "Toner",
  INK: "Ink",
  DRUM: "Drum",
  PART: "Part",
}

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-muted-foreground">Manage your product inventory</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Product
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-9" />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-secondary/50">
                  <th className="text-left p-4 font-medium">Product</th>
                  <th className="text-left p-4 font-medium">Category</th>
                  <th className="text-left p-4 font-medium">Price</th>
                  <th className="text-left p-4 font-medium">Stock</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-muted-foreground">
                      No products found. <Link href="/admin/products/new" className="text-primary-600 hover:underline">Add your first product</Link>
                    </td>
                  </tr>
                ) : (
                  products.map((product: ProductType) => (
                    <tr key={product.id} className="border-b hover:bg-secondary/30 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                            {product.images.length > 0 ? (
                              <Image
                                src={product.images[0]}
                                alt={product.name}
                                width={48}
                                height={48}
                                className="object-cover"
                              />
                            ) : (
                              <Package className="w-5 h-5 text-muted-foreground" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-muted-foreground">{product.sku}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant="secondary">
                          {categoryLabels[product.category] || product.category}
                        </Badge>
                      </td>
                      <td className="p-4 font-semibold">
                        ${product.price.toFixed(2)}
                      </td>
                      <td className="p-4">
                        <span className={product.stock < 10 ? "text-red-600 font-medium" : ""}>
                          {product.stock}
                        </span>
                      </td>
                      <td className="p-4">
                        {product.active ? (
                          <Badge className="bg-green-100 text-green-700" variant="secondary">Active</Badge>
                        ) : (
                          <Badge className="bg-gray-100 text-gray-700" variant="secondary">Inactive</Badge>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={`/admin/products/${product.id}`}>
                              <Edit className="w-4 h-4" />
                            </Link>
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between p-4 border-t">
            <p className="text-sm text-muted-foreground">
              Showing {products.length} products
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" disabled>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
