import { Sidebar } from "./sidebar";

export function AppSidebar({
  pathname,
  children,
}: {
  pathname: string;
  children: React.ReactNode;
}) {
  return (
    <Sidebar.Provider>
      <Sidebar>
        <Sidebar.Header>
          <span>Notes App</span>
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.MenuTitle>Menu</Sidebar.MenuTitle>
          <Sidebar.Menu>
            <Sidebar.MenuItem href="/" isActive={pathname === "/"}>
              Home
            </Sidebar.MenuItem>
            <Sidebar.MenuItem href="/about" isActive={pathname === "/about"}>
              About
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Content>
        <Sidebar.Footer>Usuario</Sidebar.Footer>
      </Sidebar>
      {children}
    </Sidebar.Provider>
  );
}
