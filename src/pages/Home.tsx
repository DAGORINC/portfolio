import { FC, useEffect, useMemo, useRef, useState } from 'react';
import Name from '../components/Name';
import Role from '../components/Role';
import { Stack } from '@mui/material';
import ProjectSwiper from '../components/ProjectSwiper';
import cv from '../assets/Damian Gorzkowski CV.pdf';
import ufo01 from '../assets/ufo/01.png'
import ufo02 from '../assets/ufo/02.png'
import ufo03 from '../assets/ufo/03.png'
import ufo04 from '../assets/ufo/04.png'
import ufo05 from '../assets/ufo/05.png'
import ufo06 from '../assets/ufo/06.png'
import ufo07 from '../assets/ufo/07.png'
import ufo08 from '../assets/ufo/08.png'
import ufo09 from '../assets/ufo/09.png'
import ufo10 from '../assets/ufo/10.png'
import ufo11 from '../assets/ufo/11.png'
import ufo12 from '../assets/ufo/12.png'
import ufoMobile01 from '../assets/ufo mobile/01.jpg';
import ufoMobile02 from '../assets/ufo mobile/02.jpg';
import ufoMobile03 from '../assets/ufo mobile/03.jpg';
import ufoMobile04 from '../assets/ufo mobile/04.jpg';
import ufoMobile05 from '../assets/ufo mobile/05.jpg';
import ufoMobile06 from '../assets/ufo mobile/06.jpg';
import ufoMobile07 from '../assets/ufo mobile/07.jpg';
import ufoMobile08 from '../assets/ufo mobile/08.jpg';
import ufoMobile09 from '../assets/ufo mobile/09.jpg';
import ufoMobile10 from '../assets/ufo mobile/10.jpg';
import quizcode1 from '../assets/quizcode/1.jpg'
import quizcode2 from '../assets/quizcode/2.jpg'
import quizcode3 from '../assets/quizcode/3.jpg'
import quizcode4 from '../assets/quizcode/4.jpg'
import quizcode5 from '../assets/quizcode/5.jpg'
import quizcode6 from '../assets/quizcode/6.jpg'
import quizcode7 from '../assets/quizcode/7.jpg'
import quizcode8 from '../assets/quizcode/8.jpg'
import kamea1 from '../assets/kamea/1.jpg'
import kamea2 from '../assets/kamea/2.jpg'
import kamea3 from '../assets/kamea/3.jpg'
import kamea4 from '../assets/kamea/4.jpg'
import muiIcon from '../assets/logos/mui.png'
import ProjectName from '../components/ProjectName';
import Line from '../components/Line';
import Description from '../components/Description';
import TechnologyContainer from '../components/TechnologyContainer';
import TechnologyItem from '../components/TechnologyItem';
import reactLogo from '../assets/logos/react.png';
import jsLogo from '../assets/logos/js.png'
import tsLogo from '../assets/logos/ts.png'
import ionicLogo from '../assets/logos/ionic.png';
import mongodbLogo from '../assets/logos/mongodb.png'
import gitLogo from '../assets/logos/git.png'
import nodeLogo from '../assets/logos/node.png'
import swaggerLogo from '../assets/logos/swagger.png'
import postmanLogo from '../assets/logos/postman.png'
import postgreSQLlogo from '../assets/logos/postgresql.png'
import oracleSQLlogo from '../assets/logos/oraclesql.png';
import ScrollFadeComponent from '../components/ScrollFadeComponents';
import { Label } from '../components/Label';
import Container from '../components/Container';
import MenuButton from '../components/MenuButton';
import Link from '../components/Link';
import CVButton from '../components/CVButton';
import GitButton from '../components/GitButton';


interface HomeProps {

}

const Home: FC<HomeProps> = (props) => {

    const [viewRecorded, setViewRecorded] = useState(false);
    const contactSectionRef = useRef<HTMLDivElement | null>(null);
    const aboutSectionRef = useRef<HTMLDivElement | null>(null);
    const technologiesSectionRef = useRef<HTMLDivElement | null>(null);
    const projectsSectionRef = useRef<HTMLDivElement | null>(null);
    const [screenX, setScreenX] = useState(2000)
    const sidePadding = useMemo((): number => {
        if (screenX < 500) return 2
        if (screenX < 1000) return 4
        if (screenX < 1400) return 10
        return 12
    }, [screenX])

    const getCurrentScreenSize = () => {
        setScreenX(window.innerWidth)
    }


    const scrollToContact = () => {
        if (contactSectionRef.current) {
            contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToAbout = () => {
        if (aboutSectionRef.current) {
            aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToTechnologies = () => {
        if (technologiesSectionRef.current) {
            technologiesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToProjects = () => {
        if (projectsSectionRef.current) {
            projectsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        getCurrentScreenSize()
        window.addEventListener('resize', getCurrentScreenSize);
        return () => {
            window.removeEventListener('resize', getCurrentScreenSize)
        }
    }, [])

    return (
        <Container maxWidth={1200}>
            <Stack
                spacing={3}
                padding={sidePadding}
                paddingTop={4}
                paddingBottom={50}
            >
                <MenuButton
                    items={[
                        {
                            name: 'O mnie',
                            onClick: scrollToAbout,
                        },
                        {
                            name: 'Technologie',
                            onClick: scrollToTechnologies,
                        },
                        {
                            name: 'Projekty',
                            onClick: scrollToProjects,
                        },
                        {
                            name: 'Kontakt',
                            onClick: scrollToContact,
                        },
                    ]}
                />

                <Stack
                    alignItems='center'
                    padding={"24px 0"}
                    ref={aboutSectionRef}
                >
                    <Name>
                        Damian Gorzkowski
                    </Name>
                    <Role>
                        frontend developer
                    </Role>

                    <div style={{ display: 'flex' }}>
                        <CVButton
                            cv={cv}
                        />
                        <GitButton
                            link={'https://github.com/dagorinc'}
                        />
                    </div>
                </Stack>

                <Line />

                <Label>
                    Coś o mnie
                </Label>

                <Description>
                    Programowaniem zająłem się szukając rozwiązań na monotonne czynności towarzyszące mi w pracy, po pewnym czasie zająłem się tym na poważnie.
                    Teraz zainteresowanie próbuję przekuć w zawód. Jestem studentem studiów inżynierskich.
                </Description>

                <Line />

                <div ref={technologiesSectionRef} />

                <Label>
                    Technologie
                </Label>

                <TechnologyContainer>
                    <TechnologyItem
                        name='React'
                        img={reactLogo}
                    />
                    <TechnologyItem
                        name='JavaScript'
                        img={jsLogo}
                    />
                    <TechnologyItem
                        name='TypeScript'
                        img={tsLogo}
                    />
                    <TechnologyItem
                        name='Ionic'
                        img={ionicLogo}
                    />
                    <TechnologyItem
                        name='Nodejs'
                        img={nodeLogo}
                    />
                    <TechnologyItem
                        name='Mui'
                        img={muiIcon}
                    />
                </TechnologyContainer>

                <TechnologyContainer>
                    <TechnologyItem
                        name='MongoDB'
                        img={mongodbLogo}
                    />
                    <Line />
                    <TechnologyItem
                        name='PostgreSQL'
                        img={postgreSQLlogo}
                    />
                    <TechnologyItem
                        name='Oracle SQL'
                        img={oracleSQLlogo}
                    />
                    <ScrollFadeComponent>
                        Pisałem SQL-owe bazy z widokami, funkcjami, triggerami itp. jednak nie miałem jeszcze okazji łączyć ich z backendem
                    </ScrollFadeComponent>
                </TechnologyContainer>

                <TechnologyContainer>
                    <TechnologyItem
                        name='Git'
                        img={gitLogo}
                    />
                </TechnologyContainer>

                <TechnologyContainer>
                    <TechnologyItem
                        name='Postman'
                        img={postmanLogo}
                    />
                    <TechnologyItem
                        name='Swagger'
                        img={swaggerLogo}
                    />
                </TechnologyContainer>

                <Line />

                <div ref={projectsSectionRef} />

                <ScrollFadeComponent>
                    <ProjectName>
                        UFO
                    </ProjectName>
                    <Link
                        name='ufo-meble.pl'
                        link='https://www.ufo-meble.pl'
                    />
                </ScrollFadeComponent>

                <ScrollFadeComponent>
                    <Description>
                        Strona internetowa sklepów meblowych
                        <br />
                        <br />
                        Strona pełni funkcję wizytówki oraz umożliwia klientom zapoznanie się z dostępną w salonie
                        ofertą mebli. Strona w przyszłości będzie pełniła rolę sklepu internetowego.
                        <br />
                        <br />
                        Uzupełnianie oferty odbywa się z poziomu panelu administratora lub przy użyciu narzędzia
                        jakie napisałem w celu skrócenia czasu dodawania oferty na stronę. W tej chwili uzupełniana
                        jest tylko oferta salonu w Mińsku Mazowieckim
                        <br />
                        <br />
                        Pierwsza wersja została napisana z użyciem JS, jednak po zapoznaniu się z korzyściami
                        jakie niesie ze sobą używanie TypeScript postanowiłem ją przepisać.
                        <br />
                        <br />
                        Strona napisana w stacku MERN i TypeScript, deploymentu dokonałem z użyciem serwera VPS
                        <br />
                        <br />
                        Technologie użyte podczas produkcji: (React, TypeScript, Node, MongoDB)
                        <br />
                        <br />
                        Wersja mobilna:
                    </Description>
                </ScrollFadeComponent>

                <ProjectSwiper
                    id='ufoMobile'
                    images={[
                        ufoMobile01,
                        ufoMobile02,
                        ufoMobile03,
                        ufoMobile04,
                        ufoMobile05,
                        ufoMobile06,
                        ufoMobile07,
                        ufoMobile08,
                        ufoMobile09,
                        ufoMobile10,
                    ]}
                />

                <ScrollFadeComponent>
                    <Description>
                        Wersja pc:
                    </Description>
                </ScrollFadeComponent>

                <ProjectSwiper
                    id='ufo'
                    pcSlides={true}
                    images={[
                        ufo01,
                        ufo02,
                        ufo03,
                        ufo04,
                        ufo05,
                        ufo06,
                        ufo07,
                        ufo08,
                        ufo09,
                        ufo10,
                        ufo11,
                        ufo12,
                    ]}
                />

                <Line />

                <ScrollFadeComponent>
                    <ProjectName>
                        QuizCode
                    </ProjectName>
                </ScrollFadeComponent>

                <ScrollFadeComponent>
                    <Description>
                        Aplikacja mobilna z quizami dla programistów
                        <br />
                        <br />
                        Aplikację tworzę we współpracy z backendowcem oraz project managerem.
                        Moją rolą w tej aplikacji jest frontend. Narzędzie z jakiego korzystam
                        podczas pracy przy tym projekcie to IonicFramework, który pozwala na
                        dostosowanie wyglądu GUI aplikacji do używanej platformy oraz posiada
                        Capacitor pozwalający na korzystanie z wielu natywnych funkcji podczas
                        pisania w zwykłym React.
                        <br />
                        <br />
                        Technologie użyte podczas produkcji: (React, TypeScript, Ionic)
                    </Description>
                </ScrollFadeComponent>

                <ProjectSwiper
                    id='quizcode'
                    images={[
                        quizcode1,
                        quizcode2,
                        quizcode3,
                        quizcode4,
                        quizcode5,
                        quizcode6,
                        quizcode7,
                        quizcode8,
                    ]}
                />

                <ScrollFadeComponent>
                    <ProjectName>
                        Kamea
                    </ProjectName>
                    <Link
                        name='kamea.waw.pl'
                        link='https://kamea.waw.pl'
                    />
                </ScrollFadeComponent>

                <ScrollFadeComponent>
                    <Description>
                        Strona - wizytówka firmy transportowej ze składem kruszyw
                        <br />
                        <br />
                        Jest to moje pierwsze zlecenie a zarazem pierwsza strona w React.
                        <br />
                        <br />
                        Technologie użyte podczas produkcji: (React)
                    </Description>
                </ScrollFadeComponent>

                <ProjectSwiper
                    id='kamea'
                    images={[
                        kamea1,
                        kamea2,
                        kamea3,
                        kamea4,
                    ]}
                />

                <Line />

                <Label ref={contactSectionRef}>
                    Kontakt
                </Label>

                <ScrollFadeComponent>
                    <Description>
                        <Link
                            name='Tel: 516 262 228'
                            link='tel:516262228'
                        />
                        <br />
                        <br />
                        <Link
                            name='Email: dgo1553@gmail.com'
                            link='mail:dgo1553@gmail.com'
                        />
                    </Description>
                </ScrollFadeComponent>
            </Stack>
        </Container>
    )
}

export default Home;