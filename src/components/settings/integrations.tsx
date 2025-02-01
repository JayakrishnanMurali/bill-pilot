import { Badge, Button, Card, CardContent } from "@mui/material"

interface Integration {
  name: string
  status: "Connected" | "Disconnected"
}

const Integrations: React.FC = () => {
  const integrations: Integration[] = [
    { name: "Integration 1", status: "Connected" },
    { name: "Integration 2", status: "Disconnected" },
  ]

  return (
    <Card>
      <CardContent>
        <div>
          {integrations.map((integration) => (
            <div key={integration.name} className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <span className="font-medium">{integration.name}</span>
                </div>
                <Badge
                  color="success"
                  className={
                    integration.status === "Connected"
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-gray-50 text-gray-700 border-gray-200"
                  }
                >
                  {integration.status}
                </Badge>
              </div>
              <div>
                <Button variant="outline">{integration.status === "Connected" ? "Disconnect" : "Connect"}</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default Integrations

