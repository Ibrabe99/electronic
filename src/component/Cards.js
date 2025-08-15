import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cards = () => {
  // بيانات تجريبية
  const Data = [
    { id: 1, title: "Card 1", text: "This is card 1", img: "holder.js/100px180" },
    { id: 2, title: "Card 2", text: "This is card 2", img: "holder.js/100px180" },
    { id: 3, title: "Card 3", text: "This is card 3", img: "holder.js/100px180" },
  ];

  const best_seller = Data.map((item) => {
    return (
      <Card key={item.id} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.text}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  });

  return <div style={{ display: "flex", gap: "1rem" }}>{best_seller}</div>;
};

export default Cards;
