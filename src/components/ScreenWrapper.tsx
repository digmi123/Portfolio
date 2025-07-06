function ScreenWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="screen-wrapper"
      className="max-md:h-auto min-h-[calc(100vh-var(--header-size)-2rem)] flex flex-col"
    >
      {children}
    </div>
  );
}

export default ScreenWrapper;
