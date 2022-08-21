import { defineStore } from 'pinia';
import OBS from '../services/obs.service';
import { Scene } from '../types';

export const useObsConnectionStore = defineStore({
    id: 'obs-connection',
    state: () => ({
        obs: new OBS(),
        connected: false,
        scenes: [] as Scene[]
    }),
    getters: {
        getAllScenes(): Scene[] {
            return this.scenes
        },
    },
    actions: {
        async connect() {
            if(this.connected)
                return;

            let connected: boolean = await this.obs.connect('ws://127.0.0.1:4455', '4AsUzFJwOn5z9Y2p');

            this.connected = connected;
        },
        async fetchAllScenes() {
            await this.obs.getAllScenes();
            
            this.scenes = [];

            this.scenes = this.obs.scenesList;
        }
    }
})