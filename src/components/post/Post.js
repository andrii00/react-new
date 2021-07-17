export default function Post({item: {id, title}}) {
    return (
        <div>
            <h4>{id} - {title}</h4>
        </div>
    )
}
