import Logo from "@/assets/logo/logo.svg"
import './navbar.styles.css'
import {Button} from "@/components/button/button.component";

export const Navbar = () => {
    return (
        <div className="sticky z-40 top-0 w-full flex items-center justify-between px-40 py-4 bg-white gap-20">
            <div className="navbar-brand">
                <Logo width={273} height={160.2}/>
            </div>
            <div className="flex items-center gap-11">
              <Button title={"o mnie"}/>
              <Button title={`social media/reklamy`} variant={"secondary"}/>
              <Button title={"ui/ux design"} variant={"full"}/>
            </div>
        </div>
    )
}