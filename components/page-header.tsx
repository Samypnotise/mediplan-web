import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

type Breadcrumb = { label: string; href: string };

function BreadcrumbElement({
  breadcrumb,
  isLast,
}: {
  breadcrumb: Breadcrumb;
  isLast?: boolean;
}) {
  return (
    <>
      <BreadcrumbItem className="hidden md:block">
        {isLast ? (
          <BreadcrumbLink href={breadcrumb.href}>
            {breadcrumb.label}
          </BreadcrumbLink>
        ) : (
          <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
        )}
      </BreadcrumbItem>
      {isLast && <BreadcrumbSeparator className="hidden md:block" />}
    </>
  );
}

export default function PageHeader({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((breadcrumb, index) => (
              <BreadcrumbElement
                key={breadcrumb.href}
                breadcrumb={breadcrumb}
                isLast={index < breadcrumbs.length - 1}
              />
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
