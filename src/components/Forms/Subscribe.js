import React, { useRef, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { css } from '@emotion/core'
import { withTheme } from '../Theming'
import { rhythm } from '../../lib/typography'
import { bpMaxSM } from '../../lib/breakpoints'
import Message from '../ConfirmMessage/Message'
import { PleaseConfirmIllustration } from '../ConfirmMessage/Illustrations'
import MailchimpForm from '../MailchimpForm';

// const FORM_ID = process.env.CONVERTKIT_SIGNUP_FORM

const SubscribeSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  fname: Yup.string(),
})

const PostSubmissionMessage = ({ response }) => {
  return (
    <div>
      <Message
        illustration={PleaseConfirmIllustration}
        title={`Great, one last thing...`}
        body={`I just sent you an email with the confirmation link. 
          **Please check your inbox!**`}
      />
    </div>
  )
}

function SignUp(props) {
  const { theme } = props
  const formEl = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const successful = response && response.status === 'success'

  const handleSubmit = (values) => {
    setSubmitted(true);

    console.log('submitting form...');
    // formEl.submit();
    console.log('form submitted');

    return true;
  }

  return (
    <div>
      {!successful && (
        <>
          <h2
            css={css`
                margin-bottom: ${rhythm(1)};
                margin-top: 0;
              `}
          >
            Join the Newsletter
            </h2>
          <p>Subscribe to get my latest content by email. Unsubscribe at any time.</p>
        </>
      )}

      <MailchimpForm
        action="https://joshbuchea.us20.list-manage.com/subscribe/post?u=d2cd3071564fbf7001bed1736&amp;id=d5283d8443"
      />

      {/* <Formik
        initialValues={{
          email: '',
          fname: '',
        }}
        validationSchema={SubscribeSchema}
        onSubmit={values => handleSubmit(values)}
        render={({ errors, touched, isSubmitting }) => (
          <>
            {!successful && (
              <Form
                ref={formEl}
                action="https://joshbuchea.us20.list-manage.com/subscribe/post?u=d2cd3071564fbf7001bed1736&id=d5283d8443"
                target="_blank"
                css={css`
                    display: flex;
                    align-items: flex-end;
                    button {
                      margin-bottom: 0.5rem;
                      margin-left: 10px;
                    }
                    .field-error {
                      display: block;
                      color: ${theme.colors.red};
                      font-size: 80%;
                    }
                    input,
                    label {
                      width: 100%;
                    }
                    ${bpMaxSM} {
                      flex-direction: column;
                      align-items: flex-start;
                      width: auto;
                      label,
                      input {
                        margin: 5px 0 0 0 !important;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                      }
                      button {
                        margin: 20px 0 0 0;
                      }
                    }
                  `}
              >
                <label htmlFor="fname">
                  <div
                    css={css`
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-end;
                      `}
                  >
                    First Name
                      <ErrorMessage
                      name="fname"
                      component="span"
                      className="field-error"
                    />
                  </div>
                  <Field
                    aria-label="your first name"
                    aria-required="false"
                    name="fname"
                    placeholder="Jane"
                    type="text"
                  />
                </label>
                <label
                  htmlFor="email"
                  css={css`
                      margin-left: 10px;
                    `}
                >
                  <div
                    css={css`
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-end;
                      `}
                  >
                    Email
                      <ErrorMessage
                      name="email"
                      component="span"
                      className="field-error"
                    />
                  </div>
                  <Field
                    aria-label="your email address"
                    aria-required="true"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                  />
                </label>
                <button
                  data-element="submit"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {!isSubmitting && 'Subscribe'}
                  {isSubmitting && 'Subscribing...'}
                </button>
              </Form>
            )}
            {submitted &&
              !isSubmitting && <PostSubmissionMessage response={response} />}
            {errorMessage && <div>{errorMessage}</div>}
          </>
        )}
      /> */}
    </div>
  )
}

// class SignUp extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.formEl = React.createRef();
//   // }

//   state = {
//     submitted: false,
//   }

//   async handleSubmit(values) {
//     this.setState({ submitted: true })

//     console.log('submitting form...');
//     // this.formEl.submit();
//     console.log('form submitted');

//     return true;

//     try {
//       const response = await fetch(
//         // `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`,
//         // `https://joshbuchea.us20.list-manage.com/subscribe/post?u=d2cd3071564fbf7001bed1736&id=d5283d8443`,
//         `https://joshbuchea.us20.list-manage.com/subscribe/post-json?u=d2cd3071564fbf7001bed1736&id=d5283d8443&c=?`,
//         {
//           method: 'post',
//           body: JSON.stringify(values, null, 2),
//           headers: {
//             Accept: 'application/json',
//             // 'Content-Type': 'application/json',
//             'Content-Type': 'application/json; charset=utf-8',
//           },
//         },
//       )

//       const responseJson = await response.json()

//       console.log('response json:', responseJson);

//       this.setState({
//         submitted: true,
//         response: responseJson,
//         errorMessage: null,
//       })
//     } catch (error) {
//       this.setState({
//         submitted: false,
//         errorMessage: 'Something went wrong!',
//       })
//     }
//   }

//   render() {
//     const { submitted, response, errorMessage } = this.state
//     const { theme } = this.props
//     const successful = response && response.status === 'success'

//     return (
//       <div>
//         {!successful && (
//           <>
//             <h2
//               css={css`
//                 margin-bottom: ${rhythm(1)};
//                 margin-top: 0;
//               `}
//             >
//               Join the Newsletter
//             </h2>
//             <p>Subscribe to get my latest content by email. Unsubscribe at any time.</p>
//           </>
//         )}

//         <Formik
//           initialValues={{
//             email: '',
//             fname: '',
//           }}
//           validationSchema={SubscribeSchema}
//           onSubmit={values => this.handleSubmit(values)}
//           render={({ errors, touched, isSubmitting }) => (
//             <>
//               {!successful && (
//                 <Form
//                   // ref={this.formEl}
//                   action="https://joshbuchea.us20.list-manage.com/subscribe/post?u=d2cd3071564fbf7001bed1736&id=d5283d8443"
//                   target="_blank"
//                   css={css`
//                     display: flex;
//                     align-items: flex-end;
//                     button {
//                       margin-bottom: 0.5rem;
//                       margin-left: 10px;
//                     }
//                     .field-error {
//                       display: block;
//                       color: ${theme.colors.red};
//                       font-size: 80%;
//                     }
//                     input,
//                     label {
//                       width: 100%;
//                     }
//                     ${bpMaxSM} {
//                       flex-direction: column;
//                       align-items: flex-start;
//                       width: auto;
//                       label,
//                       input {
//                         margin: 5px 0 0 0 !important;
//                         width: 100%;
//                         display: flex;
//                         flex-direction: column;
//                       }
//                       button {
//                         margin: 20px 0 0 0;
//                       }
//                     }
//                   `}
//                 >
//                   <label htmlFor="fname">
//                     <div
//                       css={css`
//                         display: flex;
//                         justify-content: space-between;
//                         align-items: flex-end;
//                       `}
//                     >
//                       First Name
//                       <ErrorMessage
//                         name="fname"
//                         component="span"
//                         className="field-error"
//                       />
//                     </div>
//                     <Field
//                       aria-label="your first name"
//                       aria-required="false"
//                       name="fname"
//                       placeholder="Jane"
//                       type="text"
//                     />
//                   </label>
//                   <label
//                     htmlFor="email"
//                     css={css`
//                       margin-left: 10px;
//                     `}
//                   >
//                     <div
//                       css={css`
//                         display: flex;
//                         justify-content: space-between;
//                         align-items: flex-end;
//                       `}
//                     >
//                       Email
//                       <ErrorMessage
//                         name="email"
//                         component="span"
//                         className="field-error"
//                       />
//                     </div>
//                     <Field
//                       aria-label="your email address"
//                       aria-required="true"
//                       name="email"
//                       placeholder="jane@acme.com"
//                       type="email"
//                     />
//                   </label>
//                   <button
//                     data-element="submit"
//                     type="submit"
//                     disabled={isSubmitting}
//                   >
//                     {!isSubmitting && 'Subscribe'}
//                     {isSubmitting && 'Subscribing...'}
//                   </button>
//                 </Form>
//               )}
//               {submitted &&
//                 !isSubmitting && <PostSubmissionMessage response={response} />}
//               {errorMessage && <div>{errorMessage}</div>}
//             </>
//           )}
//         />
//       </div>
//     )
//   }
// }

export default withTheme(SignUp)
