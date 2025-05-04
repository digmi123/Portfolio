function ScreenWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="screen-wrapper"
      className="max-md:h-auto h-[calc(100vh-var(--header-size)-2rem)]"
    >
      {children}
    </div>
  );
}

export default ScreenWrapper;
