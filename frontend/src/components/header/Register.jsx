import Nav from "./Nav";
import NewUserForm from "../../modals/NewUserForm";

export default function Register() {
  return (
    <>
      <Nav />
      <div
        style={{
          backgroundColor: "#1b3b50",
          alignContent: "center",
          paddingTop: "20vh",
          paddingBottom: "34vh",
        }}
      >
        <NewUserForm />
      </div>
    </>
  );
}
