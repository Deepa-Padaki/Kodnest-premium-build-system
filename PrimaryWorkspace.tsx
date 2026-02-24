import type { ReactNode } from 'react';

interface PrimaryWorkspaceProps {
  children: ReactNode;
}

export function PrimaryWorkspace({ children }: PrimaryWorkspaceProps) {
  return (
    <main className="flex-1 min-w-0">
      {children}
    </main>
  );
}
