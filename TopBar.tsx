import { ProgressIndicator } from '../ui/ProgressIndicator';
import { StatusBadge } from '../ui/StatusBadge';
import type { TopBarProps } from '../../types';

export function TopBar({ projectName, currentStep, totalSteps, status }: TopBarProps) {
  return (
    <header className="h-16 bg-white border-b border-border px-16 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold text-foreground font-serif">
          {projectName}
        </h1>
      </div>
      
      <div className="flex items-center">
        <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
      </div>
      
      <div className="flex items-center">
        <StatusBadge status={status} />
      </div>
    </header>
  );
}
