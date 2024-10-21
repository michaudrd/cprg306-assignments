export default function Item({name, quantity, category}){
    
    return(
        <ul>
            <li className="bg-indigo-900 m-5 p-3 max-w-sm">
                <h2 className="text-xl font-bold">{name}</h2>
                <p>Buy {quantity} in {category}</p>
            </li>
        </ul>
    );
}