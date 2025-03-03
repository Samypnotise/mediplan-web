import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, PencilIcon } from "lucide-react";
import Date from "@/components/date";
import { Button } from "@/components/ui/button";

export default async function MissionDetails({
  start,
  end,
  address,
}: {
  start: string;
  end: string;
  address: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <p>Mission Details</p>
          <Button variant="outline">
            <PencilIcon />
            Edit
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Start Date</p>
            <p className="text-sm text-muted-foreground">
              <Date dateString={start} />
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">End Date</p>
            <p className="text-sm text-muted-foreground">
              <Date dateString={end} />
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Location</p>
            <p className="text-sm text-muted-foreground">{address}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
