import { component$, $, QRL } from '@builder.io/qwik';
export interface NetworkErrorMessageProps {
  message: string;
  dismiss: QRL<() => void>;
}
export const NetworkErrorMessage = component$<NetworkErrorMessageProps>(({ message, dismiss }) => {
  const dismiss$ = $(() => dismiss());
  return (
    <div className="alert alert-danger" role="alert">
      {message}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick$={() => $(() => dismiss$())}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
});
