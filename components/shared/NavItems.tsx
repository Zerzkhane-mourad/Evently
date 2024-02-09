import { headrLinks } from "@/constants"
import Link from "next/link"

const NavItems = () => {
    return (
        <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
            {
                headrLinks.map((link) => (
                    <li key={link.route}>
                        <Link href={link.route}>{link.label}</Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default NavItems