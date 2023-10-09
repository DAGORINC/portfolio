import { FC, ReactNode } from 'react';


interface DescriptionProps {
    children: string | ReactNode,
}

const Description: FC<DescriptionProps> = ({
    children
}) => {

    return (
        <div
            style={{
                color: '#e4e8f0',
                textJustify: 'auto'
            }}
        >
            {children}
        </div>
    )
}

export default Description;