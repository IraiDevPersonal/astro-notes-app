export * from "./sidebar-provider";
export * from "./sidebar-trigger";
export * from "./sidebar-header";
export * from "./sidebar-content";
export * from "./sidebar-footer";
export * from "./sidebar-menu-title";
export * from "./sidebar-menu";
export * from "./sidebar-menu-item";

import { Sidebar as SidebarComponent } from "./sidebar";
import { SidebarHeader } from "./sidebar-header";
import { SidebarContent } from "./sidebar-content";
import { SidebarFooter } from "./sidebar-footer";
import { SidebarTrigger } from "./sidebar-trigger";
import { SidebarMenu } from "./sidebar-menu";
import { SidebarMenuItem } from "./sidebar-menu-item";
import { SidebarMenuTitle } from "./sidebar-menu-title";
import { SidebarProvider } from "./sidebar-provider";

const Sidebar = Object.assign(SidebarComponent, {
  MenuTitle: SidebarMenuTitle,
  MenuItem: SidebarMenuItem,
  Provider: SidebarProvider,
  Content: SidebarContent,
  Trigger: SidebarTrigger,
  Header: SidebarHeader,
  Footer: SidebarFooter,
  Menu: SidebarMenu,
});

export { Sidebar };
