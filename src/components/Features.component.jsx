function Features({ children: value, label }) {
  return (
    <span>
      <strong>{label}</strong>
      {value}
    </span>
  );
}

export { Features };
