import Button from "./Button";
import { useNavigate } from "react-router-dom";
function NavbarButtons({ CSS }) {
  const navigate = useNavigate();
  return (
    <div className={CSS}>
      <Button onClick={() => navigate("/login")} text={"Log In"} type={"secondary"} size={"sm"} />
      <Button
        onClick={() => navigate("/dashboard")}
        text={"Start a board"}
        type={"primary"}
        size={"sm"}
      />
    </div>
  );
}

export default NavbarButtons;
