import { IOption } from "../components/Select";

import MoneyBox from "../assets/images/svgs/MoneyBox";
import CardPayment from "../assets/images/svgs/CardPayment";
import ReceivDollar from "../assets/images/svgs/ReceivDollar";
import Donate from "../assets/images/svgs/Donate";

const TransactionOptions: IOption[] = [
  {
    icon: MoneyBox,
    description: "Income"
  },

  {
    icon: CardPayment,
    description: "Outcome"
  },

  {
    icon: ReceivDollar,
    description: "To receive"
  },

  {
    icon: Donate,
    description: "Debt"
  },
];

export default TransactionOptions;
