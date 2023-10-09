import { styled } from '@mui/material';
import { FC, ReactNode } from 'react';

const Container = styled('div')({
    border: '1px solid var(--line-color)',
    padding: 12,
    rowGap: 12,
    display: 'flex',
    flexDirection: 'column',
})

interface TechnologyContainerProps {
    children: ReactNode,
}

const TechnologyContainer: FC<TechnologyContainerProps> = ({
    children,
}) => {

    return (
        <Container>
            {children}
        </Container>
    )
}

export default TechnologyContainer;