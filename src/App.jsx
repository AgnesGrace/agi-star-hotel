import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Login from "./pages/Login";
import Bookings from "./pages/Bookings";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Account from "./pages/Account";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Booking from "./pages/Booking";
import { DarkModeProvider } from "./context/DarkModeContext";
import PersonalCorner from "./pages/PersonalCorner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
          }}
          containerStyle={{ zIndex: 999999 }}
        />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="login" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="rooms" element={<Rooms />} />
              <Route path="users" element={<Users />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingId" element={<Booking />} />
              <Route path="account" element={<Account />} />
              <Route path="settings" element={<Settings />} />
              <Route path="personal-corner" element={<PersonalCorner />} />

              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}
