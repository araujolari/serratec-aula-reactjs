import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home/Index";
import { QuemSomos } from "../pages/QuemSomos/Index";
import { NotFound } from "../pages/NotFound";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={`/quemsomos`} element={<QuemSomos />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
