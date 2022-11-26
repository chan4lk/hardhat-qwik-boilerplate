import { component$ } from '@builder.io/qwik';
export interface WaitingForTransactionMessageProps {
  txHash: string;
}
export const WaitingForTransactionMessage = component$<WaitingForTransactionMessageProps>(({ txHash }) => {
  return (
    <div className="alert alert-info" role="alert">
      Waiting for transaction <strong>{txHash}</strong> to be mined
    </div>
  );
});
