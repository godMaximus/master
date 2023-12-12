import React from "react";
import { v4 as uuidv4 } from 'uuid';
import emailjs from '@emailjs/browser';

import { Alert, Button, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Modal } from "reactstrap";
import ReactDatetime from "react-datetime";


function BookingModal({ opnedModal, setOpnedModal, bookingType }) {
    const textLabel = bookingType.includes('session') ? 'Additional informations' : 'Video description';
    const textPlaceholder = bookingType.includes('session') ? 'Any other informations' : 'put your video description here';
    const [showAlert, setShowAlert] = React.useState(false);
    const [mailUnvalid, setMailUnvalid] = React.useState(false);
    const [paymentPopup, setPaymentPopup] = React.useState(false);
    const [code, setCode] = React.useState(false);
    const [required, setRequired] = React.useState(false);
    const [name, setName] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [desc, setDesc] = React.useState('');
    const [date, setDate] = React.useState(null);

    const isEmailValid = (email) => {
        // Regular expression for a valid email address
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
        // Use the test method to check if the email matches the regex pattern
        return emailRegex.test(email);
      }

    const cleareForm = () => {
        setRequired(false);
        setDate(null);
        setShowAlert(false);
        setOpnedModal(false);
        setName('');
        setMail('');
        setPhone('');
        setDesc('');

    }


    const sendMail = () => {
        setCode(uuidv4());
        if (name && mail && phone && (bookingType === 'video' || date)) {
            if (isEmailValid(mail))
            {emailjs.send("masteredgeswebsite@gmail", "template_4g1stge", {
                booking_type: bookingType,
                name,
                mail,
                phone,
                date_title: bookingType.includes('session') ? 'Sub resuested date' : '',
                date: bookingType.includes('session') ? date.format("MMMM Do YYYY") : '',
                description_title: textLabel,
                desc,
                code
            }, 'TL6lCGJLCyHpfxq44'
            );
            cleareForm();
            setOpnedModal(false);
            setPaymentPopup(true);}
            else setMailUnvalid(true);
        }
        else setRequired(true);
    }

    return (<>
        <Modal
            isOpen={opnedModal}
            toggle={() => {cleareForm();
                setOpnedModal(false);}}
            modalClassName="modal-register"
        >
            <div className="modal-header no-border-header text-center">
                <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => {cleareForm();
                        setOpnedModal(false);}}
                >
                    <span aria-hidden={true}>×</span>
                </button>
                <h6 className="text-muted"></h6>
                <h3 className="modal-title text-center">Escort World</h3>
                <p>Booking A real time session</p>
            </div>
            <div className="modal-body">
                <FormGroup>
                    <label>Name</label>
                    <Input value={name}
                        onChange={event => setName(event.target.value)} placeholder="Name" type="text" />
                </FormGroup>
                <FormGroup>
                    <label>Email</label>
                    <Input value={mail}
                        onChange={event =>{ setMail(event.target.value);setMailUnvalid(!isEmailValid(event.target.value))}} placeholder="Email" type="email" />
                </FormGroup>
                <Alert color="danger" isOpen={mailUnvalid} toggle={() => setMailUnvalid(false)}>
                        <b>Unvalid Email</b> 
                    </Alert>
                <FormGroup>
                    <label>Phone</label>
                    <Input value={phone}
                        onChange={event => setPhone(event.target.value)} placeholder="phone" type="tel" />
                </FormGroup>

                {bookingType.includes('session') && <FormGroup>
                    <label>Booking Estimated Date</label>

                    <InputGroup className="date" id="datetimepicker">
                        <ReactDatetime
                            inputProps={{
                                placeholder: "Booking Estimated Date",
                            }}
                            onChange={(d) => { setShowAlert(true); setDate(d) }}
                        />
                        <InputGroupAddon addonType="append">
                            <InputGroupText>
                                <span className="glyphicon glyphicon-calendar">
                                    <i aria-hidden={true} className="fa fa-calendar" />
                                </span>
                            </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>

                    <Alert color="danger" isOpen={showAlert} toggle={() => setShowAlert(false)}>
                        <b>Note</b> that the estimated date is not final and could <br /> be adjusted based on <b>master </b> availability
                    </Alert>
                </FormGroup>}
                <FormGroup>
                    <label>{textLabel} </label>
                    <Input type="textarea" name="info" placeholder={textPlaceholder} value={desc}
                        onChange={event => setDesc(event.target.value)} />
                </FormGroup>
                <Button block className="btn-round" color="default" onClick={() => {cleareForm();
                        setOpnedModal(false);}}>
                    Confirm Order
                </Button>
                <Alert color="danger" isOpen={required} toggle={() => setRequired(false)}>
                    <b> all fields are required ! </b>
                </Alert>
            </div>

        </Modal>
        <Modal
            isOpen={paymentPopup}
            toggle={() => setPaymentPopup(false)}
            modalClassName="modal-register"
        >
            <div className="modal-header no-border-header text-center">
                <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => setPaymentPopup(false)}
                >
                    <span aria-hidden={true}>×</span>
                </button>
                <h6 className="text-muted"></h6>
                <h3 className="modal-title text-center">Payment Method</h3>
                {/* <p>Booking A real time session</p> */}
            </div>
            <div className="modal-body">
                Now to confirm your Booking, you need to make a 40£ trbuit in wishtinder and include the unique code below in your trbute message.
                if you don't make a trbuite or you don't include the unique code, your booking won't be confirmed <br /><br />
                <FormGroup>
                    <label>Code</label>
                    <Input defaultValue={code} disabled />
                </FormGroup>
                <br /><br />
                <Button block className="btn-round" color="default" href="https://www.wishtender.com/masteredges" onClick={() => paymentPopup(false)}>
                    Make the trbuite
                </Button>
            </div>

        </Modal>
    </>);
}

export default BookingModal