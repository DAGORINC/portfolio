import { Button } from "@mui/material";
import { FC } from "react";
import { BiLogoGithub } from "react-icons/bi";

interface GitButtonProps {
    link: string;
}

const GitButton: FC<GitButtonProps> = ({
    link
}) => {
    return(
        <Button
            variant='contained'
            startIcon={<BiLogoGithub />}
            size="large"
            href={link}
            color="warning"
            style={{
                marginTop: '10px',
                marginLeft: '10px'
            }}
        >
            GitHub
        </Button>
    )
}

export default GitButton;