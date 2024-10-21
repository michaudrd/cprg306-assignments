import ItemList from "./item-list";

export default function Page(){
    return(
        <main className="bg-indigo-950">
            <h1 className="text-4xl font-bold mb-5 ml-2">Shopping List</h1>
            <ItemList />
        </main>
    );
}