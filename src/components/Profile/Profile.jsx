import clsx from "clsx";
import css from "./Profile.module.css";
import { RiRadioButtonLine } from "react-icons/ri";
import { CiWifiOff } from "react-icons/ci";
import iconReact from "../../assets/react.svg";

const Profile = ({
  name,
  phone,
  email,
  status = "ofline",
  hasPhisicalAddress,
}) => {
  console.log(css);

  return (
    <div
      className={clsx(
        css.profile,
        hasPhisicalAddress && css.hasPhisicalAddress,
      )}
    >
      <img src={iconReact} alt="" />
      <h2 className={css.title}>
        Name: {name}
        {hasPhisicalAddress && "🛖"}
      </h2>
      <p className={css.title}>Phone: {phone}</p>
      <p className={css.title}>Email: {email}</p>
      <p
        // className={clsx(
        //   css.title,
        //   status === "online" && css.online,
        //   status === "offline" && css.offline,
        // )}

        className={clsx(css.title, {
          [css.online]: status === "online",
          [css.offline]: status === "offline",
        })}
      >
        Status: {status === "online" ? <RiRadioButtonLine /> : <CiWifiOff />}
      </p>
    </div>
  );
};

export default Profile;
