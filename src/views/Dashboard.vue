<script setup>
import { useObsConnectionStore } from '../store/obsConnectionStore';

const { connect, fetchAllScenes } = useObsConnectionStore()

// connect().then(() => {
//   fetchAllScenes().then(() => {
//     const { getAllScenes } = useObsConnectionStore()

//     scenesList = getAllScenes;

//     console.log(scenesList);
//   })
// });

connect().then(() => {
    fetchAllScenes().then(() => {})
})

const { scenes } = useObsConnectionStore()

</script>

<template>
    <h1>Dashboard {{scenes.length}}</h1>
    <div v-for="scene in scenes" :key="scene.sceneIndex">
        <p>{{scene.sceneName}}</p>
        <img :src="scene.scenePreview" />
    </div>
</template>