import React, { createContext, useState } from 'react';

import { Toast, ToastService } from '../toastTypes';

export const ToastContext = createContext<ToastService>({} as ToastService);

export function ToastProvider({ children }: React.PropsWithChildren<{}>) {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  function showToast(_toast: Toast) {
    setToast(_toast);
  }

  function hideToast() {
    setToast(null);
  }

  const value = {
    toast,
    showToast,
    hideToast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}
