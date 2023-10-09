import { FC } from 'react';


interface RoleProps {
    children: string,
}

const Role: FC<RoleProps> = ({
    children
}) => {

    return (
        <div
            style={{
                fontSize: 12,
                color: '#e8effa',
                textTransform: 'uppercase'
            }}
        >
            {children}
        </div>
    )
}

export default Role;