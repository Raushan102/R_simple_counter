

export default function HistoryItem({id,data})
{
    return <li key={id}>
        <span>{data}</span>
    </li>
}