import React from 'react';

import { Container, Space, Divider, Text } from '@mantine/core';
import ArticleCard from '@/components/ArticleCard';
import HeaderTabs from '@/components/HeaderTabs';

function Home() {
    return (
        <>
            <Container>
                <HeaderTabs />
            </Container>
        </>
    );
}

export default Home;
