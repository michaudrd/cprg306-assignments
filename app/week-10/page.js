 "use client"
 
 import Link from "next/link";
 import { useUserAuth } from "./_utils/auth-context";

 export default function LoginPage() {

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn(){
        try{
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut(){
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    console.dir(user);
    return(
        <main>
            <header>
                <h1 className="text-3xl p-3 font-bold">Shopping List App</h1>
            </header>
            {user ? (
                <div>
                    <p className="px-3 text-xl">Welcome, {user.displayName} ({user.email})</p>
                    <div className="px-3 text-xl hover:underline">
                        <Link href="/week-10/shopping-list">Continue to your Shopping List</Link>
                    </div>
                    <div className="px-3">
                        <button 
                            type="button"
                            onClick={handleSignOut} 
                            className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4">Sign Out
                        </button>
                    </div>       
                </div>
            
            ) : (
                <div className="px-3">
                    <button 
                        type="button"
                        onClick={handleSignIn} 
                        className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4">Sign In with GitHub
                    </button>
                </div>
            )}
        </main>
    );
 }