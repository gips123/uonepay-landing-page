'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import Loading from '@/components/ui/Loading';
import LoadingMinimal from '@/components/ui/LoadingMinimal';
import LoadingWithProgress from '@/components/ui/LoadingWithProgress';
import LoadingBranded from '@/components/ui/LoadingBranded';

type LoadingType = 'default' | 'minimal' | 'progress' | 'branded';

interface LoadingContextType {
  isLoading: boolean;
  loadingType: LoadingType;
  setIsLoading: (loading: boolean) => void;
  setLoadingType: (type: LoadingType) => void;
  showLoading: (type?: LoadingType) => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingType, setLoadingType] = useState<LoadingType>('branded');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Simulate loading time - you can adjust this based on your needs
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds loading for branded experience

    return () => clearTimeout(timer);
  }, []);

  const showLoading = (type: LoadingType = 'branded') => {
    setLoadingType(type);
    setIsLoading(true);
  };

  const hideLoading = () => setIsLoading(false);

  if (!mounted) {
    return <LoadingBranded />;
  }

  const LoadingComponent = () => {
    switch (loadingType) {
      case 'minimal':
        return <LoadingMinimal />;
      case 'progress':
        return <LoadingWithProgress />;
      case 'branded':
        return <LoadingBranded />;
      default:
        return <Loading />;
    }
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        loadingType,
        setIsLoading,
        setLoadingType,
        showLoading,
        hideLoading,
      }}
    >
      {/* Loading Overlay - shown over everything */}
      {isLoading && (
        <div className='fixed inset-0 z-[9999]'>
          <LoadingComponent />
        </div>
      )}

      {/* Main content - hidden when loading */}
      <div className={isLoading ? 'hidden' : 'block'}>{children}</div>
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}
