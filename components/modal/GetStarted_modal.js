import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import Link from 'next/link'
import Alert from "@material-tailwind/react/Alert";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverHeader from "@material-tailwind/react/PopoverHeader";
import PopoverBody from "@material-tailwind/react/PopoverBody";


function GetStarted_modal(props) {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <Button
                color="green"
                type="button"
                onClick={(e) => setShowModal(true)}
                // onClick={(e) => setShowModal(true)}
                ripple="light"
            >
                {props.text}
            </Button>

            <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
                <br></br>
                <ModalHeader toggler={() => setShowModal(false)}>
                    Enter your prefered url
                </ModalHeader>
                <ModalBody>
                    <Alert color="lightGreen">docstreme/xxxxxxxx</Alert>
                    <Input
                        type="text"
                        color="green"
                        size="lg"
                        outline={true}
                        placeholder="Enter xxxxxxxx"
                    />
                    <br></br>
                    <Input
                        type="password"
                        color="green"
                        size="lg"
                        outline={true}
                        placeholder="Enter your password"

                    />

                </ModalBody>
                <ModalFooter>
                    <Button
                        color="red"
                        buttonType="link"
                        onClick={(e) => setShowModal(false)}
                        ripple="dark"
                    >
                        Close
                    </Button>
                    <Link href="/karan">
                        <Button
                            color="green"
                            onClick={(e) => setShowModal(false)}
                            ripple="light"
                        >
                            Submit
                        </Button>
                    </Link>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default GetStarted_modal;
