import React, { Suspense } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Residencies from "./pages/Residencies/Residencies";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "react-query/devtools";
import "react-toastify/dist/ReactToastify.css";
import Residency from "./pages/Residency/Residency";
import Lands from "./pages/Lands/Lands";
import Land from "./pages/Land/Land";
import AboutUs from "./pages/AboutUs/AboutUs";
import Website from "./pages/Website";
import NewProjects from "./pages/NewProjects/NewProjects";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Website />} />
              <Route path="/residencies">
                <Route index element={<Residencies />} />
                <Route path=":propertyId" element={<Residency />} />
              </Route>
              <Route path="/lands">
                <Route index element={<Lands />} />
                <Route path=":landId" element={<Land />} />
              </Route>
              <Route path="/lands">
                <Route index element={<NewProjects />} />
                <Route path=":landId" element={<Land />} />
              </Route>
              <Route path="/aboutus" element={<AboutUs />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
