import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ComposedChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import useDarkMode from "../../hooks/useDarkMode";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;
`;

export default function SalesChart({ recentBookings, numDays }) {
  const { isDarkMode } = useDarkMode();
  const computedDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });
  const mainBookingData = computedDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalSales: recentBookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, curr) => curr.totalPrice + acc, 0),
      extrasSales: recentBookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, curr) => curr.bookingExtrasPrice + acc, 0),
    };
  });
  const colors = isDarkMode
    ? {
        text: "#fff",
        background: "#18212f",
      }
    : {
        text: "#526854ff",
        background: "#fff",
      };
  return (
    <StyledSalesChart>
      <Heading as="h2">
        Total Sales from {format(computedDates[0], "MMMM dd")} to{" "}
        {format(computedDates[computedDates.length - 1], "MMMM dd")}
      </Heading>
      <ResponsiveContainer style={{ width: "100%", height: "100%" }}>
        <ComposedChart
          responsive
          reverseStackOrder
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
          data={mainBookingData}
        >
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            width="auto"
            unit="€"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <Tooltip />
          <Legend />
          <CartesianGrid />
          <Bar
            dataKey="totalSales"
            fill="#37b24d"
            stackId="a"
            activeBar={{ fill: "#d3f9d8", stroke: "green" }}
            unit="€"
            name="Total Sales"
          />
          <Bar
            dataKey="extrasSales"
            stackId="a"
            fill="#f76707"
            activeBar={{ fill: "#d9480f", stroke: "#f59f00" }}
            unit="€"
            name="Booking Extras"
          />
          <Line
            type="monotone"
            dataKey="totalSales"
            stroke="#f76707"
            legendType="none"
            tooltipType="none"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}
