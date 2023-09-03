import styles from "./Contact.module.css";
import Button from "../Button/Button";
import {useState} from "react"
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
const ContactForm = () => {
const [name,setname]=useState("");
const [email,setemail]=useState("");
const [text,settext]=useState("");
  const onSubmit=(event)=>
  {
    event.preventDefault();
    setname(event.target[0].value);
    setemail(event.target[1].value);
    settext(event.target[2].value);

  }
  





  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
          <Button
            text="VIA CALL"
            icon={<FaPhoneAlt
              fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EAMIL FORM"
          icon={<HiMail fontSize="24px" />} />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" cols="62"></textarea>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>
            {name + " " + email + " " + text}
          </div>




        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./images/contact.svg" alt="conatct img" />
      </div>
    </section>
  )
}

export default ContactForm;