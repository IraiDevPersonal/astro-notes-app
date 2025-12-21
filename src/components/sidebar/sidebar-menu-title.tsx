type SidebarMenuTitleProps = {
  children: React.ReactNode;
};

export const SidebarMenuTitle = ({ children }: SidebarMenuTitleProps) => {
  return (
    <h2
      aria-label="Sidebar Menu Title"
      className="font-semibold text-muted-foreground"
    >
      {children}
    </h2>
  );
};
