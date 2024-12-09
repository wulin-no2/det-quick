import React from 'react';
import { Container, Box, Typography, List, ListItem, ListItemText, Stack, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import globalSettingsConfig from '../../globalSettingsConfig';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const fullStackResponsibilities = [
    "Developing front-end web architecture and back-end server applications, including interactive user interfaces and API services.",
    "Ensuring application responsiveness across multiple platforms, including mobile and desktop, while maintaining security and data protection standards.",
    "Building and optimizing web applications for maximum speed and scalability using technologies such as React, Java, and Python.",
    "Integrating multiple data sources and databases into seamless functionality and implementing robust data storage solutions.",
    "Conducting comprehensive testing and quality assurance to ensure the usability and stability of the applications.",
    "Analyzing system resources to continuously improve efficiency, scalability, and overall performance."
];


const fullStackQualifications = [
    "Bachelor’s degree in Computer Science, Engineering or a related field, or equivalent work experience.",
    "Proven experience as a Full Stack Developer or similar role with a strong understanding of front-end and back-end technologies.",
    "Proficiency with fundamental front-end languages such as HTML, CSS, and JavaScript.",
    "Experience with server-side languages such as Java and Python, and familiarity with Java Spring Boot or similar frameworks.",
    "Hands-on experience with databases (e.g., MySQL, Redis) ",
    "Experience with cloud platforms such as AWS, including working with services like EC2, RDS, S3 and Lambda.",
    "Strong ability in using Git for version control, and knowledge of security practices.",
    "Familiarity with data structures, storage systems, cloud infrastructure, front-end frameworks (like React), and other technical tools.",
    "Proficiency in using scripting languages and working with data extraction and manipulation using Python."
];

const fullStackJobDescription = "As a Senior Full Stack Engineer, you will be a key player in developing and designing both the front-end and back-end aspects of our online English learning platform. This role involves building scalable and efficient web applications that enhance the user experience and meet business requirements. You will lead projects from conception to completion, working closely with other developers, designers, and business stakeholders. Your expertise in both client-side and server-side development, combined with your ability to implement robust security and data protection measures, will be crucial in delivering a high-quality product. Additionally, your skills in Python and data manipulation will support our data-driven initiatives, making you an integral part of our technological advancement."


const backendQualifications = [
    // 技术经验和专业技能
    "Possess a minimum of 3 (for senior 5) years of engineering experience.",
    "Excel in designing elegant systems that abstract complex patterns.",
    "Have a strong aptitude for system thinking, writing high-quality code and documentation.",
    "Proficiency in Java or other modern programming languages.",
    "Experience with MySQL / Redis / NoSQL.",
    "Experience with cloud services (preferably AWS), including Lambda, RDS, S3, CloudWatch, EC2, and API Gateway.",
    "Experience in designing, implementing, and maintaining complex public API products with user integration guides.",

    // 编程和系统安全
    "Familiarity with Spring / Spring Boot.",
    "Proficiency in HTTP protocol and RESTful specifications.",
    "Familiarity with OAuth2.0 / JWT.",

    // 工作标准和合作
    "Uphold high standards when working with production systems.",
    "Adhere to best practices in engineering, security, and design.",
    "Thrive in collaborative environments, making decisions with diverse stakeholders and subject matter experts.",
    "Enjoy collaborating with a diverse group of individuals, bridging gaps between different teams and areas of expertise.",

    // 通信和语言能力
    // "Fluent in English communication."
];

const backendResponsibilities = [
    "Translating ideas, designs and needs into high quality code on React and Java.",
    "Developing reusable components and libraries that can be used again and again..",
    "Optimizing components for performance and scale Developing tests, so we can all release fast and with confidence.",
    "Designing solutions with security and privacy in mind."
]

const backendJobDescription = "As an integral member of our technology team, you will be involved in the design, development, and ongoing enhancement of interactive and intuitive APIs and features for our online English learning platform. This includes improving the capabilities of our web and mobile learning applications, ensuring that both the interface and underlying functionalities meet the high standards required for educational technology.                      Your role will involve crafting and refining features that empower learners and educators alike, from interactive speaking practices to personalized learning paths. You will actively develop new functionalities, optimize the existing codebase, and work collaboratively with teams across different specializations to enhance the educational experience of our users globally."

const uiQualifications = [
    "2+ years of professional experience in web design ",
    "Proficiency in design software (e.g., Adobe Photoshop, Illustrator, Figma).",
    "Strong understanding of UX/UI principles and best practices.",
    "Familiarity with front-end development technologies such as HTML, CSS, and JavaScript is a plus.",
    "Strong portfolio showcasing creativity and attention to detail.",
    "Strong problem-solving and critical-thinking abilities.",
    "Ability to manage multiple projects and meet deadlines.",
    "Ability to adapt to new technologies and client needs."
];

const uiResponsibilities = [
    "Design & Development: Create intuitive, attractive, and functional website designs using the latest design trends and technologies.",
    "User-Centered Design: Develop wireframes, prototypes, and mockups that focus on user experience and accessibility.",
    "Collaboration: Work closely with developers, marketing, and project managers to bring designs to life and ensure they meet project requirements.",
    "Brand Alignment: Ensure that all web designs align with the company’s brand identity and visual guidelines.",
    "Design System: Optimize websites for different devices and browsers, ensuring a seamless user experience across all platforms. Make sure designs are done with economic and efficient content modelling.",

    "Maintenance: Regularly update and maintain websites, including troubleshooting issues and implementing improvements.",
    "Tools & Software: Mainly driving through Figma. Utilize other design tools like Adobe Creative Suite, Supernova to craft digital experiences.",
    "Research & Innovation: Stay updated on web design trends, emerging technologies, and best practices to propose innovative solutions."
];
const uiJobDescription = "We are seeking a talented UI Designer to join our design team. The ideal candidate will have a strong understanding of user interface design, visual storytelling, and web development principles. "

const marketResponsibilities = [
    "Develop a comprehensive C2C marketing strategy across all channels to acquire and retain customers, supporting global business initiatives.",
    "Collaborate with the global commercial team to plan and execute online performance campaigns, including paid social, display, and SEM.",
    "Analyze opportunities and take charge of launching offline marketing campaigns, including first-and third-party events, tailored for consumer-to-consumer interactions.",
    "Work closely with our strategy, go-to-market, and product marketing teams to launch new products internationally, ensuring adaptations for local markets as necessary.",
    "Partner with the Content Marketing team to develop and execute a comprehensive content strategy ",
    "Collaborate with the account management team and Global Marketing team to scale and enhance email marketing campaigns, aiming for higher engagement and retention in the consumer market.",
    "Regularly review, discuss, and analyze the performance of marketing campaigns, making iterative improvements based on data-driven insights.",
    "Surface customer insights that enrich our understanding of our buyer personas and craft a value proposition that resonates with key segments globally."
];

const marketQualifications = [
    "A Bachelor’s Degree or equivalent experience",
    "3+ years experience in Marketing and familiarity with both online and offline channels",
    "An entrepreneurial mindset and a willingness to get your hands dirty",
    "Excellent interpersonal and communication skills",
    "Exceptional organizational skills, attention to detail, and a customer obsessed approach",
    "Experience building and scaling marketing teams"
];

const marketJobDescription = "You will work closely with commercial and strategy teams as a C2C marketing all-rounder, accelerating our customer acquisition efforts through a mix of online and offline channels. This senior role is designed for a resourceful and creative individual ready to strategize, implement, test, and iterate marketing strategies to help us expand our global presence. This position offers a unique career-defining opportunity, allowing you to drive significant impact with substantial autonomy.";

const frontendResponsibilities = [
    "Determining the structure and design of web components",
    "Ensuring user experience determines design choices.",
    "Developing features to enhance the user experience.",
    "Striking a balance between functional and aesthetic design.",
    "Building reusable code for future use.",
    "Optimizing web pages for maximum speed and scalability.",
    "Maintaining brand consistency throughout design."
   
];
const frontendQualifications = [
    "Extensive experience as a frontend software engineer (React, TypeScript)",
    "Proficiency with HTML, CSS, TypeScript and React",
    "Experience working with Git",
    "Able to work independently in a fast-paced environment.",
    "Detail oriented, organized, demonstrating thoroughness and strong ownership of work",
    "Strong problem solving capabilities",
    "Experience with iOS or Android development is a plus."
];

const frontendJobDescription = "We are looking for a skilled and experienced React.js developer to join our team. You will be responsible for developing new tools and add capabilities to our exiting top-notch tools. As a developer, you are expected to be able to own such a project and get the work done on time, integrate with other stakeholders, while working with other developers to ensure that standard stay high and get higher. This is an ideal opportunity for a tech-driven developer, who is looking for constructive hands-on work."

function JobDetailsPage() {
    const { title } = useParams();

    const jobDetails = {
        "Backend Software Engineer": {
            responsibilities: backendResponsibilities,
            qualifications: backendQualifications,
            jobDescription: backendJobDescription
        },
        "UI Designer": {
            responsibilities: uiResponsibilities,
            qualifications: uiQualifications,
            jobDescription: uiJobDescription
        },
        "Digital Marketing Specialist": {
            responsibilities: marketResponsibilities,
            qualifications: marketQualifications,
            jobDescription: marketJobDescription
        },
        "Frontend Software Engineer": {
            responsibilities: frontendResponsibilities,
            qualifications: frontendQualifications,
            jobDescription: frontendJobDescription
        },
        "Fullstack Software Engineer": {
            responsibilities: fullStackResponsibilities,
            qualifications: fullStackQualifications,
            jobDescription: fullStackJobDescription
        }
    };

    const { responsibilities, qualifications, jobDescription } = jobDetails[title] || {};

    const TitleTypography = ({ children, sx }) => (
        <Typography
            variant="h6"
            component="h6"
            gutterBottom
            sx={{
                color: '#212833',
                fontFamily: 'system-ui',
                fontWeight: 'bold',  // 加粗
                // fontSize: '36px',  // 字体大小为36px
                ...sx  // 合并外部传入的sx属性
            }}
        >
            {children}
        </Typography>
    );

    const ContentTypography = ({ children, sx }) => (
        <Typography
            variant="body1"
            paragraph
            sx={{
                fontFamily: 'system-ui',
                fontSize: '18px',
                color: '#212833',
                wordWrap: 'break-word',
                ...sx  // 合并外部传入的sx属性
            }}>
            {children}
        </Typography>
    );


    return (
        <Box sx={{ pb: "60px" }}>
            <Box sx={{ bgcolor: '#ffffff' }}>
                <Box sx={{
                    marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                    paddingY: '50px',
                }}>
                    <Typography variant="h3" gutterBottom>
                        {title}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 3 }}>
                        <WorkIcon />
                        <Typography variant="subtitle1" component="div">Engineering</Typography>
                        <Box sx={{ px: 3 }} />
                        <LocationOnIcon />
                        <Typography variant="subtitle1" component="div">Ireland</Typography>
                        <Box sx={{ px: 3 }} />
                        <AccessTimeIcon />
                        <Typography variant="subtitle1" component="div">Full Time</Typography>
                    </Stack>
                </Box>
            </Box>
            <Box sx={{  paddingY: "60px" }}>
                <Box sx={{
                    marginX: globalSettingsConfig.layoutMargins.horizontalWindowMargin,
                    // paddingY: '50px',
                }}>
                    <TitleTypography sx={{ mt: 1, mb: 1, textAlign: 'left', fontSize: '36px' }}>
                        What you’ll do
                    </TitleTypography>
                    <ContentTypography sx={{ textAlign: 'left', }}>
                        {jobDescription}
                    </ContentTypography>
                    <ContentTypography sx={{ textAlign: 'left', }}>
                    </ContentTypography>
                    <TitleTypography sx={{ mt: 2, mb: 1, textAlign: 'left' }}>
                        Responsibilities:
                    </TitleTypography>
                    <List sx={{ pl: 4 }}>
                        {responsibilities && responsibilities.map((resp, index) => (
                            <ListItem key={index} sx={{ py: 0, px: 0 }} style={{ listStyleType: 'disc', display: 'list-item' }}>
                                <ListItemText primary={resp} />
                            </ListItem>
                        ))}
                    </List>

                    <Divider sx={{ my: 2, bgcolor: '#666666', height: '1px' }} />


                    <TitleTypography sx={{ mt: 1, mb: 1, textAlign: 'left', fontSize: '36px' }}>
                        Who you are
                    </TitleTypography>
                    <ContentTypography sx={{ textAlign: 'left', }}>
                    We are looking for candidates who embody a combination of the qualifications listed below. While we value a broad match, not all criteria are strictly mandatory.
                    </ContentTypography>
                    <TitleTypography sx={{ mt: 2, mb: 1, textAlign: 'left' }}>
                        Qualifications:
                    </TitleTypography>
                    <List sx={{ pl: 4 }}>
                        {qualifications && qualifications.map((qual, index) => (
                            <ListItem key={index} sx={{ py: 0, px: 0 }} style={{ listStyleType: 'disc', display: 'list-item' }}>
                                <ListItemText primary={qual} />
                            </ListItem>
                        ))}
                    </List>
                    {/* <TitleTypography sx={{ mt: 2, mb: 1, textAlign: 'left' }}>
                        Preferred qualifications:
                    </TitleTypography>
                    <List sx={{ pl: 4 }}>
                        {preferredQualifications.map((qual, index) => (
                            <ListItem key={index} sx={{ py: 0, px: 0 }} style={{ listStyleType: 'disc', display: 'list-item' }}>
                                <ListItemText primary={qual} />
                            </ListItem>
                        ))}
                    </List> */}



                    <Divider sx={{ my: 2, bgcolor: '#666666', height: '1px' }} />
                    <TitleTypography sx={{ mt: 1, mb: 1, textAlign: 'left', fontSize: '36px' }}>
                        About the Grimlingo Team
                    </TitleTypography>
                    <ContentTypography sx={{ textAlign: 'left', }}>
                        At Grimlingo, we are integrating AI into English language learning to enhance the educational experience. We specialize in developing tailored applications for the Duolingo English Test, offering a range of powerful tools including innovative memory aids and personalized speaking practices designed to make learning English both engaging and effective. Our mission is to simplify the journey to English proficiency for learners worldwide.
                    </ContentTypography>
                    <ContentTypography sx={{ textAlign: 'left', }}>
                        Behind every innovation at Grimlingo is our dedicated team. Though small, our team is driven by a shared passion for redefining language learning through creativity and cutting-edge technology. Each member plays a crucial role in crafting solutions that not only address immediate educational needs but also anticipate and influence future trends in language learning.
                    </ContentTypography>
                    <ContentTypography sx={{ textAlign: 'left', }}>
                        Joining the Grimlingo team means entering an entrepreneurial environment where your contributions have a direct impact on our progress and success. We provide a platform for tackling complex challenges and developing groundbreaking solutions in educational technology. We seek dynamic individuals who are ready to thrive in a rapidly evolving startup culture and are committed to pushing the boundaries of what's possible in English education. Together, we strive to make a significant and lasting impact on global English learning, making it more accessible and transformative for all.
                    </ContentTypography>

                </Box>
            </Box>
        </Box>
    );
}

export default JobDetailsPage;
