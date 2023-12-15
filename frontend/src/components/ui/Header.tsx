import Link from 'next/link'
import Image from "next/image"
import Button from './Button'

export default function Header() {
    return(
        <header>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="#" className="-m-1.5 p-1.5">
                        <Image src="/logo.png" width="100" height="60" alt="" />
                    </Link>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <div>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input type="text" name="search" id="search" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search" />
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Button>Connect</Button>
                </div>
            </nav>
        </header>
    )
}