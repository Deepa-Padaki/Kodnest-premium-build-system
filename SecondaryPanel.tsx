import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card } from '../ui/Card';
import { Copy, ExternalLink, CheckCircle, AlertCircle, Image } from 'lucide-react';
import type { SecondaryPanelProps } from '../../types';

export function SecondaryPanel({
  stepTitle,
  stepDescription,
  promptText,
  onCopy,
  onBuildInLovable,
  onItWorked,
  onError,
  onAddScreenshot,
}: SecondaryPanelProps) {
  return (
    <aside className="w-80 flex-shrink-0">
      <Card padding="md" className="sticky top-6">
        <div className="mb-6">
          <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
            {stepTitle}
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            {stepDescription}
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-foreground mb-2">
            Prompt
          </label>
          <div className="relative">
            <textarea
              readOnly
              value={promptText}
              className="w-full px-4 py-3 bg-gray-50 border border-border rounded text-sm text-foreground resize-none min-h-[120px] font-mono"
            />
            <Button
              variant="secondary"
              size="sm"
              onClick={onCopy}
              className="absolute top-2 right-2"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            variant="primary"
            size="md"
            onClick={onBuildInLovable}
            className="w-full"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Build in Lovable
          </Button>

          <div className="flex gap-3">
            <Button
              variant="secondary"
              size="md"
              onClick={onItWorked}
              className="flex-1"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              It Worked
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={onError}
              className="flex-1"
            >
              <AlertCircle className="w-4 h-4 mr-2" />
              Error
            </Button>
          </div>

          <Button
            variant="secondary"
            size="md"
            onClick={onAddScreenshot}
            className="w-full"
          >
            <Image className="w-4 h-4 mr-2" />
            Add Screenshot
          </Button>
        </div>
      </Card>
    </aside>
  );
}
