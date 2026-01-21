import { 
    IntroduceSection, 
    InfoSection,
} from '@/pages/about/section';

// componets
import{ Title } from "@/components/ui";

const About = () => {
    return (
        <>     
            <Title title="about" subject="me" />
            <IntroduceSection />
            <InfoSection />
        </>
    );
};

export default About;