import { CardWrapper } from "./styles";

export function Card({ name, time }) {
  return (
    <CardWrapper bgColor="#27187e">
      <strong>{name}</strong>
      <small>{time}</small>
    </CardWrapper>
  );
}
