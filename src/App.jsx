import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  ProductsPage,
  AddProductPage,
  RegisterPage,
  VerifyPage,
  VerifyPrivatePage,
  NotesPage,
  ImportProductsPage,
  ChatsPage,
  BuyersPage,
  AddWorkerPage,
  AddClientPage,
} from './pages';

const App = () => {
  return (
    <div className="p-6 flex justify-center items-start h-screen w-full overflow-y-auto">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/new" element={<AddProductPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify/:phone" element={<VerifyPage />} />
        <Route path="/verify_private" element={<VerifyPrivatePage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/products/import" element={<ImportProductsPage />} />
        <Route path="/buyers" element={<BuyersPage />} />
        <Route path="/chats" element={<ChatsPage />} />
        <Route path="/workers/new" element={<AddWorkerPage />} />
        <Route path="/buyers/new" element={<AddClientPage />} />
      </Routes>
    </div>
  );
};

export default App;
