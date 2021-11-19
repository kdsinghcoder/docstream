import React, { useState, useRef } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Input from "@material-tailwind/react/Input";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverHeader from "@material-tailwind/react/PopoverHeader";
import PopoverBody from "@material-tailwind/react/PopoverBody"
import Alert from "@material-tailwind/react/Alert";


import FeedBack from "./FeedBack";

function ShareModal(props) {
    const [showModal, setShowModal] = React.useState(false);
    const buttonRef = useRef();
    return (
        <>
            <Button
                color="lightBlue"
                buttonType="filled"
                size="regular"
                className="md:inline-flex h-10"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                onClick={(e) => setShowModal(true)}
            >
                <Icon name="people" size="md" />
                {props.text}
            </Button>



            <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)} className="text-sm m-10">
                    Share
                </ModalHeader>
                <ModalBody>
                    {/* <p className="text-base leading-relaxed text-gray-600 font-normal">
                        <ul className="px-12">
                            <li>Your link will expire in 24hr</li>
                            <li>Your link will expire in 24hr</li>
                            <li>Your link will expire in 24hr</li>

                        </ul>
                    </p> */}
                    <Alert color="blueGray">http://localhost:3000/karan</Alert>
                </ModalBody>
                <ModalFooter>


                    <Button color="lightBlue" ref={buttonRef} ripple="light" onClick={() => navigator.clipboard.writeText('http://localhost:3000/karan')}>
                        Copy Link
                    </Button>

                    <Popover placement="right" ref={buttonRef}>
                        <PopoverContainer>
                            <PopoverHeader>Link copied</PopoverHeader>
                            <PopoverBody>
                                Give Us your valuable feedback
                                <br>
                                
                                </br>
                                <Button
                                    color="green"
                                    buttonType="filled"
                                    size="sm"
                                    rounded={false}
                                    block={false}
                                    iconOnly={false}
                                    ripple="light"
                                >
                                    Feedback
                                </Button>
                            </PopoverBody>
                        </PopoverContainer>
                    </Popover>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ShareModal
