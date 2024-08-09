import { Route, Routes } from "react-router-dom";
import { History } from "../pages/history";
import { Home } from "../pages/home";
import { DefaultLayout } from "../components/screen";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
