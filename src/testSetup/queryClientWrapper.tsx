const queryClient = new QueryClient();
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClientWrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default queryClientWrapper;
