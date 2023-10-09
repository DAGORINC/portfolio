import { styled } from '@mui/material';
import { FC } from 'react';

const NameContent = styled('div')({
    color: 'white',
    fontSize: 32,
    fontWeight: 600,
})

interface NameProps {
    children: string,
}

const Name: FC<NameProps> = ({
    children
}) => {

    return (
        <NameContent>
            {children}
        </NameContent>
    )
}

export default Name;