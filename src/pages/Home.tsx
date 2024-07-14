import { FC, useEffect, useMemo, useRef, useState } from 'react';
import Name from '../components/Name';
import Role from '../components/Role';
import { Stack } from '@mui/material';
import ProjectSwiper from '../components/ProjectSwiper';
import ufo01 from '../assets/ufo/01.png';
import ufo02 from '../assets/ufo/02.png';
import ufo03 from '../assets/ufo/03.png';
import ufo04 from '../assets/ufo/04.png';
import ufo05 from '../assets/ufo/05.png';
import ufo06 from '../assets/ufo/06.png';
import ufo07 from '../assets/ufo/07.png';
import ufo08 from '../assets/ufo/08.png';
import ufoMobile01 from '../assets/ufo mobile/01.png';
import ufoMobile02 from '../assets/ufo mobile/02.png';
import ufoMobile03 from '../assets/ufo mobile/03.png';
import ufoMobile04 from '../assets/ufo mobile/04.png';
import ufoMobile05 from '../assets/ufo mobile/05.png';
import ufoMobile06 from '../assets/ufo mobile/06.png';
import ufoMobile07 from '../assets/ufo mobile/07.png';
import ptracker01 from '../assets/ptracker/01.png';
import ptracker02 from '../assets/ptracker/02.png';
import ptracker03 from '../assets/ptracker/03.png';
import ptracker04 from '../assets/ptracker/04.png';
import ptracker05 from '../assets/ptracker/05.png';
import ptracker06 from '../assets/ptracker/06.png';
import ptracker07 from '../assets/ptracker/07.png';
import ptracker08 from '../assets/ptracker/08.png';
import ptracker09 from '../assets/ptracker/09.png';
import ptracker10 from '../assets/ptracker/10.png';
import quizcode1 from '../assets/quizcode/1.jpg'
import quizcode2 from '../assets/quizcode/2.jpg'
import quizcode3 from '../assets/quizcode/3.jpg'
import quizcode5 from '../assets/quizcode/5.jpg'
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
import tsLogo from '../assets/logos/ts.png'
import ionicLogo from '../assets/logos/ionic.png';
import mongodbLogo from '../assets/logos/mongodb.png'
import gitLogo from '../assets/logos/git.png'
import gitLabLogo from '../assets/logos/gitlab.png'
import nodeLogo from '../assets/logos/node.png'
import swaggerLogo from '../assets/logos/swagger.png'
import postmanLogo from '../assets/logos/postman.png'
import ScrollFadeComponent from '../components/ScrollFadeComponents';
import { Label } from '../components/Label';
import Container from '../components/Container';
import MenuButton from '../components/MenuButton';
import Link from '../components/Link';
import CVButton from '../components/CVButton';
import cv from '../assets/CV.pdf'


interface HomeProps {

}

const Home: FC<HomeProps> = (props) => {

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
                    <CVButton
                        cv={cv}
                    />
                </Stack>
                <Line />
                <Label>
                    Coś o mnie
                </Label>
                <Description>
                    Zacząłem interesować się programowaniem, szukając sposobów na zautomatyzowanie monotonnych
                    czynności w pracy. Z czasem pasja ta przerodziła się w poważne zajęcie, a w obecnej pracy
                    moje wcześniejsze obowiązki ustąpiły miejsca tworzeniu oprogramowania. Teraz staram się
                    przekuć swoje zainteresowanie w pełnoprawny zawód.
                    <br />
                    <br />
                    Obecnie moim głównym projektem poza pracą jest rozwijanie aplikacji "PTRACKER" we współpracy
                    z firmą HXS.
                    <br />
                </Description>
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
                </TechnologyContainer>
                <TechnologyContainer>
                    <TechnologyItem
                        name='Git'
                        img={gitLogo}
                    />
                    <TechnologyItem
                        name='GitLab'
                        img={gitLabLogo}
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
                        Strona obecnie pełni rolę wizytówki, prezentując klientom ofertę
                        mebli dostępnych w salonie. W planach jest rozwinięcie jej funkcjonalności, aby w
                        przyszłości stała się pełnoprawnym sklepem internetowym, tymczasowo z uwagi na warunki
                        handlowe sklepu jest to niemożliwe. Strona jest zarządzana z poziomu panelu
                        administratora, a część oferty jest aktualizowana na podstawie API udostępnionego
                        przez fabryki.
                        <br />
                        <br />
                        Strona napisana w stacku MERN i TypeScript
                        <br />
                        <br />
                        Wersja mobilna:
                    </Description>
                </ScrollFadeComponent>
                <ScrollFadeComponent>
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
                        ]}
                    />
                </ScrollFadeComponent>
                <ScrollFadeComponent>
                    <Description>
                        Wersja pc:
                    </Description>
                </ScrollFadeComponent>
                <ScrollFadeComponent>
                    <ProjectSwiper
                        id='ufo'
                        pcSlides
                        images={[
                            ufo01,
                            ufo02,
                            ufo03,
                            ufo04,
                            ufo05,
                            ufo06,
                            ufo07,
                            ufo08,
                        ]}
                    />
                </ScrollFadeComponent>
                <Line />
                <ScrollFadeComponent>
                    <ProjectName>
                        PTRACKER
                    </ProjectName>
                </ScrollFadeComponent>
                <ScrollFadeComponent>
                    <Description>
                        Aplikacja Android/iOS przeznaczona do zarządzania linią produkcyjną sprzętu wojskowego
                        <br />
                        <br />
                        Aplikację rozwijam w ramach współpracy z firmą HXS z Krakowa.
                        <br />
                        <br />
                        Technologie użyte podczas produkcji: (React, TypeScript, Ionic)
                    </Description>
                </ScrollFadeComponent>
                <ScrollFadeComponent>
                    <ProjectSwiper
                        id='quizcode'
                        images={[
                            ptracker01,
                            ptracker02,
                            ptracker08,
                            ptracker09,
                            ptracker10,
                            ptracker03,
                            ptracker04,
                            ptracker05,
                            ptracker06,
                            ptracker07,
                        ]}
                    />
                </ScrollFadeComponent>
                <ScrollFadeComponent>
                    <ProjectName>
                        QuizCode
                    </ProjectName>
                </ScrollFadeComponent>
                <ScrollFadeComponent>
                    <Description>
                        Aplikacja Android/iOS z quizami dla programistów
                        <br />
                        <br />
                        Współpracuję z zespołem backendowym oraz kierownikiem projektu nad tworzeniem aplikacji.
                        Odpowiadam za rozwój warstwy frontendowej, wykorzystując IonicFramework do tworzenia
                        interfejsu użytkownika do różnych platform.
                        <br />
                        <br />
                        Technologie użyte podczas produkcji: (React, TypeScript, Ionic)
                    </Description>
                </ScrollFadeComponent>
                <ScrollFadeComponent>
                    <ProjectSwiper
                        id='quizcode'
                        images={[
                            quizcode1,
                            quizcode2,
                            quizcode3,
                            quizcode5,
                            quizcode7,
                            quizcode8,
                        ]}
                    />
                </ScrollFadeComponent>
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
                        Aktualnie pracuję nad nowym projektem dla tej firmy, ponieważ strona była pisana podczas nauki i aktualnie nie spełnia już przedewszystkim moich oczekiwań.
                        <br />
                        <br />
                        Technologie użyte podczas produkcji: (React)
                    </Description>
                </ScrollFadeComponent>
                <ScrollFadeComponent>
                    <ProjectSwiper
                        id='kamea'
                        images={[
                            kamea1,
                            kamea2,
                            kamea3,
                            kamea4,
                        ]}
                    />
                </ScrollFadeComponent>
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