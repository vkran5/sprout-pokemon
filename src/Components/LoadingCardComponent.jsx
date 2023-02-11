import React from "react";
import { Skeleton, Stack } from '@chakra-ui/react'

const LoadingCard = () => {

    return (
        <Stack>
            <div className="mx-auto flex flex-wrap justify-center gap-10  overflow-x-hidden">
                <Skeleton height='350px' width='250px' />
                <Skeleton height='350px' width='250px' />
                <Skeleton height='350px' width='250px' />
                <Skeleton height='350px' width='250px' />
                <Skeleton height='350px' width='250px' />
                <Skeleton height='350px' width='250px' />
                <Skeleton height='350px' width='250px' />
                <Skeleton height='350px' width='250px' />
                <Skeleton height='350px' width='250px' />
                <Skeleton height='350px' width='250px' />
            </div>
        </Stack>
    )
}

export default LoadingCard