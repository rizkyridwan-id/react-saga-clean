import { useAppDispatch, useAppSelector } from '@/app/store';
import { CreateGuestDto, GuestAction } from '@/pages/guest';
import ScreenLoading from '@/shared/components/custom/ScreenLoading';
import { Button } from '@/shared/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';
import { CircleX, RotateCw } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function GuestEditPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const loading = useAppSelector((state) => state.guest.rowLoading);
  const screenLoading = useAppSelector((state) => state.guest.loading);
  const selectedGuest = useAppSelector((state) => state.guest.selectedGuest);

  const initialData: CreateGuestDto = {
    name: '',
    email: '',
    gender: '',
    state: '',
    city: '',
  };

  const [form, setForm] = useState<CreateGuestDto>(initialData);

  const title = id ? 'Edit Guest' : 'Add Guest';

  useEffect(() => {
    if (!id) return;
    dispatch(GuestAction.getGuestByIdRequest(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (!id) return;
    if (selectedGuest) {
      setForm({ ...selectedGuest });
    }
  }, [id, selectedGuest]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (key: string) => (value: string) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleCancelClick = () => {
    navigate('/admin/guests');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      dispatch(GuestAction.updateGuestRequest({ id, data: form }));
    } else {
      dispatch(GuestAction.createGuestRequest(form));
    }
  };

  return (
    <>
      <ScreenLoading isLoading={screenLoading} />
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>Fill the required field</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2"
          >
            <fieldset className="grid gap-6 rounded-lg border p-4">
              <legend className="-ml-1 px-1 text-sm font-medium">
                Personal Information
              </legend>
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  defaultValue={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  defaultValue={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="gender">Gender</Label>
                <Select
                  name="gender"
                  onValueChange={handleSelectChange('gender')}
                  value={form.gender}
                >
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select a gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <span className="-mt-1.5 text-xl">&#9794;</span>
                        <span className="font-medium text-foreground">
                          Male
                        </span>
                      </div>
                    </SelectItem>
                    <SelectItem value="female">
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <span className="-mt-1.5 text-xl">&#9792;</span>
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
            <fieldset className="grid auto-rows-max gap-6 rounded-lg border p-4">
              <legend className="-ml-1 px-1 text-sm font-medium">Origin</legend>
              <div className="grid gap-3">
                <Label htmlFor="state">State</Label>
                <Select
                  name="state"
                  value={form.state}
                  onValueChange={handleSelectChange('state')}
                >
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
                <Select
                  name="city"
                  value={form.city}
                  onValueChange={handleSelectChange('city')}
                >
                  <SelectTrigger id="city">
                    <SelectValue placeholder="Select a city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bandung">
                      <span className="font-medium text-foreground">
                        Bandung
                      </span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </fieldset>
            <div className="ml-auto flex flex-row gap-x-2 lg:col-span-2">
              <Button
                variant="ghost"
                onClick={handleCancelClick}
                disabled={!!loading}
              >
                Cancel
              </Button>
              <Button type="submit" className="min-w-20" disabled={!!loading}>
                {loading ? <RotateCw className="h-5 animate-spin" /> : 'Save'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
