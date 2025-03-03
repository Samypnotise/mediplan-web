"use client";

import { PaginationMeta } from "@/lib/definitions";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

export default function TablePagination({ meta }: { meta: PaginationMeta }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const buildLink = (page: number): string => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `${pathName}?${params}`;
  };

  const renderPageNumbers = () => {
    const items: ReactNode[] = [];
    const maxVisibleItems = 3;

    if (meta.lastPage <= maxVisibleItems) {
      for (let i = 1; i < meta.lastPage; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={buildLink(i)}
              isActive={i === meta.currentPage}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink href={buildLink(1)} isActive={meta.currentPage === 1}>
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (meta.currentPage > 3) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      const start = Math.max(2, meta.currentPage - 1);
      const end = Math.min(meta.lastPage - 1, meta.currentPage + 1);

      for (let i = start; i <= end; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={buildLink(i)}
              isActive={meta.currentPage === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (meta.currentPage < meta.lastPage - 2) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      items.push(
        <PaginationItem key={meta.lastPage}>
          <PaginationLink
            href={buildLink(meta.lastPage)}
            isActive={meta.currentPage === meta.lastPage}
          >
            {meta.lastPage}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={buildLink(Math.max(meta.currentPage - 1, meta.firstPage))}
          />
        </PaginationItem>
        {renderPageNumbers()}
        <PaginationItem>
          <PaginationNext
            href={buildLink(Math.min(meta.currentPage + 1, meta.lastPage))}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
