import Link from 'next/link'

export default function Header() {
    return (

            <ul className="mx-auto">
                <li className="flex">
                    <Link href="/tutorial">
                        <a>Tutorial</a>
                    </Link>
                </li>
                <li className="flex">
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
    )
}