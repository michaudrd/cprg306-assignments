export default function Item({name, quantity, category, onSelect}){
    
    return(
        <ul>
            <li className="bg-indigo-900 m-5 p-3 max-w-sm hover:bg-blue-400" onClick={() => onSelect(name)}>
                <h2 className="text-xl font-bold">{name}</h2>
                <p>Buy {quantity} in {category}</p>
            </li>
        </ul>
    );
}