import styled from "styled-components";
import useRecentBookings from "../bookings/hooks/useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStays from "../bookings/hooks/useRecentStays";
import Stats from "./Stats";
import SalesChart from "./SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  const { recentBookings, isLoading, numDays } = useRecentBookings();
  const {
    recentStays,
    confirmedBookings,
    isLoading: loadingStays,
  } = useRecentStays();
  if (isLoading) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        recentBookings={recentBookings}
        confirmedBookings={confirmedBookings}
      />
      <SalesChart numDays={numDays} recentBookings={recentBookings} />
    </StyledDashboardLayout>
  );
}
