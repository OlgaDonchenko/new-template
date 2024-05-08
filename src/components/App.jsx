import PaymentList from "./PaymentList";
import date from "../payments.json";
import PaymentTitle from "./PaymentTitle";

export default function App() {
  return (
    <>
      <PaymentTitle text="Paymentlist" />
      <PaymentList payments={date} />
    </>
  );
}
