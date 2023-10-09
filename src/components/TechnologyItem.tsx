import { FC } from 'react';
import ScrollFadeComponent from './ScrollFadeComponents';
import { Stack, styled } from '@mui/material';

const imageSize = 42

const Image = styled("img")({
    height: imageSize,
    minHeight: imageSize,
    width: imageSize,
    objectFit: 'cover',
    borderRadius: 8,
})

const Name = styled("div")({
    fontSize: 24,
    marginLeft: 12,
})

interface TechnologyItemProps {
    name: string,
    img: string,
}

const TechnologyItem: FC<TechnologyItemProps> = ({
    name,
    img,
}) => {

    return (
        <ScrollFadeComponent>
            <Stack
                direction='row'
                alignItems={'center'}
            >
                <Image
                    src={img}
                    alt={name}
                />

                <Name>
                    {name}
                </Name>
            </Stack>
        </ScrollFadeComponent>
    )
}

export default TechnologyItem;