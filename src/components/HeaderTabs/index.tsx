import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import ArticleCard from '../ArticleCard';

export default function HeaderTabs() {
    const iconStyle = { width: rem(12), height: rem(12) };

    return (
        <Tabs color="blue" radius="lg" defaultValue="news">
            <Tabs.List>
                <Tabs.Tab value="news" leftSection={<IconPhoto style={iconStyle} />}>
                    News
                </Tabs.Tab>
                <Tabs.Tab value="friends" leftSection={<IconMessageCircle style={iconStyle} />}>
                    Friends
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="news">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </Tabs.Panel>

            <Tabs.Panel value="friends">Friends</Tabs.Panel>
        </Tabs>
    );
}
