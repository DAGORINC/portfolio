import { styled } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi'

const Container = styled("div")({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
})

const MenuTrigger = styled('div')({
    fontSize: 24,
    position: 'fixed',
    top: 0,
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: 44,
    aspectRatio: 1,
    zIndex: 13,
    transition: 'all 0.2s',
    ':hover': {
        cursor: "pointer",
        backgroundColor: '#333',
    }
})


const MenuContent = styled("div")({
    position: 'fixed',
    top: 0,
    backgroundColor: '#161716',
    width: '100%',
    maxWidth: 300,
    zIndex: 12,
    transition: 'all 0.3s',
    paddingTop: 44,
    paddingBottom: 24,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    overflow: 'hidden',
})

const MenuElement = styled("div")({
    height: 44,
    fontSize: 20,
    borderBottom: '1px solid var(--grey)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    userSelect: 'none',
    transition: 'all 0.2s',
    ':hover': {
        cursor: "pointer",
        backgroundColor: '#333',
    }
})

export interface IMenuItem {
    name: string,
    onClick: () => void,
}

interface MenuButtonProps {
    items: IMenuItem[],
}

const MenuButton: FC<MenuButtonProps> = ({
    items,
}) => {

    const [opened, setOpened] = useState(false)

    const closeMenu = () => {
        setOpened(false);
    };

    useEffect(() => {
        const handleDocumentClick = (event: MouseEvent) => {
            if (
                opened &&
                !((event.target as HTMLElement).closest('.MenuContent') ||
                    (event.target as HTMLElement).closest('.MenuTrigger'))
            ) {
                closeMenu();
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [opened]);


    return (
        <Container>
            <MenuTrigger
                className="MenuTrigger"
                onClick={() => setOpened(!opened)}
            >
                <BiMenuAltRight />
            </MenuTrigger>

            <MenuContent
                style={{
                    opacity: opened ? 1 : 0,
                    userSelect: opened ? 'all' : 'none',
                    pointerEvents: opened ? 'all' : 'none',
                }}
            >
                {items.map(singleItem => (
                    <MenuElement
                        key={singleItem.name}
                        onClick={singleItem.onClick}
                    >
                        {singleItem.name}
                    </MenuElement>
                ))}
            </MenuContent>
        </Container>
    )
}

export default MenuButton;