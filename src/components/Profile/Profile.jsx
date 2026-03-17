import clsx from "clsx";
import "./Profile.css";

const Profile = ({
  name,
  phone,
  email,
  status = "ofline",
  hasPhisicalAddress,
}) => {
  // console.log(props);

  return (
    <div
      className={clsx("profile", hasPhisicalAddress && "hasPhisicalAddress")}
    >
      <h2>
        Name: {name}
        {hasPhisicalAddress && "🛖"}
      </h2>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Status: {status === "online" ? "✅" : "❌"}</p>
    </div>
  );
};

export default Profile;
