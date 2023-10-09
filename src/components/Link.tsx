import { styled } from "@mui/material";
import { FC } from "react";

const LinkContainer = styled('a')({
    textDecoration: 'none',
    color: '#fff',
})

interface LinkProps {
    name: string,
    link: string
}

const Link: FC<LinkProps> = ({
    name,
    link,
}) => {
    return (
        <LinkContainer href={link}>
            {name}
        </LinkContainer>
    )
}

export default Link;