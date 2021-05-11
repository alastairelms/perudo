import Link from 'next/link'
import Header from '../../components/header'


export default function JoinGame() {
    return (
        <>
        <Header />
            <div>
                <h1>Welcome, [name]. Let's get you set up.</h1>
                <h3>Do you already have a game code?</h3>

                <form>
                    <div>
                        <input type="text" placeholder="If so, that goes here..."/>
                    </div>
                    <div>
                        <button>Join</button>
                    </div>
                </form>

                <h3>Or create a new game</h3>
                    <div>
                        <Link href="/game/new">
                            <button className="bg-white p-2 rounded-md">Create</button>
                        </Link>
                    </div>
            </div>
        </>
    )
}