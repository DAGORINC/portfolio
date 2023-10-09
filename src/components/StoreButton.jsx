import { styled } from '@mui/material';

const Container = styled("div")({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
})

const Store = ({
    iosUrl,
    andridUrl,
}) => {

    return (
        <Container>
            <a href={iosUrl}>
                <img
                    alt="App Store"
                    src='https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg'
                    style={{
                        height: 56,
                    }}
                />
            </a>
            <a href={andridUrl}>
                <img
                    alt="App Store"
                    src='https://anydesk.com/_static/img/badges/Available_GooglePlay-25a19e.svg'
                    style={{
                        height: 56,
                        marginLeft: 10,
                    }}
                />
            </a>
        </Container>
    )
}

export default Store;