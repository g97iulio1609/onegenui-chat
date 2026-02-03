export const KEYFRAMES = `
  @keyframes unified-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes unified-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }

  .unified-progress {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .plan-section {
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%);
    backdrop-filter: blur(12px);
    border-radius: 16px;
    border: 1px solid rgba(148, 163, 184, 0.15);
    padding: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  .plan-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .plan-header-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .plan-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
    color: #fff;
    flex-shrink: 0;
  }

  .plan-header-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .plan-label {
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: rgba(148, 163, 184, 0.8);
  }

  .plan-goal {
    font-size: 14px;
    font-weight: 600;
    color: #f1f5f9;
    line-height: 1.3;
  }

  .parallel-badge {
    margin-left: 8px;
    padding: 2px 6px;
    border-radius: 4px;
    background: rgba(139, 92, 246, 0.2);
    color: #a78bfa;
    font-size: 9px;
    font-weight: 600;
  }

  .progress-badge {
    font-size: 12px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 20px;
    background: rgba(59, 130, 246, 0.2);
    color: #60a5fa;
    border: 1px solid rgba(59, 130, 246, 0.3);
  }

  .progress-bar {
    height: 3px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.1);
    margin-bottom: 14px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    border-radius: 2px;
    background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
    transition: width 0.4s ease;
  }

  .steps-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .step-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 10px;
    border-radius: 8px;
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid transparent;
    transition: all 0.25s ease;
  }

  .step-active {
    background: rgba(59, 130, 246, 0.12);
    border-color: rgba(59, 130, 246, 0.4);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.15);
  }

  .step-completed {
    opacity: 0.6;
  }

  .step-pending {
    opacity: 0.75;
  }

  .step-status {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 11px;
    background: rgba(148, 163, 184, 0.1);
    color: rgba(148, 163, 184, 0.5);
    flex-shrink: 0;
  }

  .status-active {
    background: rgba(59, 130, 246, 0.2);
    color: #60a5fa;
  }

  .status-completed {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
  }

  .step-number {
    font-size: 10px;
    font-weight: 700;
  }

  .step-content {
    flex: 1;
    min-width: 0;
  }

  .step-task {
    font-size: 12px;
    font-weight: 500;
    color: #e2e8f0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .agent-badge {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 9px;
    font-weight: 600;
    padding: 3px 6px;
    border-radius: 5px;
    background: rgba(148, 163, 184, 0.1);
    color: rgba(148, 163, 184, 0.7);
    text-transform: uppercase;
    letter-spacing: 0.3px;
    flex-shrink: 0;
  }

  .badge-active {
    background: rgba(59, 130, 246, 0.15);
    color: #60a5fa;
  }

  .spinner {
    animation: unified-spin 1s linear infinite;
  }

  /* Tool section */
  .tool-section {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .tool-section-nested {
    margin-top: 4px;
    padding-left: 16px;
    border-left: 2px solid rgba(59, 130, 246, 0.3);
  }

  .tool-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
  }

  .tool-icon {
    width: 28px;
    height: 28px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(59, 130, 246, 0.2);
    color: #60a5fa;
    flex-shrink: 0;
  }

  .tool-content {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  .tool-name {
    font-size: 13px;
    font-weight: 500;
    color: #f1f5f9;
  }

  .tool-message {
    font-size: 11px;
    color: rgba(148, 163, 184, 0.8);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .tool-indicator {
    display: flex;
    gap: 3px;
  }

  .tool-indicator .dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #60a5fa;
    animation: unified-bounce 1s ease-in-out infinite;
  }
`;
