import { IoMdBriefcase } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { FaMoneyBill } from "react-icons/fa";

import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

export default function Stats({ recentBookings, confirmedBookings }) {
  const totalNumberOfBookings = recentBookings.length;
  const totalCustomersIn = confirmedBookings?.length;
  const totaSales = recentBookings?.reduce(
    (acc, curr) => acc + curr.totalPrice,
    0,
  );
  console.log(totaSales, " totalsales");
  return (
    <>
      <Stat
        icon={<IoMdBriefcase />}
        title="Our Recent Bookings"
        value={totalNumberOfBookings}
        color="primary"
      />
      <Stat
        icon={<IoPeople />}
        title="Customers currently In"
        value={totalCustomersIn || 0}
        color="blue"
      />
      <Stat
        icon={<FaMoneyBill />}
        title="Sales"
        value={formatCurrency(totaSales)}
        color="yellow"
      />
    </>
  );
}
