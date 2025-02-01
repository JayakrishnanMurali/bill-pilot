import { DashboardLayout } from "@/components/dashboard-layout"
import { SettingsHeader } from "@/components/settings/header"
import { GeneralSettings } from "@/components/settings/general"
import { IntegrationsSettings } from "@/components/settings/integrations"
import { BillingSettings } from "@/components/settings/billing"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <SettingsHeader />
        <div className="grid gap-6">
          <GeneralSettings />
          <IntegrationsSettings />
          <BillingSettings />
        </div>
      </div>
    </DashboardLayout>
  )
}

