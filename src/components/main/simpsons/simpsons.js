import Simpson from "../simpson/simpson";

export default function Simpsons() {
        let simsons = [
            {
                name: 'Bart',
                surname: 'Simpson',
                age: 12,
                photo: 'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif'
            },
            {
                name: 'Homer',
                surname: 'Simpson',
                age: 40,
                photo: 'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png',
            },
        ]
        return (
            <div>
                {
                    simsons.map((value,index) => <Simpson key={index} item = {value}/>
                    )
                }
            </div>
        )
    }