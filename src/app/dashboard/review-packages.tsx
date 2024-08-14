import { Button } from "@/components/Button";
import { Plus } from "lucide-react";

export function ReviewPackages() {
  return (
    <div className="w-full h-full p-8">
      <div className="flex justify-between">
      <Button icon={<Plus className="w-4 h-4" />}>
        ADD PACKAGE
      </Button>

      <div className="flex gap-3">
        <Button variant="secondary" size="large" color="darker" state="unavailable">
          SAVE CHANGES
        </Button>

        <Button variant="primary" size="large">
          PAYMENT DETAILS
        </Button>
      </div>
      </div>
    </div>
  )
}