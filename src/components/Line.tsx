import { FC, Ref } from 'react';


interface LineProps {
    ref?: Ref<HTMLDivElement>
}

const Line: FC<LineProps> = ({
    ref,
}) => {

    return (
        <div
            style={{
                width: '100%',
                height: 1,
                background: 'var(--grey)'
            }}
            ref={ref}
        />
    )
}

export default Line;