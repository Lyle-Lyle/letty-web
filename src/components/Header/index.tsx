import cx from 'clsx';
import { useState } from 'react';
import {
    Container,
    Avatar,
    UnstyledButton,
    Group,
    Text,
    Menu,
    Tabs,
    Burger,
    rem,
    useMantineTheme,
    Autocomplete,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconLogout,
    IconHeart,
    IconStar,
    IconMessage,
    IconSettings,
    IconPlayerPause,
    IconTrash,
    IconSwitchHorizontal,
    IconChevronDown,
    IconSearch,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './index.module.css';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';

const user = {
    name: 'Jane Spoonfighter',
    email: 'janspoon@fighter.dev',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

const tabs = [
    'Home',
    'Orders',
    'Education',
    'Community',
    'Forums',
    'Support',
    'Account',
    'Helpdesk',
];

export default function Header() {
    const theme = useMantineTheme();
    const [opened, { toggle }] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    const autoplay = useRef(Autoplay({ delay: 2000 }));

    return (
        <div className={classes.header}>
            <Group justify="space-between">
                <MantineLogo size={30} />

                {/* <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" /> */}
                <Carousel
                    withIndicators
                    height={40}
                    plugins={[autoplay.current]}
                    onMouseEnter={autoplay.current.stop}
                    onMouseLeave={autoplay.current.reset}
                >
                    <Carousel.Slide>1</Carousel.Slide>
                    <Carousel.Slide>2</Carousel.Slide>
                    <Carousel.Slide>3</Carousel.Slide>
                    {/* ...other slides */}
                </Carousel>
                <Autocomplete
                    className={classes.search}
                    placeholder="Search"
                    leftSection={
                        <IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                    }
                    data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                    visibleFrom="xs"
                />
                <Menu
                    width={260}
                    position="bottom-end"
                    transitionProps={{ transition: 'pop-top-right' }}
                    onClose={() => setUserMenuOpened(false)}
                    onOpen={() => setUserMenuOpened(true)}
                    withinPortal
                >
                    <Menu.Target>
                        <UnstyledButton
                            className={cx(classes.user, {
                                [classes.userActive]: userMenuOpened,
                            })}
                        >
                            <Group gap={7}>
                                <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                                <Text fw={500} size="sm" lh={1} mr={3}>
                                    {user.name}
                                </Text>
                                <IconChevronDown
                                    style={{ width: rem(12), height: rem(12) }}
                                    stroke={1.5}
                                />
                            </Group>
                        </UnstyledButton>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item
                            leftSection={
                                <IconHeart
                                    style={{ width: rem(16), height: rem(16) }}
                                    color={theme.colors.red[6]}
                                    stroke={1.5}
                                />
                            }
                        >
                            Liked posts
                        </Menu.Item>
                        <Menu.Item
                            leftSection={
                                <IconStar
                                    style={{ width: rem(16), height: rem(16) }}
                                    color={theme.colors.yellow[6]}
                                    stroke={1.5}
                                />
                            }
                        >
                            Saved posts
                        </Menu.Item>
                        <Menu.Item
                            leftSection={
                                <IconMessage
                                    style={{ width: rem(16), height: rem(16) }}
                                    color={theme.colors.blue[6]}
                                    stroke={1.5}
                                />
                            }
                        >
                            Your comments
                        </Menu.Item>

                        <Menu.Label>Settings</Menu.Label>
                        <Menu.Item
                            leftSection={
                                <IconSettings
                                    style={{ width: rem(16), height: rem(16) }}
                                    stroke={1.5}
                                />
                            }
                        >
                            Account settings
                        </Menu.Item>
                        <Menu.Item
                            leftSection={
                                <IconSwitchHorizontal
                                    style={{ width: rem(16), height: rem(16) }}
                                    stroke={1.5}
                                />
                            }
                        >
                            Change account
                        </Menu.Item>
                        <Menu.Item
                            leftSection={
                                <IconLogout
                                    style={{ width: rem(16), height: rem(16) }}
                                    stroke={1.5}
                                />
                            }
                        >
                            Logout
                        </Menu.Item>

                        <Menu.Divider />

                        <Menu.Label>Danger zone</Menu.Label>
                        <Menu.Item
                            leftSection={
                                <IconPlayerPause
                                    style={{ width: rem(16), height: rem(16) }}
                                    stroke={1.5}
                                />
                            }
                        >
                            Pause subscription
                        </Menu.Item>
                        <Menu.Item
                            color="red"
                            leftSection={
                                <IconTrash
                                    style={{ width: rem(16), height: rem(16) }}
                                    stroke={1.5}
                                />
                            }
                        >
                            Delete account
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Group>
        </div>
    );
}
