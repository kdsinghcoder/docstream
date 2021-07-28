import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function ShareModal() {
    const [showModal, setShowModal] = React.useState(false);

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
                SHARE
            </Button>



            <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)} className="text-sm m-10">
                    Share
                </ModalHeader>
                <ModalBody> 
                    <p className="text-base leading-relaxed text-gray-600 font-normal">
                       <ul className="px-12">
                           <li>Your link will expire in 24hr</li>
                           <li>Your link will expire in 24hr</li>
                           <li>Your link will expire in 24hr</li>

                       </ul>
                    </p>
                </ModalBody>
                <ModalFooter>

                    <Button
                        color="blue"
                        onClick={(e) => setShowModal(true)}
                        ripple="light"
                    >
                        Copy Link
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ShareModal
