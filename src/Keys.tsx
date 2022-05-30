import { Interface } from 'readline';
import { IItem } from './index';
import { useState } from 'react';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    if (props.sorting === 'ASC') {
        props.initialData.sort((a, b) => a.id - b.id);
    } else props.initialData.sort((a, b) => b.id - a.id);

    const [id, setID] = useState(0);
    const [name, setName] = useState('');

    return (
        <ul>
            {props.initialData.map((user) => {
                if (user.id != id) {
                    return (
                        <li onClick={() => setID(user.id)} key={user.id}>
                            {user.name}
                        </li>
                    );
                } else {
                    return (
                        <input
                            autoFocus={true}
                            onChange={(e) => setName(e.currentTarget.value)}
                            key={user.id}
                            defaultValue={user.name}
                            onKeyDown={(e) => {
                                if (e.key == 'Escape') {
                                    setID(0);
                                }
                                if (e.key == 'Enter') {
                                    user.name = name;
                                    setID(0);
                                }
                            }}
                        />
                    );
                }
            })}
        </ul>
    );
}
