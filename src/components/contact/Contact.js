import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ErrorMessage from "./ErrorMessage";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert'

const schema = yup.object().shape({
	name: yup.string().required("Name is required"),
	phone: yup.string().required("Phone is required"),
	message: yup.string().required("Message is required")
});

function Contact() {


	const [showAlert, setShowAlert] = useState(false);



	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

	function onSubmit(data) {
		console.log("data", data);

		setShowAlert(true);
	}

	return (

		<div>


			<Form onSubmit={handleSubmit(onSubmit)} className="contactForm">

				<div className="contactForm__heading">
					<h2 className="contactForm__heading--headingMain">Contact Us</h2>
				</div>



				<div className="contactForm__row">
					<Form.Group as={Row}>
						<Col sm="2">
							<Form.Label className="contactForm__row__label">Name</Form.Label>
						</Col>

						<Col sm="10">
							<Form.Control name="name" placeholder="Enter your full name.." ref={register} className="placeHolderText" />
							{errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
						</Col>
					</Form.Group>
				</div>

				<div className="contactForm__row">
					<Form.Group as={Row}>
						<Col sm="2">
							<Form.Label className="contactForm__row__label">Phone</Form.Label>
						</Col>

						<Col sm="10">
							<Form.Control name="phone" placeholder="Enter your phone number" ref={register} pattern={'/^\(\+\[0-9]{2}\)\s\[0-9]{8}$/g'} />
							{errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
						</Col>
					</Form.Group>
				</div>


				<div className="contactForm__row">
					<Form.Group as={Row}>
						<Col sm="2">
							<Form.Label className="contactForm__row__label">Query Type</Form.Label>
						</Col>

						<Col sm="10">
							<Form.Control as="select" className="placeHolderText">
								<option className="placeHolderText">Enquiry</option>
								<option className="placeHolderText">Complaint</option>
								<option className="placeHolderText">Compliment</option>
								<option className="placeHolderText">General Message</option>
							</Form.Control>
						</Col>
					</Form.Group>
				</div>

				<div className="contactForm__row">
					<Form.Group as={Row}>
						<Col sm="2">
							<Form.Label className="contactForm__row__label">Message</Form.Label>
						</Col>
						<Col sm="10">
							<Form.Control as="textarea" rows="4" name="message" placeholder="Please write your message here.." ref={register} className="placeHolderText" />
							{errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
						</Col>
					</Form.Group>
				</div>


				{showAlert ? <p >Form Submitted!</p> : null}
				<div className="contactForm__btn">
					<Button type="submit" className="contactForm__btn--sendFormbtn" >Submit</Button>
				</div>


			</Form >


		</div>
	);
}

export default Contact;