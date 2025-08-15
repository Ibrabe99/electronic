import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaUser, FaPhoneAlt, FaRegCommentDots } from 'react-icons/fa';
import './Send_me.css';

const Send_me = () => {
  return (
    <section className="send-me" id='send-me'>
      <div className="container">
        <div className="send-me-box">
          <div className="send-me-text">
            <h1>Contact Us</h1>
            <p>Fill in your details and we will contact you as soon as possible.</p>
          </div>

          <Form>
            <Form.Group className="mb-3 input-group" controlId="formName">
              <span className="input-icon"><FaUser /></span>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>

            <Form.Group className="mb-3 input-group" controlId="formPhoneNumber">
              <span className="input-icon"><FaPhoneAlt /></span>
              <Form.Control type="tel" placeholder="Enter your phone number" />
            </Form.Group>

            <Form.Group className="mb-3 input-group" controlId="formMessage">
              <span className="input-icon"><FaRegCommentDots /></span>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message (optional)" />
            </Form.Group>

            <Button variant="primary" type="submit" className="submit-btn">
              Submit Request
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Send_me;
