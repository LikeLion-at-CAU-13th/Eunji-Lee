import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
        <Modal />
      </Layout>
    </>
  );
}

export default App;