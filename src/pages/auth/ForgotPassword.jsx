import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password as This Email Doesn't Exist");
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body className="w-30 text-center mt-3">
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <div className="d-flex justify-content-center">
                <Form.Control
                  className="w-50 "
                  type="email"
                  ref={emailRef}
                  required
                  placeholder="Enter Your Email"
                />
              </div>
            </Form.Group>
            <br />
            <Button disabled={loading} className="w-25 " type="submit">
              Reset Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
