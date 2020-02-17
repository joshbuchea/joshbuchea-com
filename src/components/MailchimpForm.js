import React from 'react'

// TODO: re-work as function component

const formElementStyles = {
  border: 'none',
  borderRadius: 3,
  marginRight: 8,
  minHeight: '3em',
  padding: 8,
};

class MailchimpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emailValue: '',
      honeypotValue: '',
    }
  }

  handleSubmit(event) {
    // event.preventDefault();
    setTimeout(() => {
      this.setState({ emailValue: '' });
    }, 500);
  }

  render() {
    return (
      <form
        method="POST"
        noValidate
        onSubmit={(e) => this.handleSubmit(e)}
        style={{ display: 'flex' }}
        target="_blank"
        {...this.props}
      >
        <input
          name="EMAIL"
          onChange={e => this.setState({ emailValue: e.target.value })}
          pattern="/^[a-zA-Z0-9+-_]+(\.[_a-zA-Z0-9+]+)*@[a-zA-Z0-9+-_]+(\.[a-zA-Z0-9+-_]+)*(\.[a-zA-Z]+)$/"
          placeholder="email address"
          required="required"
          style={formElementStyles}
          type="email"
          value={this.state.emailValue}
        />

        <button
          style={formElementStyles}
          type="submit"
          value="subscribe"
        >
          subscribe
        </button>

        {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
        <div
          style={{
            position: 'absolute',
            left: '-5000px',
          }}
          aria-hidden="true"
        >
          <input
            name="b_d2cd3071564fbf7001bed1736_b971dab3ea"
            onChange={e => this.setState({ honeypotValue: e.target.value })}
            tabIndex="-1"
            type="text"
            value={this.state.honeypotValue}
          />
        </div>
      </form>
    )
  }
}

export default MailchimpForm
