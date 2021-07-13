export default function Commentdop({item: {id, body}}) {
    return (
        <div>
            <p>
                {id} - {body}
            </p>
        </div>
    )
}