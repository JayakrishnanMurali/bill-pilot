import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function SubscriptionsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Subscriptions</h1>
        <p className="text-muted-foreground">Manage and track all your team subscriptions in one place.</p>
      </div>
      <Button>
        <Plus className="mr-2 h-4 w-4" />
        Add Subscription
      </Button>
    </div>
  )
}

