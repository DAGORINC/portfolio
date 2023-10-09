import styled from 'styled-components';
import { FC } from 'react';

const NameContent = styled('div')({
    color: 'white',
    fontSize: 24,
    fontWeight: 600,
})

interface ProjectNameProps {
    children: string,
}

const ProjectName: FC<ProjectNameProps> = ({
    children,
}) => {

    return (
        <NameContent>
            <div
                style={{
                    color: 'grey',
                    fontSize: 14,
                }}
            >
                Projekt
            </div>
            {children}
        </NameContent>
    )
}

export default ProjectName;