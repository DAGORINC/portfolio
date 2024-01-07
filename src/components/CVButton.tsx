import { Button } from "@mui/material";
import { FC } from 'react';
import { BiSolidFilePdf } from "react-icons/bi";

interface CVButtonProps {
    cv: string;
}

const CVButton: FC <CVButtonProps> = ({
    cv
}) => {
    return(
        <Button 
            variant="contained"
            endIcon={<BiSolidFilePdf />}
            size="large"
            href={cv}
            download={'Damian Gorzkowski Frontend Developer CV.pdf'}
            style={{
                marginTop: '10px'
            }}
        >
            Pobierz CV
        </Button>
    )
}

export default CVButton;