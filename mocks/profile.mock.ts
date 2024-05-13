import dayjs from "dayjs";
import minMax from "dayjs/plugin/minMax";

dayjs.extend(minMax);

const MOCK_SUBSRIPTIONS = [
  {
    name: "gayshit impact",
    price: 450,
    paymentStartedAt: "24.01.2020",
    nextPayment: dayjs().add(1, "month").add(1, "week"),
  },
  {
    name: "yandex music",
    price: 300,
    paymentStartedAt: "24.04.2020",
    nextPayment: dayjs().add(1, "month").add(5, "day"),
  },
  {
    name: "boosty ikakprosto",
    price: 300,
    paymentStartedAt: "24.01.2020",
    nextPayment: dayjs().add(1, "month").add(16, "day"),
  },
  {
    name: "boosty ИБ",
    price: 200,
    paymentStartedAt: "24.01.2020",
    nextPayment: dayjs().add(1, "month").add(3, "week"),
  },
  {
    name: "кредит компьютер",
    price: 20300,
    paymentStartedAt: "24.01.2020",
    nextPayment: dayjs().add(1, "month").add(2, "day"),
  },
];

export const MOCK_PROFILE = {
  id: 24123,
  name: "Jared",
  totalPayments: MOCK_SUBSRIPTIONS.reduce((prev, cur) => prev + cur.price, 0),
  subscriptions: MOCK_SUBSRIPTIONS,
  nearestPayment: dayjs.min(MOCK_SUBSRIPTIONS.map((item) => item.nextPayment)),
};
