import React from 'react'
import { Form } from 'semantic-ui-react'

class DonationForm extends React.Component {
    // t.float "amount"
    // t.string "card_type"
    // t.string "card_number"
    // t.string "security_code"
    // t.string "zipcode"
    // t.bigint "animal_shelter_id", null: false
    // t.bigint "user_id", null: false

    state = {
        amount: '',
        cardType: '',
        cardNumber: '',
        securityCode: '',
        zipcode: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        console.log('working')
    }

    render(){
        const { amount, cardType, cardNumber, securityCode, zipcode} = this.state
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                <Form.Input
                    placeholder='Amount'
                    name='amount'
                    value={amount}
                    onChange={this.handleChange}
                />
                </Form.Group>
                <Form.Group>
                <Form.Input
                    placeholder='Card Type'
                    name='cardType'
                    value={cardType}
                    onChange={this.handleChange}
                />
                <Form.Input
                    placeholder='Card Number'
                    width={6}
                    name='cardNumber'
                    value={cardNumber}
                    onChange={this.handleChange}
                />
                </Form.Group>
                <Form.Group>
                <Form.Input
                    placeholder='Security Code'
                    name='securityCode'
                    value={securityCode}
                    onChange={this.handleChange}
                />
                <Form.Input
                    placeholder='Zipcode'
                    name='zipcode'
                    value={zipcode}
                    onChange={this.handleChange}
                />
                <Form.Button content='Submit' />
                </Form.Group>
            </Form>
        )
    }
}

export default DonationForm