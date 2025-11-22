function InfoCard({ title, text }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        width: "320px",
        margin: "15px auto",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.15)",
      }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default InfoCard;
