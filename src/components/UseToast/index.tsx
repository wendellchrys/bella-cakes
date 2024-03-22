import { toast, ToastOptions } from 'react-toastify';

interface UseToastReturn {
    showToast: (title: string, type?: 'success' | 'error' | 'info' | 'warning' | 'default', autoClose?: number) => void;
}

export const useToast = (): UseToastReturn => {
    const showToast = (title: string, type: 'success' | 'error' | 'info' | 'warning' | 'default' = 'default', autoClose: number = 7000) => {
        const options: ToastOptions = {
            position: "top-center",
            autoClose,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        };

        switch (type) {
            case 'success':
                toast.success(title, options);
                break;
            case 'error':
                toast.error(title, options);
                break;
            case 'info':
                toast.info(title, options);
                break;
            case 'warning':
                toast.warn(title, options);
                break;
            default:
                toast(title, options);
        }
    };

    return { showToast };
};
