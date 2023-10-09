import { styled } from '@mui/material';
import { FC, ReactNode } from 'react';
import backImage from '../assets/back.jpg'


const MainContainer = styled("div")({
    position: 'relative',
    left: 0,
    top: 0,
})

const ChildrenContainer = styled("div")({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    display: 'flex',
    justifyContent: 'center',
})

const Children = styled("div")({
    width: '100%',
})

const ShadowContainer = styled("div")({
    backgroundImage: `url(${backImage})`,
    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
})

const Shadow = styled('div')({
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    opacity: 0.8,
    boxShadow: '0px 11px 12px 11px black',
    overflowX: 'hidden',
})

interface ContainerProps {
    children: ReactNode,
    maxWidth: number,
}

const Container: FC<ContainerProps> = ({
    children,
    maxWidth,
}) => {

    return (
        <MainContainer>
            <ShadowContainer>
                <Shadow
                    style={{ maxWidth: maxWidth }}
                />
            </ShadowContainer>

            <ChildrenContainer>
                <Children style={{ maxWidth: maxWidth }}>
                    {children}
                </Children>
            </ChildrenContainer>
        </MainContainer>
    )
}

export default Container;