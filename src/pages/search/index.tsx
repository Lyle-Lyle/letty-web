import HeaderTabs from '@/components/HeaderTabs';
import { LIST_SEARCH_PARAM_KEY } from '@/constant';
import request from '@/services/request';
import { Autocomplete, Button, Container, Tabs, TagsInput, rem } from '@mantine/core';
import { IconMessageCircle, IconPhoto, IconSettings } from '@tabler/icons-react';
import { log } from 'console';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

import instance from '@/services/request';
import qs from 'qs';

function ListSearch() {
    const iconStyle = { width: rem(12), height: rem(12) };
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [searchValue, setSearchValue] = useState('');
    const [value, setValue] = useState<string[]>([]);

    const { tabValue } = useParams();

    // 点击按钮之后让路由跳转
    function handleSubmit() {
        //这个是必须submit成标签之后的值，在搜索框中没有submit的参数是下面的searchValue
        console.log(`clicked: ${value}`);

        // 这个是输入框中的参数就是没submit成tag的参数
        console.log('输入框参数:' + searchValue);
        navigate({
            pathname,
            // search: `${LIST_SEARCH_PARAM_KEY}=${[...searchValue]}`,
            search: qs.stringify({ tagList: [...value] }, { arrayFormat: 'repeat' }),
        });

        instance
            .get('/user/search/tags', {
                params: {
                    tagList: value,
                },
                paramsSerializer: params => {
                    return qs.stringify(params, { indices: false });
                },
            })
            .then(response => {
                console.log(`response:${response.data[0]}`);
            })
            .catch(error => {
                console.log(`Eorror:${error}`);
            });
    }

    // 让输入框中的值和url参数同步
    const [searchParams] = useSearchParams();

    useEffect(() => {
        // const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || '';
        const curVal = searchParams.getAll(LIST_SEARCH_PARAM_KEY || []);
        // setSearchValue(curVal.join());
        setValue(curVal);
    }, [searchParams]);

    return (
        <div>
            <Container>
                <TagsInput
                    styles={{ wrapper: { width: '700px' } }}
                    placeholder="Enter tag"
                    // data={['React', 'Angular', 'Svelte']}
                    splitChars={[',', ' ', '|']}
                    style={{ width: '300px' }}
                    searchValue={searchValue}
                    onSearchChange={setSearchValue}
                    maxTags={4}
                    value={value}
                    onChange={setValue}
                />
                <Button variant="filled" onClick={handleSubmit}>
                    search
                </Button>
            </Container>

            <Tabs
                value={tabValue}
                onChange={
                    value => {
                        navigate({
                            pathname: `/search/tabs/${value}`,
                            search: `${LIST_SEARCH_PARAM_KEY}=${searchValue}`,
                        });
                    }
                    // navigate(`/search/tabs/${value}/?${LIST_SEARCH_PARAM_KEY}=${searchValue}`)
                }
                color="green"
                variant="outline"
                defaultValue="gallery"
            >
                <Tabs.List>
                    <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
                        Gallery
                    </Tabs.Tab>
                    <Tabs.Tab
                        value="messages"
                        leftSection={<IconMessageCircle style={iconStyle} />}
                    >
                        Messages
                    </Tabs.Tab>
                    <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
                        Settings
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>

                <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

                <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
            </Tabs>
        </div>
    );
}

export default ListSearch;
