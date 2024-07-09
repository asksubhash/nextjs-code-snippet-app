import Button from "./Button";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className=" flex m-5 max-sm:mt-9 mx-8 items-center  justify-between max-sm:flex-col">
      <Logo />
      <Button />
    </div>
  );
}
