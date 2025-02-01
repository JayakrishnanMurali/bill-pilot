import { DashboardLayout } from "@/components/dashboard-layout"
import { SubscriptionsHeader } from "@/components/subscriptions/header"
import { SubscriptionsFilters } from "@/components/subscriptions/filters"
import { SubscriptionsTable } from "@/components/subscriptions/table"

export default function SubscriptionsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <SubscriptionsHeader />
        <SubscriptionsFilters />
        <SubscriptionsTable />
      </div>
    </DashboardLayout>
  )
}

