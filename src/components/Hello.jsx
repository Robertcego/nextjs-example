const Hello = ({ salute = 'Hello world' }) => {
  return (
    <div>
      <h1>{salute}</h1>
    </div>
  );
};

export default Hello;
