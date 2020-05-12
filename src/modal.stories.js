import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default { title: 'Modals' };

export const Modals = () => (
    <div>
        <div><p>A modal dialog component</p></div>

        <div className="static-modal">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>One fine body...</Modal.Body>

                <Modal.Footer>
                    <Button>Close</Button>
                    <Button bsStyle="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    </div>
);
