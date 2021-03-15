import useUser from "../hooks/use-user";

export default function Sidebar() {
  const response = useUser();
  console.log("user", response);
  return <p>I am the side bar</p>;
}
