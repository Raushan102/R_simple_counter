

function CounterHistory({ CounterHistoryData }) {
  return (
    <ol>
      {CounterHistoryData.map((Data) => (
        <li key={Data.id}>
          <span>{Data.data}</span>
        </li>
      ))}
    </ol>
  );
}

export default CounterHistory;