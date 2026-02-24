import { Input } from '../ui/Input';
import type { ProofFooterProps } from '../../types';

export function ProofFooter({ items, onItemCheck, onProofInput }: ProofFooterProps) {
  return (
    <footer className="bg-white border-t border-border px-16 py-6 mt-auto">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
          Proof of Completion
        </h4>
        <div className="grid grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={(e) => onItemCheck(item.id, e.target.checked)}
                  className="w-5 h-5 border-2 border-border rounded cursor-pointer accent-accent"
                />
                <span className={`text-sm font-medium ${item.checked ? 'text-foreground' : 'text-muted'}`}>
                  {item.label}
                </span>
              </label>
              {item.checked && (
                <Input
                  placeholder="Enter proof details..."
                  value={item.proofInput || ''}
                  onChange={(value) => onProofInput(item.id, value)}
                  className="text-sm"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
