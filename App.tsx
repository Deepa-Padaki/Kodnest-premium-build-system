import { useState } from 'react';
import {
  TopBar,
  ContextHeader,
  PrimaryWorkspace,
  SecondaryPanel,
  ProofFooter,
} from './components/layout';
import { Card, Button } from './components/ui';
import type { Status, ProofItem } from './types';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;
  const [status, setStatus] = useState<Status>('in-progress');
  
  const [proofItems, setProofItems] = useState<ProofItem[]>([
    { id: 'ui-built', label: 'UI Built', checked: false },
    { id: 'logic-working', label: 'Logic Working', checked: false },
    { id: 'test-passed', label: 'Test Passed', checked: false },
    { id: 'deployed', label: 'Deployed', checked: false },
  ]);

  const handleItemCheck = (id: string, checked: boolean) => {
    setProofItems(items =>
      items.map(item =>
        item.id === id ? { ...item, checked } : item
      )
    );
  };

  const handleProofInput = (id: string, value: string) => {
    setProofItems(items =>
      items.map(item =>
        item.id === id ? { ...item, proofInput: value } : item
      )
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('Create a user authentication system with login and signup forms');
  };

  const handleBuildInLovable = () => {
    console.log('Building in Lovable...');
  };

  const handleItWorked = () => {
    setStatus('shipped');
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleError = () => {
    console.log('Error reported');
  };

  const handleAddScreenshot = () => {
    console.log('Adding screenshot...');
  };

  return (
    <div className="layout-container">
      <TopBar
        projectName="KodNest Premium Build System"
        currentStep={currentStep}
        totalSteps={totalSteps}
        status={status}
      />

      <div className="main-content">
        <PrimaryWorkspace>
          <ContextHeader
            title="Authentication System"
            subtitle="Build a secure user authentication flow with email verification and password reset capabilities."
          />

          <Card padding="lg" className="mb-6">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
              Component Preview
            </h3>
            <p className="text-muted mb-6">
              This is the primary workspace where your main product interaction happens. 
              All components follow the design system guidelines with consistent spacing, 
              typography, and color usage.
            </p>
            
            <div className="flex gap-4 mb-6">
              <Button variant="primary" size="md">
                Primary Action
              </Button>
              <Button variant="secondary" size="md">
                Secondary Action
              </Button>
            </div>

            <div className="p-6 bg-background border border-border rounded">
              <p className="text-sm text-muted">
                Example content area with proper spacing and borders. 
                No drop shadows, no gradients, clean and intentional design.
              </p>
            </div>
          </Card>

          <Card padding="lg">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
              Design System Principles
            </h3>
            <ul className="space-y-3 text-muted">
              <li className="flex items-start gap-3">
                <span className="text-accent">—</span>
                <span>Calm, intentional, coherent, confident aesthetic</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">—</span>
                <span>Maximum 4 colors across the entire system</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">—</span>
                <span>Consistent 8px spacing scale</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">—</span>
                <span>Serif headings, sans-serif body text</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">—</span>
                <span>150-200ms transitions, ease-in-out</span>
              </li>
            </ul>
          </Card>
        </PrimaryWorkspace>

        <SecondaryPanel
          stepTitle="Step 1: Setup"
          stepDescription="Initialize the authentication system with proper routing and state management."
          promptText="Create a user authentication system with login and signup forms, email verification, and password reset functionality. Use React with TypeScript and implement proper form validation."
          onCopy={handleCopy}
          onBuildInLovable={handleBuildInLovable}
          onItWorked={handleItWorked}
          onError={handleError}
          onAddScreenshot={handleAddScreenshot}
        />
      </div>

      <ProofFooter
        items={proofItems}
        onItemCheck={handleItemCheck}
        onProofInput={handleProofInput}
      />
    </div>
  );
}

export default App;
