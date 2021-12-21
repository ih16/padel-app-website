import Container from "../layout/Container";
import Input from "../ui/Input";
import userIcon from "../../assets/images/icon-user.svg";
import mailIcon from "../../assets/images/icon-mail.svg";
import Image from "next/image";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";

const ContactContents = () => {
  return (
    <Container bgClassName="bg-gray-200 scroll-m-20" id="contact">
      <div className="flex py-20 items-center">
        <div className="w-1/2 pr-8">
          <h2>Contact</h2>
          <p className="text-base">
            Denna app är framtagen av två amatörerspelare inom padel som älskar
            sporten. Appen är till för såväl dig som är seriös eller nybörjare.
            Vi tar mer än gärna emot tips på hur vi kan fortsätta utveckla denna
            app för att tillsammans med Er öka intresset för Padel i Sverige.
          </p>
        </div>
        <div className="w-1/2">
          <div className="bg-white rounded-[50px] shadow-card p-10 flex flex-col gap-6">
            <Input
              placeholder={"Your full name"}
              icon={<Image src={userIcon} alt="User icon" />}
            />
            <Input
              placeholder={"Your email address"}
              icon={<Image src={mailIcon} alt="Email icon" />}
            />
            <TextArea placeholder={"Write something here"} />
            <Button label="Send" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactContents;
