
'use client'

import { Stack, Typography } from "@mui/material"
import { useLoginManagerContext } from "../context/LoginManager"

const LoginForm = ({
    title
}: {
    title: string
}) => {
    const { user } = useLoginManagerContext();

    return <>

        <Stack>
            <Typography variant="h6" color={'primary'} sx={{
                paddingBottom: '42px'
            }}>
                Digital
            </Typography>



            <Typography variant="h5" color={'primary'}>
                {title}
            </Typography>

        </Stack>

    </>
}

export default LoginForm