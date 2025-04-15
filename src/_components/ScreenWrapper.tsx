function ScreenWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="screen-wrapper"
      className="h-[calc(100vh-var(--header-size)-2rem)]"
    >
      {children}
    </div>
  );
}

export default ScreenWrapper;
