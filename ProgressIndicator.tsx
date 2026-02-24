import type { ProgressIndicatorProps } from '../../types';

export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-muted whitespace-nowrap">
        Step {currentStep} / {totalSteps}
      </span>
      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-200 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
