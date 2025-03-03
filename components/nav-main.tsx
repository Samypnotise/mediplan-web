"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Icon from "@/components/ui/icon";
import { usePathname } from "next/navigation";

export default function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: string;
  }[];
}) {
  const pathName = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Shortcuts</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild isActive={pathName == item.url}>
              <Link href={item.url}>
                {item.icon && <Icon name={item.icon} />}
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
