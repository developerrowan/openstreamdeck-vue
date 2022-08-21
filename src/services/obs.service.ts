import OBSWebSocket, { OBSRequestTypes, OBSResponseTypes } from 'obs-websocket-js';
import { Scene } from '../types';

export default class OBS {
    private obsObject = new OBSWebSocket();
    private connected: boolean = false;
    public scenesList: Scene[] = [];

    public async connect(url: string, password?: string): Promise<boolean> {
        try {
            const {obsWebSocketVersion, negotiatedRpcVersion } = await this.obsObject.connect(url, password || undefined);
            console.log(`Connected to server ${obsWebSocketVersion} (using RPC ${negotiatedRpcVersion})!`);
            this.connected = true;
            return true;
        } catch (error: any)
        {
            console.error('Failed to connect to OBS', error.code, error.message);
            this.connected = false;
            return false;
        }
    }

    public async getAllScenes() {
        const { scenes } = await this.obsObject.call('GetSceneList');

        scenes.map(async(scene) => {
            const imageData = await this.getScenePreview(scene.sceneName as string);

            this.scenesList.push({
                sceneIndex: scene.sceneIndex as number,
                sceneName: scene.sceneName as string,
                scenePreview: imageData});
        });
    }

    public async getScenePreview(sceneName: string) {
        const { imageData } = await this.obsObject.call('GetSourceScreenshot', {
            sourceName: sceneName,
            imageFormat: 'png',
        });

        return imageData;
    }

    public async disconnect(): Promise<void> {
        if(!this.connected) return;

        await this.obsObject.disconnect();
    }

    public isConnected(): boolean {
        return this.connected;
    }
}