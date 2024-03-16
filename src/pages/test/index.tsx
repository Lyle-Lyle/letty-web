import cx from 'clsx';
import { Container, Grid, Group, rem, SimpleGrid, Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { IconGripVertical } from '@tabler/icons-react';
import classes from './index.module.css';
import DndList from '@/components/DndList';

// const data = [
//     { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
//     { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
//     { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
//     { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
//     { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
// ];

export default function Test() {
    // const [state, handlers] = useListState(data);

    // const items = state.map((item, index) => (
    //     <Draggable key={item.symbol} index={index} draggableId={item.symbol}>
    //         {(provided, snapshot) => (
    //             <div
    //                 className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
    //                 ref={provided.innerRef}
    //                 {...provided.draggableProps}
    //             >
    //                 {/* --------------------------------- */}
    //                 {/* handle symbol */}
    //                 <div {...provided.dragHandleProps} className={classes.dragHandle}>
    //                     <IconGripVertical
    //                         style={{ width: rem(18), height: rem(18) }}
    //                         stroke={1.5}
    //                     />
    //                 </div>

    //                 {/* --------------------------------- */}
    //                 {/* symbol & name & subtitle */}
    //                 <Text className={classes.symbol}>{item.symbol}</Text>
    //                 <div>
    //                     <Text>{item.name}</Text>
    //                     <Text c="dimmed" size="sm">
    //                         Position: {item.position} • Mass: {item.mass}
    //                     </Text>
    //                 </div>
    //             </div>
    //         )}
    //     </Draggable>
    // ));

    return (
        <Group>
            <DndList />
        </Group>
    );
}
