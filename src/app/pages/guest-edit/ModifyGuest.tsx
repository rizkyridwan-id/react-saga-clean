import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { CircleX } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ModifyGuest() {
  const navigate = useNavigate();
  const param = useParams();
  const title = param.id ? 'Edit Guest' : 'Add Guest';

  const handleCancelClick = () => {
    navigate('/admin/guests');
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Fill the required field</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid items-start grid-cols-1 lg:grid-cols-2 w-full gap-6 overflow-auto">
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Personal Information
            </legend>
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" type="text" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="gender">Gender</Label>
              <Select>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select a gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-xl -mt-1.5">&#9794;</span>
                      <span className="font-medium text-foreground">Male</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="female">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-xl -mt-1.5 ">&#9792;</span>
                      <span className="font-medium text-foreground">
                        Female
                      </span>
                    </div>
                  </SelectItem>
                  <SelectItem value="none">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <CircleX className="size-5" />
                      <span className="font-medium text-foreground">
                        Prefer not to say
                      </span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </fieldset>
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">Origin</legend>
            <div className="grid gap-3">
              <Label htmlFor="state">State</Label>
              <Select>
                <SelectTrigger id="state">
                  <SelectValue placeholder="Select a state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="West Java">
                    <span className="font-medium text-foreground">
                      West Java
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="city">City</Label>
              <Select>
                <SelectTrigger id="city">
                  <SelectValue placeholder="Select a city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bandung">
                    <span className="font-medium text-foreground">Bandung</span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </fieldset>
          <div className="flex flex-row ml-auto col-span-2 gap-x-2">
            <Button variant="ghost" onClick={handleCancelClick}>
              Cancel
            </Button>
            <Button>Save</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
