function SignUp() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #6a11cb, #2575fc)", 
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    borderRadius: "12px",
    padding: "30px 25px",
    width: "300px",
    backgroundColor: "white",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "15px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#2575fc",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  };

  const headingStyle = {
    marginBottom: "15px",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Sign UP</h2>
        <hr />
        <form action="">
          {/* <input type="text" placeholder="Enter your name" style={inputStyle} /> */}
          <input type="email" placeholder="Enter your email" style={inputStyle} />
          <input type="password" placeholder="Enter your password" style={inputStyle} />
          <button type="submit" style={buttonStyle}>
            Sign In
          </button>
        <a href="./signin">sign in</a>
        </form>
      </div>
    </div>
  );
}

export default SignUp;