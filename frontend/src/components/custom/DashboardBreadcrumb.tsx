"use client";

import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function DashboardBreadcrumb() {
  const pathname = usePathname();

  // Generate breadcrumb items based on current path
  const getBreadcrumbItems = () => {
    const pathSegments = pathname?.split("/").filter(Boolean) || [];

    const items = [
      {
        label: "Home",
        href: "/dashboard",
      },
    ];

    if (pathSegments[0] === "dashboard") {
      if (pathSegments[1]) {
        // Project route: /dashboard/[id]
        items.push({
          label: `Dashboard`,
          href: `/dashboard/${pathSegments[1]}`,
        });
      }
    }

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.href}>
            {index === breadcrumbItems.length - 1 ? (
              <BreadcrumbItem>
                <BreadcrumbPage className="text-slate-900 dark:text-white font-medium">
                  {item.label}
                </BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem>
                <BreadcrumbLink
                  asChild
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            )}
            {index < breadcrumbItems.length - 1 && (
              <BreadcrumbSeparator className="text-slate-400 dark:text-slate-600" />
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
