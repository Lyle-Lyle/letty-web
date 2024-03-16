import { AppShell, Burger, Group, Skeleton, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';

import Navbar from '@/components/Navbar';
import { Outlet } from 'react-router-dom';
import { BadgeCard } from '@/components/BadgeCard';
import Header from '@/components/Header';

const user = {
    name: 'Jane Spoonfighter',
    email: 'janspoon@fighter.dev',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

function BasicLayout() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            // layout="alt"
            header={{ height: 60 }}
            footer={{ height: 60 }}
            navbar={{ width: 250, breakpoint: 'sm', collapsed: { desktop: opened } }}
            aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false } }}
            padding="md"
        >
            <AppShell.Header>
                <Header />
            </AppShell.Header>
            <AppShell.Navbar p="md">
                {/* <Group>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Text>Navbar</Text>
                </Group> */}
                {/* {Array(15)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} h={20} mt="sm" animate={false} />
                        // <div>navbar</div>
                    ))} */}
                <Navbar />
            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet />
                {/* <AppShell.Section p="md">Footer</AppShell.Section> */}
            </AppShell.Main>
            <AppShell.Aside p="md">
                <BadgeCard />
            </AppShell.Aside>
        </AppShell>
    );
}

export default BasicLayout;
