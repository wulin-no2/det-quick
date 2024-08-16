import { useEffect, useState } from 'react';
import { pubSub } from '../utils/pubSub'
import globalSettingsConfig from '../globalSettingsConfig';

export function useGlobalUIState() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ open: false, message: '' });

  useEffect(() => {
    const showLoading = (isLoading) => setLoading(isLoading);
    const showToast = (message) => setToast({ open: true, message });
    const hideToast = () => setToast({ open: false, message: '' });

    pubSub.subscribe(globalSettingsConfig.event.SHOW_LOADING, showLoading);
    pubSub.subscribe(globalSettingsConfig.event.SHOW_TOAST, showToast);
    pubSub.subscribe(globalSettingsConfig.event.HIDE_TOAST, hideToast);


    return () => {
      pubSub.unsubscribe(globalSettingsConfig.event.SHOW_LOADING, showLoading);
      pubSub.unsubscribe(globalSettingsConfig.event.SHOW_TOAST, showToast);
        pubSub.unsubscribe(globalSettingsConfig.event.HIDE_TOAST, hideToast);
    };
  }, []);

  return { loading , toast };
}

