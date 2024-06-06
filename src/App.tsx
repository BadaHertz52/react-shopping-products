import '@styles/App.css';
import '@styles/reset.css';
import '@styles/global.css';
import { Header, Layout, PageRequestError } from '@components/index';
import { ProductListPageSkeleton } from '@pages/ProductListPage/Skeleton';
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const ProductListPage = lazy(() => import('@pages/ProductListPage'));

function App() {
  return (
    <>
      <Header />
      <Layout>
        <ErrorBoundary FallbackComponent={({ error }) => <PageRequestError error={error} />}>
          <Suspense fallback={<ProductListPageSkeleton />}>
            <ProductListPage />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </>
  );
}

export default App;
