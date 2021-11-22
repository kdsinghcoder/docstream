import React, { useState, useRef } from "react";
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


function Quixk_share_modal(props) {
    const [showModal, setShowModal] = React.useState(false);

    const buttonRef = useRef();

    return (
        <>
            <Button color="gray" ref={buttonRef} ripple="light">
                Quick Share
            </Button>

            <Popover placement="right" ref={buttonRef}>
                <PopoverContainer>
                    <PopoverHeader>Note :</PopoverHeader>
                    <PopoverBody>
                        <Alert color="green">Site will be available only for 24Hr from now</Alert>
                        <Link href="quick/56234">
                            <Button
                                color="lightGreen"
                                buttonType="filled"
                                size="sm"
                                rounded={false}
                                block={false}
                                iconOnly={false}
                                ripple="light"
                            >
                                go ahead
                            </Button>
                        </Link>
                    </PopoverBody>

                </PopoverContainer>
            </Popover>
        </>
    )
}

export default Quixk_share_modal;
