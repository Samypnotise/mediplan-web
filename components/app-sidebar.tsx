import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Command } from "lucide-react";
import SidebarUser, { SidebarUserSkeleton } from "@/components/sidebar-user";
import { Suspense } from "react";
import NavMain from "./nav-main";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: "layout-dashboard",
  },
  {
    title: "Missions",
    url: "/dashboard/missions",
    icon: "stethoscope",
  },
  {
    title: "Patients",
    url: "/dashboard/patients",
    icon: "accessibility",
  },
];

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="flex">
                <div className="grow flex space-x-2">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Command className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Mediplan</span>
                    <span className="truncate text-xs">Enterprise</span>
                  </div>
                </div>
                <ThemeToggle />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <Suspense fallback={<SidebarUserSkeleton />}>
          <SidebarUser />
        </Suspense>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
