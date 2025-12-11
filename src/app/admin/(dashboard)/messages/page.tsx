import Link from "next/link"
import { 
  MessageSquare, 
  Search, 
  Filter, 
  Eye,
  Trash2,
  Mail,
  MailOpen,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { prisma } from "@/lib/db"

interface ContactMessageType {
  id: string
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
  read: boolean
  createdAt: Date
}

export default async function AdminMessagesPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  })

  const unreadCount = messages.filter((m: ContactMessageType) => !m.read).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Messages</h1>
          <p className="text-muted-foreground">
            {unreadCount > 0 ? `${unreadCount} unread message${unreadCount > 1 ? 's' : ''}` : 'All messages read'}
          </p>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-9" />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Messages List */}
      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {messages.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                No messages yet
              </div>
            ) : (
              messages.map((message: ContactMessageType) => (
                <div
                  key={message.id}
                  className={`p-4 hover:bg-secondary/30 transition-colors ${!message.read ? 'bg-primary-50/50' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${message.read ? 'bg-secondary' : 'bg-primary-100'}`}>
                      {message.read ? (
                        <MailOpen className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <Mail className="w-5 h-5 text-primary-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <h3 className={`font-medium ${!message.read ? 'text-primary-900' : ''}`}>
                            {message.firstName} {message.lastName}
                          </h3>
                          {!message.read && (
                            <Badge className="bg-primary-100 text-primary-700" variant="secondary">
                              New
                            </Badge>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground shrink-0">
                          {new Date(message.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{message.email}</p>
                      <p className="font-medium mb-1">{message.subject}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2">{message.message}</p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/admin/messages/${message.id}`}>
                          <Eye className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between p-4 border-t">
            <p className="text-sm text-muted-foreground">
              Showing {messages.length} messages
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
