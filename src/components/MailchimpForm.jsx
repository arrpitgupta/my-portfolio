import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "./Newsletter"

export default function MailchimpForm()  {
  
  return (
    <>
      <MailchimpSubscribe
       
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}
