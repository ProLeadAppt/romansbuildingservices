interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  // Auth guard removed - implement your own auth system here
  // For now, just render children directly
  // If you need authentication, implement your own solution
  return <>{children}</>;
};
