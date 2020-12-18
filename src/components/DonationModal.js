import React from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import { datadogLogs } from '@datadog/browser-logs'

class DonationModal extends React.Component{

    state = {
        open: false,
        amount: ''
    }

    toggleOpen = () => {
        this.setState({open: !this.state.open})
        if(this.state.open) {
            datadogLogs.logger.info('donation button clicked', { name: 'donateButton' })
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
    
        return(
            <Modal
                size='tiny'
                onClose={this.toggleOpen}
                onOpen={this.toggleOpen}
                open={this.state.open}
                trigger={<Button>Donate</Button>}
            >
                <Modal.Header>Enter donation amount</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Input 
                        icon='money'
                        iconPosition='left'
                        placeholder='Please enter donation amount.'
                        name='amount'
                        value={this.state.amount}
                        onChange={this.handleChange}
                        />
                    </Form>
                </Modal.Content>
    
                <Modal.Actions>
                    <Button color='black' onClick={this.toggleOpen}>
                    Nope
                    </Button>
                    <Button
                    content='Donate'
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => this.props.createCheckOut(this.state.amount)}
                    color='teal'
                    />
                </Modal.Actions>
            </Modal>
        )

    }
}

export default DonationModal

