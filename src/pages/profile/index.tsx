import { Card, Avatar, Text, Group, Button, Spoiler, Container, Stack, Flex } from '@mantine/core';
import classes from './index.module.css';
import DndList from '@/components/DndList';
import ArticleCard from '@/components/ArticleCard';

const stats = [
    { value: '34K', label: 'Followers' },
    { value: '187', label: 'Follows' },
    { value: '1.6K', label: 'Posts' },
];

export default function Profile() {
    const items = stats.map(stat => (
        <div key={stat.label}>
            <Text ta="center" fz="lg" fw={500}>
                {stat.value}
            </Text>
            <Text ta="center" fz="sm" c="dimmed" lh={1}>
                {stat.label}
            </Text>
        </div>
    ));

    return (
        <div className="outlet">
            <Flex justify="left" gap="lg">
                <Card withBorder padding="xl" radius="md" className={classes.card}>
                    <Card.Section h={140} />
                    <Avatar
                        src="/public/lyle.jpeg"
                        size={300}
                        radius={144}
                        mx="auto"
                        mt={-30}
                        className={classes.avatar}
                    />
                    <Text ta="center" fz="lg" fw={500} mt="sm">
                        Bill Headbanger
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed">
                        Fullstack engineer
                    </Text>
                    <Group mt="md" justify="center" gap={30}>
                        {items}
                    </Group>
                    <Button fullWidth radius="md" mt="xl" size="md" variant="default">
                        Follow
                    </Button>
                </Card>
                <Stack>
                    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                        <div>Hi this is Lyle. Nice to meet you!</div>
                    </Spoiler>
                    <div className={classes.cards}>
                        <div>Pinned</div>
                        <ArticleCard />
                        <ArticleCard />
                    </div>
                </Stack>
            </Flex>
            <Flex>
                <div className="achievement">
                    Achievements
                    <Group></Group>
                </div>
            </Flex>
        </div>
    );
}
