import * as React from 'react';
import { Divider } from 'src/components/Divider';
import { CreatePersistStoreBenchmark } from 'src/runners/hooks/CreateStoreRunner/CreatePersistStoreBenchmark';
import { CreatePersistStorePlayground } from 'src/runners/hooks/CreateStoreRunner/CreatePersistStorePlayground';

export function CreateStoreRunner(): React.ReactElement {
    return (
        <div style={{ padding: 120 }}>
            <CreatePersistStorePlayground />
            <div style={{ height: 30 }} />
            <Divider />
            <CreatePersistStoreBenchmark />
        </div>
    );
}
