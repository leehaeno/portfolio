import { 
    ContactSection, 
} from '@/pages/contact/section';

// componets
import{ Title } from "@/components/ui";

const Contact = () => {
    return (
        <>     
            <Title title="contact" subject="me" />
            <ContactSection />
        </>
    );
};

export default Contact;