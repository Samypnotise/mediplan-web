import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import UserDropdown from "./user-dropdown";
import { getAuthenticatedUser } from "@/data/user";
import { Skeleton } from "./ui/skeleton";

export async function SidebarUserSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-8 w-8 rounded-lg" />
      <div className="rid flex-1 text-left text-sm leading-tight space-y-2">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-3 w-[140px]" />
      </div>
    </div>
  );
}

export default async function SidebarUser() {
  const authUser = await getAuthenticatedUser();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <UserDropdown user={authUser} />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
