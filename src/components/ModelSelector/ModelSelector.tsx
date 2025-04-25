'use client';
import { useEffect } from 'react';
import { useScanStore } from '@/store/scanStore';
import { Model } from '@/lib/types';
import CustomSelect from '../Select/Select';

export default function ModelSelector() {

    const models = [{id: '1',name: "TurtleLM", version: "1.3"},{id: '2',name: "TurtleLM", version: "1.2"}, {id: '3',name: "TurtleLM", version: "1.1"}, {id: '4',name: "Customer Support Bot", version: "1.1"}] as Model[];
    const addModel = useScanStore((state) => state.setModel);
    const removeModel = useScanStore((state) => state.removeModel);
    const selectedModel = useScanStore((state) => state.model);

    useEffect(() => {
        removeModel();
    },[removeModel])

    const setModel = (model: string) => {
        if (selectedModel.id === model) {
            removeModel();
        }
        else {
            const currentModel = models.find((m) => m.id === model);
            if (currentModel) {
                addModel(currentModel);
            }
        }
    }

    return (
        <div className={`light-bg ${selectedModel.name ? 'is-ready' : ''}`}>
            <h2><span className={'step-number'}>1</span> Select model</h2>

            <CustomSelect
                placeholder="Model to scan"
                options={models.map((model) => ({
                    label: model.name + ' (v' + model.version + ')',
                    value: model.id,
                }))}
                value={selectedModel.name}
                onChange={setModel}
            />

        </div>
    )
}