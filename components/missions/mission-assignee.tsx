"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "@/lib/definitions";
import { Button } from "../ui/button";
import { ChevronsUpDown, PencilIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "../ui/command";

export default function MissionAssignee({ assignee }: { assignee: User }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <p>Assigned caregiver</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <PencilIcon />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Mission Assignee</DialogTitle>
                <DialogDescription>
                  Change the user assigned to this mission
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="assignee">Select new assignee</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-[200px] justify-between"
                    >
                      {`${assignee.firstName} ${assignee.lastName}`}{" "}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search User..."
                        className="h-9"
                      />
                      <CommandList>
                        <CommandEmpty>No user found.</CommandEmpty>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </DialogContent>
          </Dialog>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <Avatar className="h-16 w-16 mb-2">
          <AvatarImage
            src=""
            alt={`${assignee.firstName[0]}${assignee.lastName[0]}`}
          />
          <AvatarFallback className="h-16 w-16">{`${assignee.firstName[0]}${assignee.lastName[0]}`}</AvatarFallback>
        </Avatar>
        <p className="font-bold">
          {assignee.firstName} {assignee.lastName}
        </p>
        <p className="text-sm text-muted-foreground">{assignee.email}</p>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
