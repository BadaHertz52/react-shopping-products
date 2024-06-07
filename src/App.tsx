import '@styles/App.css';
import '@styles/reset.css';
import '@styles/global.css';
import { Header, Layout} from '@components/index';

import { ProductListPage } from './pages';


function App() {
  return (
    <>
      <Header />
      <Layout>
        <ProductListPage />
      </Layout>
    </>
  );
}

export default App;
