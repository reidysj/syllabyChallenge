import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Book Collaboration Station</h1>
      <Link to="register">Sign Up</Link>
      <Link to="login">Log In</Link>
    </>
  );
}
