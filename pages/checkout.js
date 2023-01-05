import { Row, Col } from "reactstrap";
import Cart from "../components/Cart/index";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const checkout = () => {
  const stripePromise = loadStripe("pk_test_51MMecvCCDjBjoTBIygl8dMuV84JpZEdTMnZehmkKENt0bQHtUgun0uqr1hxpppmGqYbNBZwJKm8l49Gg6SosTwvO00UlIjyHoR");
  return (
    <Row>
      <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
        <h1 style={{ margin: 20, fontSize: 20, textAlign: "center" }}>チェックアウト</h1>
        <Cart />
      </Col>
      <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Col>
    </Row>
  );
};

export default checkout;
