import { Calendar, DiamondPlus, FileChartColumn, Home, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Relatorio",
    url: "/relatorio",
    icon: FileChartColumn,
  },
  {
    title: "Nova Palavrar",
    url: "#",
    icon: DiamondPlus,
  },
  {
    title: "Lista de Palavras",
    url: "#",
    icon: Search,
  },
]

export function AppSidebar() {
  return (
    <Sidebar
      className="
        w-80 min-w-80 max-w-80 
        sm:w-72 min-w-72 max-w-72
        md:w-64 min-w-64 max-w-64
        lg:w-56 min-w-56 max-w-56
        xl:w-15vw min-w-15vw max-w-15vw
      "
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
