import "./footer.style.css"
import {Button} from "@/components/button/button.component";

export const Footer = () => {
  return (
    <div className={'footer z-40 top-0 w-full flex items-center justify-between px-40 py-4'}>
      <div className={'left-side'}>
        <h1>title</h1>
        <p>span</p>
        <div className={'urls'}>
          <div>email</div>
          <div>phone</div>
        </div>
      </div>
      <div className={'right-side flex items-center gap-11'}>
          <Button title={"o mnie"}/>
          <Button title={`social media/reklamy`} variant={"secondary"}/>
          <Button title={"ui/ux design"} variant={"full"}/>
      </div>
    </div>
  )
}